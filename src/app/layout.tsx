import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import type { ReactNode } from 'react';
import { I18nProvider } from '@/contexts/languageContext';
import { defaultLanguage, isLanguageCode, languageCookieName, languageDirection } from '@/translations';
import { getSiteRoot } from '@/utils/routes';
import './globals.css';

export const metadata: Metadata = {
	metadataBase: new URL(getSiteRoot()),
	title: 'Nectar immobilière',
	description: 'Agence immobilière à Tanger spécialisée dans la vente, la location et la promotion immobilière.',
	icons: {
		icon: [{ url: '/favicon.png?v=nectar-logo', type: 'image/png' }],
		shortcut: ['/favicon.png?v=nectar-logo'],
		apple: [{ url: '/apple-touch-icon.png?v=nectar-logo', sizes: '180x180', type: 'image/png' }],
	},
	robots: {
		index: true,
		follow: true,
	},
};

const RootLayout = async ({ children }: Readonly<{ children: ReactNode }>) => {
	const cookieStore = await cookies();
	const savedLanguage = cookieStore.get(languageCookieName)?.value;
	const language = isLanguageCode(savedLanguage) ? savedLanguage : defaultLanguage;

	return (
		<html lang={language} dir={languageDirection(language)}>
			<body dir={languageDirection(language)}>
				<I18nProvider initialLanguage={language}>{children}</I18nProvider>
			</body>
		</html>
	);
};

export default RootLayout;
