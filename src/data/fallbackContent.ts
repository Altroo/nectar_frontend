import type { EventIdea, GuidePlace, Property, PropertyPhoto, PurplePearlPlan, SiteContent, Testimonial } from '@/types/site';

const cityCenterPhotos: PropertyPhoto[] = [
	['Salon', '/assets/city-center/city-center-salon-large.jpg', "Salon de l'appartement City Center"],
	['Séjour', '/assets/city-center/city-center-sejour-large.jpg', "Séjour de l'appartement City Center"],
	['Chambre 1', '/assets/city-center/city-center-chambre-1-large.jpg', "Chambre 1 de l'appartement City Center"],
	['Chambre 2', '/assets/city-center/city-center-chambre-2-large.jpg', "Chambre 2 de l'appartement City Center"],
	['Chambre 3', '/assets/city-center/city-center-chambre-3-large.jpg', "Chambre 3 de l'appartement City Center"],
	['Chambre 4', '/assets/city-center/city-center-chambre-4-large.jpg', "Chambre 4 de l'appartement City Center"],
	['Cuisine', '/assets/city-center/city-center-cuisine-large.jpg', "Cuisine de l'appartement City Center"],
	['Toilette 1', '/assets/city-center/city-center-toilette-1-large.jpg', "Toilette de l'appartement City Center"],
	['Toilette 2', '/assets/city-center/city-center-toilette-2-large.jpg', "Deuxième toilette de l'appartement City Center"],
].map(([title, image, altText], index) => ({
	id: 1000 + index,
	title,
	alt_text: altText,
	image,
	sort_order: index + 1,
}));

const hiltonN05Photos: PropertyPhoto[] = [
	['Salon', '/assets/hilton-n05/hilton-n05-salon-large.jpg', "Salon de l'appartement Hilton N°05"],
	['Chambre 1', '/assets/hilton-n05/hilton-n05-chambre-1-large.jpg', "Chambre 1 de l'appartement Hilton N°05"],
	['Chambre 2', '/assets/hilton-n05/hilton-n05-chambre-2-large.jpg', "Chambre 2 de l'appartement Hilton N°05"],
	['Coffre-fort', '/assets/hilton-n05/hilton-n05-coffre-fort-large.jpg', "Coffre-fort de l'appartement Hilton N°05"],
	['Cuisine', '/assets/hilton-n05/hilton-n05-cuisine-large.jpg', "Cuisine de l'appartement Hilton N°05"],
	['Toilette 1', '/assets/hilton-n05/hilton-n05-toilette-1-large.jpg', "Toilette 1 de l'appartement Hilton N°05"],
	['Toilette 2', '/assets/hilton-n05/hilton-n05-toilette-2-large.jpg', "Toilette 2 de l'appartement Hilton N°05"],
].map(([title, image, altText], index) => ({
	id: 1100 + index,
	title,
	alt_text: altText,
	image,
	sort_order: index + 1,
}));

const hiltonN11Photos: PropertyPhoto[] = [
	['Salon', '/assets/hilton-n11/hilton-n11-salon-large.jpg', "Salon de l'appartement Hilton N°11"],
	['Salon 2', '/assets/hilton-n11/hilton-n11-salon-2-large.jpg', "Deuxième vue du salon de l'appartement Hilton N°11"],
	['Meuble TV', '/assets/hilton-n11/hilton-n11-meuble-tv-large.jpg', "Meuble TV de l'appartement Hilton N°11"],
	['Chambre', '/assets/hilton-n11/hilton-n11-chambre-large.jpg', "Chambre de l'appartement Hilton N°11"],
	['Placard', '/assets/hilton-n11/hilton-n11-placard-large.jpg', "Placard de l'appartement Hilton N°11"],
	['Coffre-fort', '/assets/hilton-n11/hilton-n11-coffre-fort-large.jpg', "Coffre-fort de l'appartement Hilton N°11"],
	['Cuisine', '/assets/hilton-n11/hilton-n11-cuisine-large.jpg', "Cuisine de l'appartement Hilton N°11"],
	['Toilette', '/assets/hilton-n11/hilton-n11-toilette-large.jpg', "Toilette de l'appartement Hilton N°11"],
].map(([title, image, altText], index) => ({
	id: 1200 + index,
	title,
	alt_text: altText,
	image,
	sort_order: index + 1,
}));

