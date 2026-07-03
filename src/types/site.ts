export type Transaction = 'sale' | 'rent';
export type PropertyType = 'apartment' | 'commercial';

export type SiteContact = {
	address: string;
	phone_display: string;
	whatsapp_number: string;
	email_display: string;
};

export type Property = {
	id: number;
	transaction: Transaction;
	property_type: PropertyType;
	title: string;
	tag: string;
	residence: string;
	district: string;
	address: string;
	description: string;
	floor: string;
	unit_number: string;
	bedrooms: number | null;
	surface_total: number | null;
	surface_sold: string;
	mezzanine: string;
	project_label: string;
	price: string;
	price_note: string;
	cta_label: string;
	image: string;
	photos: PropertyPhoto[];
	sort_order: number;
};

export type PropertyPhoto = {
	id: number;
	title: string;
	alt_text: string;
	image: string;
	sort_order: number;
};

export type GuidePlace = {
	id: number;
	section: 'monuments' | 'musees';
	title: string;
	description: string;
	image: string;
	sort_order: number;
};

export type EventIdea = {
	id: number;
	category: string;
	title: string;
	description: string;
	bullet_points: string[];
	image: string;
	sort_order: number;
};

export type PurplePearlPlan = {
	id: number;
	key: string;
	button_label: string;
	title: string;
	description: string;
	alt_text: string;
	image: string;
	image_3d_title: string;
	image_3d: string;
	image_3d_alt_text: string;
	image_3d_secondary_title: string;
	image_3d_secondary: string;
	image_3d_secondary_alt_text: string;
	sort_order: number;
};

export type Testimonial = {
	id: number;
	rating: string;
	quote: string;
	client_name: string;
	details: string;
	highlight_city_center: boolean;
	sort_order: number;
};

export type SiteContent = {
	defaultLang: string;
	contact: SiteContact;
	properties: Property[];
	guidePlaces: GuidePlace[];
	eventIdeas: EventIdea[];
	purplePearlPlans: PurplePearlPlan[];
	testimonials: Testimonial[];
};
