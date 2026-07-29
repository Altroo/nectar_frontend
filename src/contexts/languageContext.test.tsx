import { act, render, screen } from '@testing-library/react';
import { I18nProvider, setLanguage, useTranslation } from '@/contexts/languageContext';
import { languageCookieName } from '@/translations';

jest.mock('next/navigation', () => ({
	usePathname: () => '/vente-appartement',
}));

const LanguageConsumer = () => {
	const { language, dir, t } = useTranslation();
	return (
		<div>
			<span>{language}</span>
			<span>{dir}</span>
			<span>{t('nav.home')}</span>
		</div>
	);
};

describe('language context', () => {
	beforeEach(() => {
		window.localStorage.clear();
		document.cookie = `${languageCookieName}=; Max-Age=0; Path=/`;
		Object.defineProperty(window.navigator, 'language', { configurable: true, value: 'de-DE' });
	});

	it('uses the default language when the browser has no saved choice', () => {
		render(
			<I18nProvider initialLanguage="es">
				<LanguageConsumer />
			</I18nProvider>,
		);

		expect(screen.getByText('fr')).toBeInTheDocument();
		expect(screen.getByText('Accueil')).toBeInTheDocument();
		expect(document.documentElement).toHaveAttribute('lang', 'fr');
	});

	it('persists and broadcasts language changes', () => {
		render(
			<I18nProvider initialLanguage="fr">
				<LanguageConsumer />
			</I18nProvider>,
		);

		act(() => setLanguage('ar'));

		expect(screen.getByText('ar')).toBeInTheDocument();
		expect(screen.getByText('rtl')).toBeInTheDocument();
		expect(window.localStorage.getItem(languageCookieName)).toBe('ar');
		expect(document.cookie).toContain(`${languageCookieName}=ar`);
	});
});
