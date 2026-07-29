import type { AxiosInstance } from 'axios';
import { getApi, postApi } from '@/utils/apiHelpers';

describe('API helpers', () => {
	it('returns GET response status and data', async () => {
		const instance = {
			get: jest.fn().mockResolvedValue({ status: 200, data: { ok: true } }),
		} as unknown as AxiosInstance;

		await expect(getApi('/content/', instance)).resolves.toEqual({ status: 200, data: { ok: true } });
		expect(instance.get).toHaveBeenCalledWith('/content/');
	});

	it('returns POST response status and data', async () => {
		const instance = {
			post: jest.fn().mockResolvedValue({ status: 201, data: { id: 7 } }),
		} as unknown as AxiosInstance;
		const payload = { name: 'Nectar' };

		await expect(postApi('/contact/', instance, payload)).resolves.toEqual({ status: 201, data: { id: 7 } });
		expect(instance.post).toHaveBeenCalledWith('/contact/', payload);
	});

	it('preserves Axios errors for the caller to handle', async () => {
		const error = new Error('offline');
		const instance = {
			get: jest.fn().mockRejectedValue(error),
		} as unknown as AxiosInstance;

		await expect(getApi('/content/', instance)).rejects.toBe(error);
	});
});