const hiltonN11Etage12Photos: PropertyPhoto[] = [
	['Salon', '/assets/hilton-n11-12th/hilton-n11-12th-salon-large.jpg', "Salon de l'appartement Hilton N°11 étage 12"],
	['Salle à manger', '/assets/hilton-n11-12th/hilton-n11-12th-salle-a-manger-large.jpg', "Salle à manger de l'appartement Hilton N°11 étage 12"],
	['Chambre', '/assets/hilton-n11-12th/hilton-n11-12th-chambre-large.jpg', "Chambre de l'appartement Hilton N°11 étage 12"],
	['Placard', '/assets/hilton-n11-12th/hilton-n11-12th-placard-large.jpg', "Placard de l'appartement Hilton N°11 étage 12"],
	['Cuisine', '/assets/hilton-n11-12th/hilton-n11-12th-cuisine-large.jpg', "Cuisine de l'appartement Hilton N°11 étage 12"],
	['Toilette', '/assets/hilton-n11-12th/hilton-n11-12th-toilette-large.jpg', "Toilette de l'appartement Hilton N°11 étage 12"],
].map(([title, image, altText], index) => ({
	id: 1300 + index,
	title,
	alt_text: altText,
	image,
	sort_order: index + 1,
}));

const hiltonN13Photos: PropertyPhoto[] = [
	['Salon', '/assets/hilton-n13/hilton-n13-salon-large.jpg', "Salon de l'appartement Hilton N°13"],
	['Chambre 1', '/assets/hilton-n13/hilton-n13-chambre-1-large.jpg', "Chambre 1 de l'appartement Hilton N°13"],
	['Chambre 2', '/assets/hilton-n13/hilton-n13-chambre-2-large.jpg', "Chambre 2 de l'appartement Hilton N°13"],
	['Coffre-fort', '/assets/hilton-n13/hilton-n13-coffre-fort-large.jpg', "Coffre-fort de l'appartement Hilton N°13"],
	['Cuisine', '/assets/hilton-n13/hilton-n13-cuisine-large.jpg', "Cuisine de l'appartement Hilton N°13"],
	['Toilette 1', '/assets/hilton-n13/hilton-n13-toilette-1-large.jpg', "Toilette 1 de l'appartement Hilton N°13"],
	['Toilette 2', '/assets/hilton-n13/hilton-n13-toilette-2-large.jpg', "Toilette 2 de l'appartement Hilton N°13"],
].map(([title, image, altText], index) => ({
	id: 1400 + index,
	title,
	alt_text: altText,
	image,
	sort_order: index + 1,
}));

const rentalPhotoAlbums: Record<string, PropertyPhoto[]> = {
	'Appartement Hilton N°05': hiltonN05Photos,
	'Appartement Hilton N°11': hiltonN11Photos,
	'Appartement Hilton N°13': hiltonN13Photos,
	'Appartement Hilton N°11 - Etage 12': hiltonN11Etage12Photos,
	'Appartement City Center Ra1 N°B': cityCenterPhotos,
};

const salePhotoAlbums: Record<string, PropertyPhoto[]> = {
	'HILTON · N°11': hiltonN11Photos,
	'HILTON · N°13': hiltonN13Photos,
};

