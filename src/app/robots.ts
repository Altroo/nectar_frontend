import type { MetadataRoute } from 'next';
import { getSiteRoot } from '@/utils/routes';

const robots = (): MetadataRoute.Robots => ({
	rules: {
		userAgent: '*',
		allow: '/',
	},
	sitemap: `${getSiteRoot()}/sitemap.xml`,
	host: getSiteRoot(),
});

export default robots;
