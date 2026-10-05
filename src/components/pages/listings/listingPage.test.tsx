import { fireEvent, render, screen } from '@testing-library/react';
import { ListingPage } from '@/components/pages/listings/listingPage';
import { fallbackContent } from '@/data/fallbackContent';

jest.mock('@/components/layouts/siteLayout', () => ({
	MainHeader: () => <header>Header</header>,
	LinkedFooter: () => <footer>Footer</footer>,
}));

jest.mock('@/contexts/languageContext', () => ({
	useTranslation: () => ({
		language: 'fr',
		t: (key: string, fallback = '') => fallback || key,
	}),
}));

describe('ListingPage', () => {
	const saleProperties = fallbackContent.properties.filter((property) => property.transaction === 'sale' && property.property_type === 'apartment');
	const rentalProperties = fallbackContent.properties.filter((property) => property.transaction === 'rent' && property.property_type === 'apartment');

	beforeEach(() => {
		window.sessionStorage.clear();
	});

	it('filters apartment listings and exposes an empty state', () => {
		render(
			<ListingPage
				transaction="sale"
				propertyType="apartment"
				title="Sale"
				kicker="Sale kicker"
				description="Sale description"
				sectionTitle="Properties"
				sectionDescription="Available properties"
				properties={saleProperties}
				contact={fallbackContent.contact}
			/>,
		);

		expect(screen.getByText(saleProperties[0].title)).toBeInTheDocument();
		fireEvent.change(screen.getByPlaceholderText('listing.searchApartmentPlaceholder'), {
			target: { value: 'definitely missing' },
		});
		expect(screen.getByText('listing.noResults')).toBeInTheDocument();
	});

	it('shows Marina first, available Hilton next and sold apartments last despite older sort priorities', () => {
		const properties = saleProperties.map((property) => ({
			...property,
			sort_order: property.sort_order - (property.is_sold ? 100 : property.residence === 'HILTON' ? 50 : 0),
		}));
		render(
			<ListingPage
				transaction="sale"
				propertyType="apartment"
				title="Sale"
				kicker="Sale kicker"
				description="Sale description"
				sectionTitle="Properties"
				sectionDescription="Available properties"
				properties={properties.reverse()}
				contact={fallbackContent.contact}
			/>,
		);

		const cards = screen.getAllByRole('article');
		expect(cards.map((card) => card.querySelector('h3')?.textContent)).toEqual([
			'MARINA BLOC B · N°302',
			'MARINA BLOC B · N°303',
			'MARINA BLOC B · N°306',
			'HILTON · N°03',
			'HILTON N° 1',
			'HILTON · N°11',
			'HILTON · N°13',
			'MANDELSON BLOC A · N°47',
		]);
		for (const card of cards.slice(0, 5)) expect(card).not.toHaveClass('is-sold');
		for (const card of cards.slice(5)) expect(card).toHaveClass('is-sold');

		fireEvent.change(screen.getByPlaceholderText('listing.searchApartmentPlaceholder'), {
			target: { value: 'Marina' },
		});
		expect(screen.getAllByRole('article').map((card) => card.querySelector('h3')?.textContent)).toEqual([
			'MARINA BLOC B · N°302',
			'MARINA BLOC B · N°303',
			'MARINA BLOC B · N°306',
		]);
	});

	it('toggles favorites and opens a property album', () => {
		render(
			<ListingPage
				transaction="sale"
				propertyType="apartment"
				title="Sale"
				kicker="Sale kicker"
				description="Sale description"
				sectionTitle="Properties"
				sectionDescription="Available properties"
				properties={[saleProperties[0]]}
				contact={fallbackContent.contact}
			/>,
		);
		const favorite = screen.getByRole('button', { name: new RegExp(`listing.addFavorite.*${saleProperties[0].title}`) });

		fireEvent.click(favorite);
		expect(favorite).toHaveAttribute('aria-pressed', 'true');
		fireEvent.click(screen.getByRole('button', { name: 'listing.openAlbum' }));
		expect(screen.getByRole('dialog')).toBeInTheDocument();
	});

	it.each(['HILTON · N°11', 'HILTON · N°13', 'MANDELSON BLOC A · N°47'])('keeps %s thumbnails visible without album access', (title) => {
		const soldProperty = saleProperties.find((property) => property.title === title);
		expect(soldProperty).toBeDefined();
		expect(soldProperty?.is_sold).toBe(true);

		render(
			<ListingPage
				transaction="sale"
				propertyType="apartment"
				title="Sale"
				kicker="Sale kicker"
				description="Sale description"
				sectionTitle="Properties"
				sectionDescription="Available properties"
				properties={[soldProperty!]}
				contact={fallbackContent.contact}
			/>,
		);

		expect(screen.getByText(soldProperty!.title)).toBeInTheDocument();
		expect(screen.getByText('listing.sold')).toBeInTheDocument();
		expect(screen.getByText('listing.tags.apartmentSold')).toBeInTheDocument();
		expect(screen.getByRole('img', { name: soldProperty!.photos[0].alt_text })).toBeInTheDocument();
		expect(screen.queryByRole('button', { name: 'listing.openAlbum' })).not.toBeInTheDocument();
		expect(screen.queryByRole('button', { name: 'listing.viewPhoto' })).not.toBeInTheDocument();
		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
	});

	it('shows available rentals first and sold rentals last, including after filtering', () => {
		render(
			<ListingPage
				transaction="rent"
				propertyType="apartment"
				title="Rent"
				kicker="Rent kicker"
				description="Rent description"
				sectionTitle="Properties"
				sectionDescription="Available properties"
				properties={[...rentalProperties].reverse()}
				contact={fallbackContent.contact}
			/>,
		);

		const cards = screen.getAllByRole('article');
		expect(cards.map((card) => card.querySelector('h3')?.textContent)).toEqual([
			'Appartement Hilton N°05',
			'Appartement Hilton N°11 - Etage 12',
			'Appartement City Center Ra1 N°B',
			'Appartement Hilton N°11',
			'Appartement Hilton N°13',
		]);
		for (const card of cards.slice(0, 3)) expect(card).not.toHaveClass('is-sold');
		for (const card of cards.slice(3)) expect(card).toHaveClass('is-sold');

		fireEvent.change(screen.getByPlaceholderText('listing.searchApartmentPlaceholder'), {
			target: { value: 'Hilton' },
		});
		expect(screen.getAllByRole('article').map((card) => card.querySelector('h3')?.textContent)).toEqual([
			'Appartement Hilton N°05',
			'Appartement Hilton N°11 - Etage 12',
			'Appartement Hilton N°11',
			'Appartement Hilton N°13',
		]);
	});

	it.each(['Appartement Hilton N°11', 'Appartement Hilton N°13'])('marks %s as sold without album access', (title) => {
		const soldRental = rentalProperties.find((property) => property.title === title);
		expect(soldRental?.is_sold).toBe(true);

		render(
			<ListingPage
				transaction="rent"
				propertyType="apartment"
				title="Rent"
				kicker="Rent kicker"
				description="Rent description"
				sectionTitle="Properties"
				sectionDescription="Available properties"
				properties={[soldRental!]}
				contact={fallbackContent.contact}
			/>,
		);

		expect(screen.getByText(soldRental!.title).closest('article')).toHaveClass('is-sold');
		expect(screen.getByText('listing.sold')).toBeInTheDocument();
		expect(screen.getByText('listing.tags.apartmentSold')).toBeInTheDocument();
		expect(screen.getByRole('img', { name: soldRental!.photos[0].alt_text })).toBeInTheDocument();
		expect(screen.queryByRole('button', { name: 'listing.openAlbum' })).not.toBeInTheDocument();
		expect(screen.queryByRole('button', { name: 'listing.viewPhoto' })).not.toBeInTheDocument();
	});
});