const saleApartments: Property[] = [
	['HILTON · N°03', 'HILTON', 'Centre-ville', 'ETAGE 10', 'N°03', 1, 53, '53 m²'],
	['HILTON · N°11', 'HILTON', 'Centre-ville', 'ETAGE 10', 'N°11', 1, 55, '55 m²'],
	['HILTON · N°13', 'HILTON', 'Centre-ville', 'ETAGE 10', 'N°13', 2, 74, '74 m²'],
	['MARINA BLOC B · N°302', 'MARINA BLOC B', 'Marina', 'ETAGE 03', 'N°302', 1, 84, '84 m²'],
	['MARINA BLOC B · N°303', 'MARINA BLOC B', 'Marina', 'ETAGE 03', 'N°303', 1, 89, '89 m²'],
	['MARINA BLOC B · N°306', 'MARINA BLOC B', 'Marina', 'ETAGE 03', 'N°306', 3, 341, '261 m² vendu'],
	['MANDELSON BLOC A · N°47', 'MANDELSON BLOC A', 'Iberia', 'ETAGE 06', 'N°47', 3, 102, '102 m²'],
].map(([title, residence, district, floor, unitNumber, bedrooms, surface, sold], index) => {
	const address =
		residence === 'HILTON'
			? 'Place du Maghreb Arabe, 90000 Tanger, Maroc'
			: String(residence).startsWith('MARINA')
				? 'Blvd. Mohamed VI, Tanger'
				: 'Place Mozart, Tanger';
	const photos = salePhotoAlbums[String(title)] ?? [];
	return {
		id: index + 1,
		transaction: 'sale',
		property_type: 'apartment',
		title: String(title),
		tag: `${district} · Appartement à vendre`,
		residence: String(residence),
		district: String(district),
		address,
		description: `${address}. Un appartement clair et bien situé pour résidence principale, investissement ou pied-à-terre à Tanger.`,
		floor: String(floor),
		unit_number: String(unitNumber),
		bedrooms: Number(bedrooms),
		surface_total: Number(surface),
		surface_sold: String(sold),
		mezzanine: '',
		project_label: '',
		price: '',
		price_note: '',
		cta_label: 'Demander le prix →',
		image: photos[0]?.image ?? '',
		photos,
		sort_order: index + 1,
	} satisfies Property;
});

const rentApartments: Property[] = [
	['Appartement Hilton N°05', 'Hilton', 'Etage 09', 'N°05', 2, '1,400 MAD'],
	['Appartement Hilton N°11', 'Hilton', 'Etage 10', 'N°11', 1, '1,100 MAD'],
	['Appartement Hilton N°13', 'Hilton', 'Etage 10', 'N°13', 2, '1,400 MAD'],
	['Appartement Hilton N°11 - Etage 12', 'Hilton', 'Etage 12', 'N°11', 1, '1,100 MAD'],
	['Appartement City Center Ra1 N°B', 'City Center Ra1', 'Etage 05', 'N°B', 4, '1,500 MAD'],
].map(([title, residence, floor, unitNumber, bedrooms, price], index) => {
	const address = residence === 'Hilton' ? 'Place du Maghreb Arabe, Tanger' : 'City Center Ra1, Tanger';
	const photos = rentalPhotoAlbums[String(title)] ?? [];
	return {
		id: 100 + index,
		transaction: 'rent',
		property_type: 'apartment',
		title: String(title),
		tag: `${residence} · ${floor} · ${unitNumber}`,
		residence: String(residence),
		district: 'Centre-ville',
		address,
		description: `${address}. Appartement disponible à la location, sélectionné pour un séjour confortable à Tanger.`,
		floor: String(floor),
		unit_number: String(unitNumber),
		bedrooms: Number(bedrooms),
		surface_total: null,
		surface_sold: '',
		mezzanine: '',
		project_label: '',
		price: String(price),
		price_note: 'Prix indiqué pour juin.',
		cta_label: 'Demander la disponibilité →',
		image: photos[0]?.image ?? '',
		photos,
		sort_order: 100 + index,
	} satisfies Property;
});

