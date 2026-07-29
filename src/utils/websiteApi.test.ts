import { fallbackContent } from '@/data/fallbackContent';
import { getApi, postApi } from '@/utils/apiHelpers';
import { allowAnyInstance, siteInstance } from '@/utils/helpers';
import { fetchSiteContent, postWebsiteForm } from '@/utils/websiteApi';

jest.mock('@/utils/apiHelpers');
jest.mock('@/utils/helpers');

const getApiMock = jest.mocked(getApi);
const postApiMock = jest.mocked(postApi);
const allowAnyInstanceMock = jest.mocked(allowAnyInstance);
const siteInstanceMock = jest.mocked(siteInstance);
const apiInstance = {} as ReturnType<typeof allowAnyInstance>;
const frontendInstance = {} as ReturnType<typeof siteInstance>;

describe('website API', () => {
	beforeEach(() => {
		allowAnyInstanceMock.mockReturnValue(apiInstance);
		siteInstanceMock.mockReturnValue(frontendInstance);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('returns proxied website content', async () => {
		getApiMock.mockResolvedValue({ status: 200, data: fallbackContent });

		await expect(fetchSiteContent()).resolves.toBe(fallbackContent);
		expect(getApiMock).toHaveBeenCalledWith('/api/website/content', frontendInstance);
	});

	it('falls back to bundled content when the proxy fails', async () => {
		getApiMock.mockRejectedValue(new Error('offline'));

		await expect(fetchSiteContent()).resolves.toBe(fallbackContent);
	});

	it('posts website forms through the shared Axios helpers', async () => {
		const responsePayload = { ok: true };
		postApiMock.mockResolvedValue({ status: 201, data: responsePayload });

		await expect(postWebsiteForm('contact', { name: 'Nectar' })).resolves.toEqual(responsePayload);
		expect(postApiMock).toHaveBeenCalledWith('/website/contact/', apiInstance, { name: 'Nectar' });
	});

	it('throws a user-facing error when a form request is rejected', async () => {
		postApiMock.mockRejectedValue(new Error('offline'));

		await expect(postWebsiteForm('contact', {})).rejects.toThrow('La demande n’a pas pu être envoyée.');
	});
});
