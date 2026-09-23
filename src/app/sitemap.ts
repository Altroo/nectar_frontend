import type { MetadataRoute } from 'next';
import { baseRoutes } from '@/data/rawData';
import { fetchSiteContent } from '@/utils/websiteApi';
import { getSiteRoot } from '@/utils/routes';

export const dynamic = 'force-dynamic';

const toUrl = (path: string) => `${getSiteRoot()}${path}`;

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
	const content = await fetchSiteContent();
	const now = new Date();
	const hasGuide = content.guidePlaces.length > 0;
	const hasEvents = content.eventIdeas.length > 0;
	const hasPurplePearl = content.purplePearlPlans.length > 0;

	return baseRoutes
		.filter((route) => {
			if (route.path === '/guide-tanger') return hasGuide;
			if (route.path === '/evenement') return hasEvents;
			if (route.path === '/purple-pearl') return hasPurplePearl;
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
