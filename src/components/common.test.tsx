import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageSwitcher } from '@/components/common';
import { I18nProvider } from '@/i18n/client';
import { languageCookieName } from '@/i18n/translations';

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
