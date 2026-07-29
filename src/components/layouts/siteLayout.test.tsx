import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageSwitcher, LinkedFooter, MainHeader } from '@/components/layouts/siteLayout';
import { I18nProvider } from '@/contexts/languageContext';
import { fallbackContent } from '@/data/fallbackContent';
import { languageCookieName } from '@/translations';

jest.mock('next/navigation', () => ({
	usePathname: () => '/',
}));

describe('LanguageSwitcher', () => {
	beforeEach(() => {
		window.localStorage.clear();
		window.localStorage.setItem(languageCookieName, 'fr');
	});

	it('updates the active language and document direction', async () => {
		const user = userEvent.setup();
		render(
			<I18nProvider initialLanguage="fr">
				<LanguageSwitcher />
			</I18nProvider>,
		);

		expect(screen.getByRole('button', { name: 'FR' })).toHaveAttribute('aria-pressed', 'true');

		await user.click(screen.getByRole('button', { name: 'AR' }));

		expect(screen.getByRole('button', { name: 'AR' })).toHaveAttribute('aria-pressed', 'true');
		expect(document.documentElement).toHaveAttribute('lang', 'ar');
		expect(document.documentElement).toHaveAttribute('dir', 'rtl');
	});
});

describe('site layout', () => {
	beforeEach(() => {
		window.localStorage.clear();
		window.localStorage.setItem(languageCookieName, 'fr');
	});

	it('opens and closes the main mobile navigation', async () => {
		const user = userEvent.setup();
		render(
			<I18nProvider initialLanguage="fr">
				<MainHeader />
			</I18nProvider>,
		);
		const toggle = screen.getByRole('button', { name: 'Ouvrir le menu' });

		await user.click(toggle);
		expect(toggle).toHaveAttribute('aria-expanded', 'true');
		await user.click(screen.getByRole('link', { name: 'Accueil' }));
		expect(toggle).toHaveAttribute('aria-expanded', 'false');
	});

	it('renders localized contact and social links in the footer', () => {
		render(
			<I18nProvider initialLanguage="fr">
				<LinkedFooter contact={fallbackContent.contact} />
			</I18nProvider>,
		);

		expect(screen.getByText(fallbackContent.contact.phone_display)).toBeInTheDocument();
		expect(screen.getByRole('link', { name: /Instagram/i })).toHaveAttribute('target', '_blank');
	});
});
