import { render, screen } from '@testing-library/react';
import { PurplePearlPage } from '@/components/pages/purplePearl/purplePearlPage';
import { fallbackContent } from '@/data/fallbackContent';

jest.mock('@/components/forms/websiteForms', () => ({
	FloatingNewsletter: () => <aside>Newsletter</aside>,
	PurplePearlVisitForm: () => <form aria-label="visit-form" />,
}));

jest.mock('@/components/layouts/siteLayout', () => ({
	PurpleHeader: () => <header>Header</header>,
	PurplePearlFooter: () => <footer>Footer</footer>,
}));

jest.mock('@/components/pages/purplePearl/purplePlans', () => ({
	PurplePlans: ({ plans }: { plans: unknown[] }) => <div>Plans: {plans.length}</div>,
}));

jest.mock('@/contexts/languageContext', () => ({
	useTranslation: () => ({
		language: 'fr',
		t: (key: string) => key,
	}),
}));

describe('PurplePearlPage', () => {
	it('assembles the project sections from dynamic data', () => {
		render(<PurplePearlPage plans={fallbackContent.purplePearlPlans} contact={fallbackContent.contact} />);

		expect(screen.getByRole('heading', { name: /Purple Pearl/i })).toBeInTheDocument();
		expect(screen.getByText(`Plans: ${fallbackContent.purplePearlPlans.length}`)).toBeInTheDocument();
		expect(screen.getByRole('form', { name: 'visit-form' })).toBeInTheDocument();
		expect(screen.getByText('Newsletter')).toBeInTheDocument();
	});
});