const rentCommercialUnits: Property[] = [
	['Local A1 · ERASMUS TOWER', 'A', 235, 'RDC 141 m²', '94 m²', '188 m²'],
	['Local A2 · ERASMUS TOWER', 'A', 239, 'RDC 81 m²', '158 m²', '160 m²'],
	['Local A3 · ERASMUS TOWER', 'A', 314, 'RDC 148 m²', '166 m²', '231 m²'],
	['Local A4 · ERASMUS TOWER', 'A', 292, 'RDC 181 m²', '111 m²', '237 m²'],
	['Local A5 · ERASMUS TOWER', 'A', 292, 'RDC 183 m²', '109 m²', '238 m²'],
	['Local A6 · ERASMUS TOWER', 'A', 213, 'RDC 126 m²', '87 m²', '170 m²'],
	['Local B1 · ERASMUS TOWER', 'B', 211, 'RDC 108 m²', '103 m²', '160 m²'],
	['Local B2 · ERASMUS TOWER', 'B', 270, 'RDC 168 m²', '102 m²', '219 m²'],
	['Local B3 · ERASMUS TOWER', 'B', 505, 'RDC 314 m²', '191 m²', '410 m²'],
	['Local B4 · ERASMUS TOWER', 'B', 388, 'RDC 194 m²', '194 m²', '291 m²'],
	['Local B5 · ERASMUS TOWER', 'B', 262, 'RDC 136 m²', '126 m²', '199 m²'],
	['Local B6 · ERASMUS TOWER', 'B', 277, 'RDC 152 m²', '125 m²', '215 m²'],
	['Local B7 · ERASMUS TOWER', 'B', 401, 'RDC 168 m²', '233 m²', '285 m²'],
].map(([title, type, surface, rdc, mezzanine, sold], index) => ({
	id: 200 + index,
	transaction: 'rent',
	property_type: 'commercial',
	title: String(title),
	tag: 'Malabata · Local commercial à louer',
	residence: 'Erasmus Tower',
	district: 'Malabata',
	address: 'RTE MALABATA RESD ERASMUS',
	description: 'RTE MALABATA RESD ERASMUS. Local visible et modulable, adapté showroom, commerce premium, cabinet ou activité de service.',
	floor: '',
	unit_number: String(title).split(' · ')[0].replace('Local ', ''),
	bedrooms: null,
	surface_total: Number(surface),
	surface_sold: String(sold),
	mezzanine: String(mezzanine),
	project_label: String(rdc),
	price: '',
	price_note: String(type),
	cta_label: 'Demander la disponibilité →',
	image: '',
	photos: [],
	sort_order: 200 + index,
}));

export const fallbackGuidePlaces: GuidePlace[] = [
	['monuments', 'La Kasbah de Tanger', 'Ancien quartier fortifié en hauteur, connu pour ses ruelles, ses portes anciennes et ses vues sur la médina et le détroit.', '/guide-photos/kasbah-fortifications.png'],
	['monuments', 'La Médina de Tanger', 'Le cœur ancien de la ville : souks, ruelles, maisons traditionnelles et atmosphère culturelle unique.', '/guide-photos/medina-ruelle.png'],
	['monuments', 'Grand Socco — Place du 9 Avril 1947', 'Place emblématique entre la ville moderne et la médina, souvent considérée comme l’entrée du vieux Tanger.', '/guide-photos/grand-socco.png'],
	['monuments', 'Le Petit Socco', 'Petite place historique au cœur de la médina, autrefois fréquentée par artistes, écrivains et voyageurs.', '/guide-photos/petit-socco.png'],
	['monuments', 'Palais de la Kasbah / Dar El Makhzen', 'Ancien palais du sultan, aujourd’hui lié au patrimoine culturel et architectural de Tanger.', '/guide-photos/dar-el-makhzen.png'],
	['monuments', 'Cap Spartel et son phare', 'Site naturel et historique à l’entrée du détroit de Gibraltar, symbole du patrimoine maritime tangérois.', '/guide-photos/kasbah-view.png'],
	['monuments', 'Les Grottes d’Hercule', 'Site mythique près du Cap Spartel, célèbre pour son ouverture naturelle donnant sur l’océan.', '/guide-photos/kasbah-rooftops.png'],
	['monuments', 'Borj Dar El Baroud / Fortifications', 'Ancien ouvrage défensif lié à l’histoire militaire de Tanger et à ses fortifications.', '/guide-photos/kasbah-fortifications.png'],
	['musees', 'Musée la Kasbah des cultures méditerranéennes', 'Musée patrimonial présentant des collections archéologiques et ethnographiques liées à l’identité méditerranéenne de Tanger.', '/guide-photos/dar-el-makhzen.png'],
	['musees', 'Musée de la Kasbah — Espace d’art contemporain', 'Espace culturel dédié aux expositions temporaires, rencontres artistiques et création contemporaine.', '/guide-photos/terrace-photo.png'],
	['musees', 'Dar Niaba — Musée des artistes voyageurs', 'Musée autour de l’histoire diplomatique de Tanger et des artistes voyageurs inspirés par le Maroc.', '/guide-photos/petit-socco.png'],
	['musees', 'Musée de la Légation américaine de Tanger', 'Ancienne légation américaine devenue musée, centre de recherche et lieu culturel maroco-américain.', '/guide-photos/medina-collage.png'],
	['musees', 'Centre d’interprétation des fortifications', 'Un lieu pour comprendre l’histoire défensive de Tanger et ses anciens systèmes de protection.', '/guide-photos/kasbah-fortifications.png'],
].map(([section, title, description, image], index) => ({ id: index + 1, section, title, description, image, sort_order: index + 1 } as GuidePlace));

