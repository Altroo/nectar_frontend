import { fallbackContent, fallbackEventIdeas, fallbackGuidePlaces, fallbackPurplePearlPlans, fallbackTestimonials } from '@/data/fallbackContent';
import {
	isLanguageCode,
	languageDirection,
	localizeContact,
	localizeEventIdea,
	localizeGuidePlace,
	localizeProperty,
	localizePurplePlan,
	localizeTestimonial,
	localizedPageTitle,
	translate,
} from '@/translations';

describe('translations', () => {
	it('validates supported languages and their direction', () => {
		expect(isLanguageCode('fr')).toBe(true);
		expect(isLanguageCode('ar')).toBe(true);
		expect(isLanguageCode('de')).toBe(false);
		expect(languageDirection('ar')).toBe('rtl');
		expect(languageDirection('en')).toBe('ltr');
	});

	it('resolves nested values, interpolation, and fallbacks', () => {
		expect(translate('en', 'listing.openAlbum', '', { title: 'Hilton' })).toBe('Open photo album for Hilton');
		expect(translate('es', 'missing.key', 'Fallback')).toBe('Fallback');
	});

	it('localizes content records without mutating their identity fields', () => {
		const guide = localizeGuidePlace('en', fallbackGuidePlaces[0]);
		const event = localizeEventIdea('en', fallbackEventIdeas[0]);
		const property = localizeProperty('en', fallbackContent.properties[0]);
		const testimonial = localizeTestimonial('en', fallbackTestimonials[0]);
		const plan = localizePurplePlan('en', fallbackPurplePearlPlans[0]);

		expect(guide.id).toBe(fallbackGuidePlaces[0].id);
		expect(guide.title).not.toBe(fallbackGuidePlaces[0].title);
		expect(event.category).toBe('Birthday');
		expect(property.photos).toHaveLength(fallbackContent.properties[0].photos.length);
		expect(testimonial.details).toContain('nights');
		expect(plan.button_label).toBe('Facade');
	});

	it('localizes contact addresses and page titles', () => {
		expect(localizeContact('en', fallbackContent.contact).address).toBe('Tangier, Morocco');
		expect(localizedPageTitle('en', '/vente-appartement')).toContain('Apartments');
		expect(localizedPageTitle('fr', '/unknown')).toBe(localizedPageTitle('fr', '/'));
	});
});
