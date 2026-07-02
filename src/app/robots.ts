import type { MetadataRoute } from 'next';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nectar.ma').replace(/\/$/, '');

const robots = (): MetadataRoute.Robots => ({
	rules: {
		userAgent: '*',
		allow: '/',
	},
	sitemap: `${siteUrl}/sitemap.xml`,
	host: siteUrl,
});

export default robots;
