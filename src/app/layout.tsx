import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import type { ReactNode } from 'react';
import { I18nProvider } from '@/i18n/client';
import { defaultLanguage, isLanguageCode, languageCookieName, languageDirection } from '@/i18n/translations';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nectar.ma';

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: 'Nectar immobilier',
	description: 'Agence immobiliere a Tanger specialisee dans la vente, la location et la promotion immobiliere.',
	icons: {
		icon: [{ url: '/favicon.svg?v=nectar', type: 'image/svg+xml' }],
		shortcut: ['/favicon.svg?v=nectar'],
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
