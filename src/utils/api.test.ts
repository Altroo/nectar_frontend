import { fallbackContent } from '@/data/fallbackContent';
import { fetchSiteContent, postWebsiteForm } from '@/utils/api';

describe('website API', () => {
	const fetchMock = jest.fn<ReturnType<typeof fetch>, Parameters<typeof fetch>>();

	beforeEach(() => {
		global.fetch = fetchMock;
	});

	afterEach(() => {
		fetchMock.mockReset();
		delete process.env.NEXT_PUBLIC_ROOT_API_URL;
	});

	it('returns API content when the request succeeds', async () => {
		process.env.NEXT_PUBLIC_ROOT_API_URL = 'https://api.example.test/api';
		fetchMock.mockResolvedValue({
			ok: true,
			json: async () => fallbackContent,
		} as Response);

		await expect(fetchSiteContent()).resolves.toBe(fallbackContent);
		expect(fetchMock).toHaveBeenCalledWith('https://api.example.test/api/website/content/', {
			cache: 'no-store',
			next: { revalidate: 0 },
		});
	});

	it('falls back to local content when the request fails', async () => {
		fetchMock.mockRejectedValue(new Error('offline'));

		await expect(fetchSiteContent()).resolves.toBe(fallbackContent);
	});

	it('posts website forms as JSON', async () => {
		process.env.NEXT_PUBLIC_ROOT_API_URL = 'https://api.example.test/api';
		const responsePayload = { ok: true };
		fetchMock.mockResolvedValue({
			ok: true,
			json: async () => responsePayload,
		} as Response);

		await expect(postWebsiteForm('contact', { name: 'Nectar' })).resolves.toEqual(responsePayload);
		expect(fetchMock).toHaveBeenCalledWith('https://api.example.test/api/website/contact/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name: 'Nectar' }),
		});
	});

	it('throws a user-facing error when a form request is rejected', async () => {
		fetchMock.mockResolvedValue({ ok: false } as Response);

		await expect(postWebsiteForm('contact', {})).rejects.toThrow('La demande n’a pas pu être envoyée.');
	});
});
