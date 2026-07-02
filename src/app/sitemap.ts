import type { MetadataRoute } from 'next';
import { fetchSiteContent } from '@/utils/api';

export const dynamic = 'force-dynamic';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nectar.ma').replace(/\/$/, '');

const toUrl = (path: string) => `${siteUrl}${path}`;

const baseRoutes = [
	{ path: '/', changeFrequency: 'weekly' as const, priority: 1 },
	{ path: '/vente-appartement.html', changeFrequency: 'weekly' as const, priority: 0.9 },
	{ path: '/vente-local.html', changeFrequency: 'weekly' as const, priority: 0.85 },
	{ path: '/location-appartement.html', changeFrequency: 'weekly' as const, priority: 0.85 },
	{ path: '/location-local.html', changeFrequency: 'weekly' as const, priority: 0.8 },
	{ path: '/purple-pearl.html', changeFrequency: 'weekly' as const, priority: 0.8 },
	{ path: '/guide-tanger.html', changeFrequency: 'monthly' as const, priority: 0.7 },
	{ path: '/evenement.html', changeFrequency: 'monthly' as const, priority: 0.65 },
];

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
	const content = await fetchSiteContent();
	const now = new Date();
	const hasGuide = content.guidePlaces.length > 0;
	const hasEvents = content.eventIdeas.length > 0;
	const hasPurplePearl = content.purplePearlPlans.length > 0;

	return baseRoutes
		.filter((route) => {
			if (route.path === '/guide-tanger.html') return hasGuide;
			if (route.path === '/evenement.html') return hasEvents;
			if (route.path === '/purple-pearl.html') return hasPurplePearl;
			return true;
		})
		.map((route) => ({
			url: toUrl(route.path),
			lastModified: now,
			changeFrequency: route.changeFrequency,
			priority: route.priority,
		}));
};

export default sitemap;
