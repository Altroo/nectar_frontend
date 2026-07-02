import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
	title: 'Nectar immobilier',
	description: 'Agence immobiliere a Tanger specialisee dans la vente, la location et la promotion immobiliere.',
	icons: {
		icon: [{ url: '/favicon.svg?v=nectar', type: 'image/svg+xml' }],
		shortcut: ['/favicon.svg?v=nectar'],
	},
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
	<html lang="fr">
		<body>{children}</body>
	</html>
);

export default RootLayout;
