import { getApiRoot, getSiteRoot, WEBSITE_CONTENT_API, WEBSITE_CONTENT_PROXY, WEBSITE_FORM_API } from '@/utils/routes';

describe('routes', () => {
	afterEach(() => {
		delete process.env.NEXT_PUBLIC_ROOT_API_URL;
		delete process.env.NEXT_PUBLIC_SITE_URL;
	});

	it('normalizes configured API and site roots', () => {
		process.env.NEXT_PUBLIC_ROOT_API_URL = 'https://api.example.test/api///';
		process.env.NEXT_PUBLIC_SITE_URL = 'https://www.example.test/';

		expect(getApiRoot()).toBe('https://api.example.test/api');
		expect(getSiteRoot()).toBe('https://www.example.test');
	});

	it('rejects missing environment roots instead of using hardcoded fallbacks', () => {
		expect(() => getApiRoot()).toThrow('NEXT_PUBLIC_ROOT_API_URL is not configured.');
		expect(() => getSiteRoot()).toThrow('NEXT_PUBLIC_SITE_URL is not configured.');
	});

	it('defines website API routes in one place', () => {
		expect(WEBSITE_CONTENT_API).toBe('/website/content/');
		expect(WEBSITE_CONTENT_PROXY).toBe('/api/website/content');
		expect(WEBSITE_FORM_API('/newsletter/')).toBe('/website/newsletter/');
	});
});
