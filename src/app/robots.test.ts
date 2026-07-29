import robots from '@/app/robots';

describe('robots metadata', () => {
	afterEach(() => {
		delete process.env.NEXT_PUBLIC_SITE_URL;
	});

	it('uses the configured site root for crawler URLs', () => {
		process.env.NEXT_PUBLIC_SITE_URL = 'https://www.example.test/';

		expect(robots()).toEqual({
			rules: {
				userAgent: '*',
				allow: '/',
			},
			sitemap: 'https://www.example.test/sitemap.xml',
			host: 'https://www.example.test',
		});
	});
});