export const fallbackEventIdeas: EventIdea[] = [
	['Anniversaire', 'Birthday apartment setup', 'Une décoration chaleureuse avec ballons, gâteau, bougies, message personnalisé et coin photo.', ['Ballons premium et arche légère', 'Table surprise avec gâteau', 'Message personnalisé au prénom'], '/event-photos/anniversaire.jpg'],
	['Amoureux', 'Romantic night', 'Une ambiance douce pour couples : pétales, bougies LED, lumière tamisée et détails raffinés.', ['Chemin de pétales et bougies', 'Plateau gourmand ou fleurs', 'Option demande / surprise'], '/event-photos/amoureux.jpg'],
	['Bride to be', 'Bridal suite decor', 'Une mise en scène chic pour bride to be, photos entre amies et préparation avant mariage.', ['Ballons blancs, dorés ou rose gold', 'Lettrage Bride to Be', 'Coin photo élégant'], '/event-photos/bride-to-be.jpg'],
	['Dîner privé', 'Private dinner', 'Une table intime dans l’appartement avec décoration florale, lumière chaude et service sur demande.', ['Dressage de table premium', 'Fleurs et ambiance lumineuse', 'Option chef / pâtisserie locale'], '/event-photos/diner-prive.jpg'],
].map(([category, title, description, bullet_points, image], index) => ({ id: index + 1, category, title, description, bullet_points, image, sort_order: index + 1 } as EventIdea));

export const fallbackPurplePearlPlans: PurplePearlPlan[] = [
	['general', '1. Plan sous-sol', '1. Plan sous-sol', 'Plan du sous-sol / parking du projet Purple Pearl.', '/assets/purple-pearl-plan-general.jpg'],
	['etage1', '2. Plan RDC - Locaux commerciaux', '2. Plan RDC - Locaux commerciaux', 'Plan du rez-de-chaussée dédié aux locaux commerciaux.', '/assets/purple-pearl-plan-etage-courant.jpg'],
	['etage2', '3. Plan RDC haut - Locaux commerciaux', '3. Plan RDC haut - Locaux commerciaux', 'Plan RDC haut avec les locaux commerciaux.', '/assets/purple-pearl-plan-etage-courant.jpg'],
	['etage3', '3.1. Plan RDC haut - Appartements avec cour', '3.1. Plan RDC haut - Appartements avec cour', 'Appartements avec cour au RDC haut.', '/assets/purple-pearl-plan-etage-courant.jpg'],
	['etage4', 'Plans des 1er, 2e, 3e et 4e étages (Appartement type 1 - 2 - 3 - 4 - 5)', 'Plans des 1er, 2e, 3e et 4e étages', 'Appartement type 1 - 2 - 3 - 4 - 5.', '/assets/purple-pearl-plan-etage-courant.jpg'],
	['etage5', '5. Plan 1er retrait (Appartement 1 - 2 - 3 - 4)', '5. Plan 1er retrait', 'Appartement 1 - 2 - 3 - 4.', '/assets/purple-pearl-plan-1er-retrait.jpg'],
	['etage6', '6. Plan 2e retrait (Appartement type 1 - 2 - 3 - 4)', '6. Plan 2e retrait', 'Appartement type 1 - 2 - 3 - 4.', '/assets/purple-pearl-plan-2eme-retrait.jpg'],
	['facades', 'Façades & situation', 'Façades & situation', 'Façades, situation du projet et images de synthèse du bâtiment.', '/assets/purple-pearl-plan-facades-situation.jpg'],
].map(([key, button_label, title, description, image], index) => ({ id: index + 1, key, button_label, title, description, alt_text: title, image, sort_order: index + 1 } as PurplePearlPlan));

