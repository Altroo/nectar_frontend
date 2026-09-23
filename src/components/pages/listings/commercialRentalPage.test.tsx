import { fireEvent, render, screen } from '@testing-library/react';
import { CommercialRentalPage } from '@/components/pages/listings/commercialRentalPage';
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

describe('CommercialRentalPage', () => {
	const commercialProperties = fallbackContent.properties.filter((property) => property.transaction === 'rent' && property.property_type === 'commercial');

	beforeEach(() => {
		window.sessionStorage.clear();
		Object.defineProperty(HTMLElement.prototype, 'scrollBy', { configurable: true, value: jest.fn() });
	});

	it('filters commercial units by search text', () => {
		render(<CommercialRentalPage properties={commercialProperties} contact={fallbackContent.contact} />);

		expect(screen.getByText('Locaux disponibles')).toBeInTheDocument();
		fireEvent.change(screen.getByPlaceholderText('Ex : Local A1, Local B3...'), {
			target: { value: 'missing unit' },
		});
		expect(screen.getByText('Aucun local ne correspond aux filtres sélectionnés.')).toBeInTheDocument();
	});

	it('opens and closes the property gallery', () => {
		render(<CommercialRentalPage properties={[commercialProperties[0]]} contact={fallbackContent.contact} />);

		fireEvent.click(screen.getByRole('button', { name: /Voir les détails/i }));
		expect(screen.getByRole('dialog')).toBeInTheDocument();
		fireEvent.click(screen.getAllByRole('button', { name: 'Fermer la galerie' })[0]);
		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
	});

	it.each(['Local A4 · ERASMUS TOWER', 'Local A5 · ERASMUS TOWER', 'Local B6 · ERASMUS TOWER'])('marks %s as rented and disables its gallery', (title) => {
		const rentedProperty = commercialProperties.find((property) => property.title === title);
		expect(rentedProperty?.is_rented).toBe(true);

		render(<CommercialRentalPage properties={[rentedProperty!]} contact={fallbackContent.contact} />);

		expect(screen.getByText('Loué')).toBeInTheDocument();
		expect(screen.getByRole('img', { name: `${title.split(' · ')[0]} · Erasmus Tower` }).closest('article')).toHaveClass('is-rented');
		expect(screen.getByText('Voir les détails')).toHaveAttribute('aria-disabled', 'true');
		expect(screen.queryByRole('button', { name: /Voir les détails/i })).not.toBeInTheDocument();
		expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
	});
});
