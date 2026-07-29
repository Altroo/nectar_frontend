import { cookies } from 'next/headers';
import { generateLocalizedMetadata } from '@/utils/serverTranslations';

jest.mock('next/headers', () => ({
	cookies: jest.fn(),
}));

const cookiesMock = jest.mocked(cookies);

describe('server translations', () => {
	it('uses the saved language for metadata', async () => {
		cookiesMock.mockResolvedValue({
			get: () => ({ value: 'en' }),
		} as Awaited<ReturnType<typeof cookies>>);

		await expect(generateLocalizedMetadata('/vente-appartement')).resolves.toEqual({
			title: expect.stringContaining('Apartments'),
		});
	});

	it('falls back to French for an invalid cookie', async () => {
		cookiesMock.mockResolvedValue({
			get: () => ({ value: 'invalid' }),
		} as Awaited<ReturnType<typeof cookies>>);

		await expect(generateLocalizedMetadata('/evenement')).resolves.toEqual({
			title: expect.stringContaining('Événements'),
		});
	});
});