export const fallbackTestimonials: Testimonial[] = [
	['Korkanc', 'Turquie — Appartement Hilton 1 Chambre — 2 nuits, juillet 2025 — Couple', 'Ceux qui souhaitent faire une réservation doivent le faire immédiatement s’ils trouvent une place.', false],
	['Mohamed', 'Pays-Bas — Appartement Hilton 1 Chambre — 2 nuits, novembre 2023 — Couple', 'Emplacement de premier choix. La vue était magnifique.', false],
	['Shéhérazade', 'France — Appartement Hilton 1 Chambre — 2 nuits, novembre 2023 — Famille', 'Très bel appartement décoré avec soin, la vue est exceptionnelle et la localisation idéale.', false],
	['Elamrani', 'Maroc — Appartement Hilton 2 Chambres — 3 nuits, décembre 2024 — Groupe', 'Un appartement magnifique, propre et bien équipé, avec une vue superbe et un emplacement magnifique avec facilité d’accès.', false],
	['Régine', 'France — Appartement Hilton 2 Chambres — 3 nuits, août 2025 — Famille', 'Très bon séjour, je recommande à 100% l’appartement. Tout était bien : propreté, accueil, je le conseille.', false],
	['Saber', 'Royaume-Uni — Appartement Hilton 1 Chambre — 5 nuits, juillet 2024 — Famille', 'Great place! Great location, very clean.', false],
	['Audrey', 'États-Unis — Appartement Hilton 1 Chambre — 7 nuits, janvier 2026 — Couple', 'Exceptionnel. I stayed for 7 days, it was worth the price, great place and stuff. Loved it and will return whenever I’m back in Tangier.', false],
	['Khadija', 'France — Apartment in City Center Tangier — 4 nuits, février 2024 — Famille', 'Exceptionnel.', true],
	['Ibrahim', 'Arabie Saoudite — Apartment in City Center Tangier — 4 nuits, novembre 2023 — Groupe', 'L’appartement est absolument magnifique, l’emplacement est superbe et proche de tous les services, et le service de Mme Hajar était extrêmement poli et courtois.', true],
].map(([client_name, details, quote, highlight_city_center], index) => ({ id: index + 1, rating: '10/10', quote, client_name, details, highlight_city_center, sort_order: index + 1 } as Testimonial));

export const fallbackContent: SiteContent = {
	defaultLang: 'fr',
	contact: {
		address: 'Tanger, Maroc',
		phone_display: '06 75 59 92 56 / 07 73 86 35 85',
		whatsapp_number: '212675599256',
		email_display: 'info@nectar.ma / contact@nectar.ma',
	},
	properties: [...saleApartments, ...rentApartments, ...rentCommercialUnits],
	guidePlaces: fallbackGuidePlaces,
	eventIdeas: fallbackEventIdeas,
	purplePearlPlans: fallbackPurplePearlPlans,
	testimonials: fallbackTestimonials,
};
