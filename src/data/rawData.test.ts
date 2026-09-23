import { languages } from '@/translations';
import { baseRoutes, commercialActivityImages, commercialRentalCopies, contactEmail, processOrder, socialLinks } from './rawData';

describe('site raw data', () => {
	it('covers each language and every commercial activity image', () => {
		expect(Object.keys(commercialRentalCopies).sort()).toEqual(languages.map(({ code }) => code).sort());
		for (const copy of Object.values(commercialRentalCopies)) {
			expect(copy.activities).toHaveLength(commercialActivityImages.length);
		}
	});

	it('keeps navigation and contact data consistent', () => {
		expect(new Set(baseRoutes.map(({ path }) => path)).size).toBe(baseRoutes.length);
		expect(processOrder).toEqual(['vente', 'location']);
		expect(contactEmail).toMatch(/@nectar\.ma$/);
		expect(Object.values(socialLinks).every((url) => url.startsWith('https://'))).toBe(true);
	});
});
