import sitemap from '@/app/sitemap';
import { fallbackContent } from '@/data/fallbackContent';
import { fetchSiteContent } from '@/utils/websiteApi';

jest.mock('@/utils/websiteApi', () => ({
	fetchSiteContent: jest.fn(),
}));

const fetchSiteContentMock = jest.mocked(fetchSiteContent);

describe('sitemap metadata', () => {
	beforeEach(() => {
		process.env.NEXT_PUBLIC_SITE_URL = 'https://www.example.test/';
	});

	afterEach(() => {
		jest.clearAllMocks();
		delete process.env.NEXT_PUBLIC_SITE_URL;
	});

	it('includes dynamic public sections when content exists', async () => {
		fetchSiteContentMock.mockResolvedValue(fallbackContent);

		const routes = await sitemap();

		expect(routes.map((route) => route.url)).toEqual(
			expect.arrayContaining([
				'https://www.example.test/',
				'https://www.example.test/guide-tanger',
				'https://www.example.test/evenement',
				'https://www.example.test/purple-pearl',
			]),
		);
	});

	it('removes empty optional sections', async () => {
		fetchSiteContentMock.mockResolvedValue({
			...fallbackContent,
			guidePlaces: [],
			eventIdeas: [],
			purplePearlPlans: [],
		});

		const routes = await sitemap();
		const urls = routes.map((route) => route.url);

		expect(urls).not.toContain('https://www.example.test/guide-tanger');
		expect(urls).not.toContain('https://www.example.test/evenement');
		expect(urls).not.toContain('https://www.example.test/purple-pearl');
	});
});
