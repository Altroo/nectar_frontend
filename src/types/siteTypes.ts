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
	is_sold: boolean;
	is_rented: boolean;
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

export type ListingPageProps = {
	transaction: Transaction;
	propertyType: PropertyType;
	title: string;
	kicker: string;
	description: string;
	sectionTitle: string;
	sectionDescription: string;
	properties: Property[];
	contact: SiteContact;
};

export type GalleryImageVariant = 'large' | 'card' | 'thumb';

export type CommercialRentalPageProps = {
	properties: Property[];
	contact: SiteContact;
};

export type CommercialRentalPageCopy = {
	breadcrumb: string;
	heroTitle: string;
	heroDescription: string;
	discover: string;
	advisor: string;
	introEyebrow: string;
	introTitle: string;
	introDescription: string;
	features: Array<{ title: string; description: string }>;
	search: string;
	searchPlaceholder: string;
	type: string;
	allTypes: string;
	residence: string;
	allResidences: string;
	minimumSurface: string;
	allSurfaces: string;
	filter: string;
	available: string;
	previousUnits: string;
	nextUnits: string;
	forRent: string;
	rented: string;
	addFavorite: string;
	removeFavorite: string;
	totalSurface: string;
	rdc: string;
	mezzanine: string;
	viewDetails: string;
	requestAvailability: string;
	noResults: string;
	activitiesTitle: string;
	activitiesDescription: string;
	activities: Array<{ title: string; description: string }>;
	gallery: string;
	closeGallery: string;
	previousPhoto: string;
	nextPhoto: string;
	whatsappMessage: string;
};

export type ProcessPanelKey = 'vente' | 'location';

export type ProcessStepItem = {
	number: string;
	title: string;
	copy: string;
};
