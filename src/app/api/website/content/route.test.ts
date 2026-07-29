/** @jest-environment node */

import { GET } from '@/app/api/website/content/route';
import { getApi } from '@/utils/apiHelpers';
import { allowAnyInstance } from '@/utils/helpers';

jest.mock('@/utils/apiHelpers');
jest.mock('@/utils/helpers');

const getApiMock = jest.mocked(getApi);
const allowAnyInstanceMock = jest.mocked(allowAnyInstance);
const apiInstance = {} as ReturnType<typeof allowAnyInstance>;

describe('website content route', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('proxies content through the shared API layer', async () => {
		allowAnyInstanceMock.mockReturnValue(apiInstance);
		getApiMock.mockResolvedValue({ status: 200, data: { properties: [] } });

		const response = await GET();

		expect(getApiMock).toHaveBeenCalledWith('/website/content/', apiInstance);
		expect(response.status).toBe(200);
		expect(response.headers.get('content-type')).toBe('application/json');
		expect(response.headers.get('cache-control')).toBe('no-store');
		await expect(response.json()).resolves.toEqual({ properties: [] });
	});

	it('returns a gateway error when the API is unavailable', async () => {
		allowAnyInstanceMock.mockImplementation(() => {
			throw new Error('missing configuration');
		});

		const response = await GET();

		expect(response.status).toBe(502);
		await expect(response.json()).resolves.toEqual({ detail: 'Website content is unavailable.' });
	});
});
