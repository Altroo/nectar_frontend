import { fallbackContent } from '@/data/fallbackContent';

describe('fallback content', () => {
	it('contains complete, ordered public content', () => {
		expect(fallbackContent.contact.whatsapp_number).toMatch(/^\d+$/);
		expect(fallbackContent.properties.length).toBeGreaterThan(0);
		expect(fallbackContent.guidePlaces.some((place) => place.section === 'monuments')).toBe(true);
		expect(fallbackContent.guidePlaces.some((place) => place.section === 'musees')).toBe(true);
		expect(fallbackContent.eventIdeas.every((idea) => idea.bullet_points.length > 0)).toBe(true);
		expect(fallbackContent.purplePearlPlans.every((plan) => plan.key)).toBe(true);
		expect(fallbackContent.testimonials.every((testimonial) => testimonial.rating)).toBe(true);
	});

	it('keeps property photo albums internally consistent', () => {
		for (const property of fallbackContent.properties) {
			expect(property.photos.map((photo) => photo.sort_order)).toEqual(
				[...property.photos].sort((a, b) => a.sort_order - b.sort_order).map((photo) => photo.sort_order),
			);
			if (property.photos.length > 0) {
				expect(property.image).toBeTruthy();
			}
		}
	});
});
