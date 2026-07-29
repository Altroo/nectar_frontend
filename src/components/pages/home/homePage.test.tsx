import { render, screen } from '@testing-library/react';
import { HomePage } from '@/components/pages/home/homePage';
import { fallbackContent } from '@/data/fallbackContent';

jest.mock('@/components/forms/websiteForms', () => ({
	ContactForm: () => <form aria-label="contact-form" />,
	FloatingNewsletter: () => <aside>Newsletter</aside>,
}));

jest.mock('@/components/layouts/siteLayout', () => ({
	MainHeader: () => <header>Header</header>,
	LinkedFooter: () => <footer>Footer</footer>,
}));

jest.mock('@/components/pages/home/homeProcess', () => ({
	HomeProcessSection: () => <section>Process</section>,
}));

jest.mock('@/contexts/languageContext', () => ({
	useTranslation: () => ({
		language: 'fr',
		t: (key: string, fallback = '') => fallback || key,
	}),
}));

describe('HomePage', () => {
	it('renders dynamic guide, testimonial, and contact content', () => {
		render(<HomePage content={fallbackContent} />);

		expect(screen.getByText(fallbackContent.guidePlaces[0].title)).toBeInTheDocument();
		expect(screen.getAllByText(fallbackContent.testimonials[0].client_name).length).toBeGreaterThan(0);
		expect(screen.getByRole('form', { name: 'contact-form' })).toBeInTheDocument();
		expect(screen.getByText('Newsletter')).toBeInTheDocument();
	});
});
