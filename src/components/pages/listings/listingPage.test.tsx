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

	it('keeps sold apartments visible with clear sold labels and no album access', () => {
		const soldProperty = saleProperties.find((property) => property.is_sold);
		expect(soldProperty).toBeDefined();

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
		expect(screen.queryByRole('button', { name: 'listing.openAlbum' })).not.toBeInTheDocument();
		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
	});

	it('marks the 10th-floor Hilton No. 11 rental as sold without album access', () => {
		const soldRental = rentalProperties.find((property) => property.title === 'Appartement Hilton N°11');
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

		expect(screen.getByText(soldRental!.title)).toBeInTheDocument();
		expect(screen.getByText('listing.sold')).toBeInTheDocument();
		expect(screen.getByText('listing.tags.apartmentSold')).toBeInTheDocument();
		expect(screen.queryByRole('button', { name: 'listing.openAlbum' })).not.toBeInTheDocument();
	});
});
