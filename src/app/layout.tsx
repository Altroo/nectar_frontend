import type { Metadata } from 'next';
import type { ReactNode } from 'react';
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

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
	<html lang="fr">
		<body>{children}</body>
	</html>
);

export default RootLayout;
