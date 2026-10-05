import type { EventIdea, GuidePlace, Property, PropertyPhoto, PurplePearlPlan, SiteContent, Testimonial } from '@/types/siteTypes';

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

const hiltonN03Photos: PropertyPhoto[] = [
	['Salon', '/assets/hilton-n03/hilton-n03-salon-large.jpg', "Salon de l'appartement Hilton N°03"],
	['Meuble TV', '/assets/hilton-n03/hilton-n03-meuble-tv-large.jpg', "Meuble TV de l'appartement Hilton N°03"],
	['Chambre', '/assets/hilton-n03/hilton-n03-chambre-large.jpg', "Chambre de l'appartement Hilton N°03"],
	['Placard', '/assets/hilton-n03/hilton-n03-placard-large.jpg', "Placard de l'appartement Hilton N°03"],
	['Coffre-fort', '/assets/hilton-n03/hilton-n03-coffre-fort-large.jpg', "Coffre-fort de l'appartement Hilton N°03"],
	['Cuisine', '/assets/hilton-n03/hilton-n03-cuisine-large.jpg', "Cuisine de l'appartement Hilton N°03"],
	['Toilette', '/assets/hilton-n03/hilton-n03-toilette-large.jpg', "Toilette de l'appartement Hilton N°03"],
	['Vue', '/assets/hilton-n03/hilton-n03-vue-large.jpg', "Vue sur la Méditerranée depuis l'appartement Hilton N°03"],
].map(([title, image, altText], index) => ({
	id: 1050 + index,
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

const mandelsonN47Photos: PropertyPhoto[] = [
	['Salon', '/assets/mandelson-n47/mandelson-n47-salon-large.jpg', "Salon de l'appartement Mandelson N°47"],
	['Salle à manger', '/assets/mandelson-n47/mandelson-n47-salle-a-manger-large.jpg', "Salle à manger de l'appartement Mandelson N°47"],
	['Chambre 1', '/assets/mandelson-n47/mandelson-n47-chambre-1-large.jpg', "Chambre 1 de l'appartement Mandelson N°47"],
	['Chambre 2', '/assets/mandelson-n47/mandelson-n47-chambre-2-large.jpg', "Chambre 2 de l'appartement Mandelson N°47"],
	['Balcon chambre 2', '/assets/mandelson-n47/mandelson-n47-balcon-chambre-2-large.jpg', "Balcon de la chambre 2 de l'appartement Mandelson N°47"],
	['Cuisine', '/assets/mandelson-n47/mandelson-n47-cuisine-large.jpg', "Cuisine de l'appartement Mandelson N°47"],
	['Balcon cuisine', '/assets/mandelson-n47/mandelson-n47-balcon-cuisine-large.jpg', "Balcon de la cuisine de l'appartement Mandelson N°47"],
	['Toilette 1', '/assets/mandelson-n47/mandelson-n47-toilette-1-large.jpg', "Toilette 1 de l'appartement Mandelson N°47"],
	['Toilette 2', '/assets/mandelson-n47/mandelson-n47-toilette-2-large.jpg', "Toilette 2 de l'appartement Mandelson N°47"],
].map(([title, image, altText], index) => ({
	id: 1500 + index,
	title,
	alt_text: altText,
	image,
	sort_order: index + 1,
}));

const marinaN302Photos: PropertyPhoto[] = [
	['Vue', '/assets/marina-n302/marina-n302-vue-large.jpg', "Vue depuis l'appartement Marina N°302"],
	['Hall de la résidence', '/assets/marina-n302/marina-n302-hall-large.jpg', 'Hall de la résidence Marina'],
	['Porte N°302', '/assets/marina-n302/marina-n302-porte-large.jpg', "Porte N°302 de l'appartement Marina N°302"],
	['Salon', '/assets/marina-n302/marina-n302-salon-large.jpg', "Salon de l'appartement Marina N°302"],
	['Cuisine', '/assets/marina-n302/marina-n302-cuisine-large.jpg', "Cuisine de l'appartement Marina N°302"],
	['Chambre', '/assets/marina-n302/marina-n302-chambre-large.jpg', "Chambre de l'appartement Marina N°302"],
	['Placard', '/assets/marina-n302/marina-n302-placard-large.jpg', "Placard de l'appartement Marina N°302"],
	['Balcon', '/assets/marina-n302/marina-n302-balcon-large.jpg', "Balcon de l'appartement Marina N°302"],
	[
		'Salle de bain',
		'/assets/marina-n302/marina-n302-salle-de-bain-large.jpg',
		"Salle de bain de l'appartement Marina N°302",
	],
	['WC', '/assets/marina-n302/marina-n302-wc-large.jpg', "WC de l'appartement Marina N°302"],
].map(([title, image, altText], index) => ({
	id: 30200 + index,
	title,
	alt_text: altText,
	image,
	sort_order: index + 1,
}));

const marinaN303Photos: PropertyPhoto[] = [
	['Vue', '/assets/marina-n303/marina-n303-vue-large.jpg', "Vue depuis l'appartement Marina N°303"],
	['Hall de la résidence', '/assets/marina-n303/marina-n303-hall-large.jpg', 'Hall de la résidence Marina'],
	['Porte N°303', '/assets/marina-n303/marina-n303-porte-large.jpg', "Porte N°303 de l'appartement Marina N°303"],
	['Salon', '/assets/marina-n303/marina-n303-salon-large.jpg', "Salon de l'appartement Marina N°303"],
	['Cuisine', '/assets/marina-n303/marina-n303-cuisine-large.jpg', "Cuisine de l'appartement Marina N°303"],
	['Chambre', '/assets/marina-n303/marina-n303-chambre-large.jpg', "Chambre de l'appartement Marina N°303"],
	['Placard', '/assets/marina-n303/marina-n303-placard-large.jpg', "Placard de l'appartement Marina N°303"],
	['Toilette', '/assets/marina-n303/marina-n303-toilette-large.jpg', "Toilette de l'appartement Marina N°303"],
	['WC', '/assets/marina-n303/marina-n303-wc-large.jpg', "WC de l'appartement Marina N°303"],
].map(([title, image, altText], index) => ({
	id: 30300 + index,
	title,
	alt_text: altText,
	image,
	sort_order: index + 1,
}));

const marinaN306Photos: PropertyPhoto[] = [
	['Vue', '/assets/marina-n306/marina-n306-vue-large.jpg', "Vue depuis l'appartement Marina N°306"],
	['Hall de la résidence', '/assets/marina-n306/marina-n306-hall-large.jpg', 'Hall de la résidence Marina'],
	['Porte N°306', '/assets/marina-n306/marina-n306-porte-large.jpg', "Porte N°306 de l'appartement Marina N°306"],
	['Séjour', '/assets/marina-n306/marina-n306-sejour-large.jpg', "Séjour de l'appartement Marina N°306"],
	['Salon', '/assets/marina-n306/marina-n306-salon-large.jpg', "Salon de l'appartement Marina N°306"],
	['Terrasse', '/assets/marina-n306/marina-n306-terrasse-large.jpg', "Terrasse de l'appartement Marina N°306"],
	['Cuisine', '/assets/marina-n306/marina-n306-cuisine-large.jpg', "Cuisine de l'appartement Marina N°306"],
	[
		'Balcon cuisine',
		'/assets/marina-n306/marina-n306-balcon-cuisine-large.jpg',
		"Balcon cuisine de l'appartement Marina N°306",
	],
	[
		'Chambre parentale',
		'/assets/marina-n306/marina-n306-chambre-parentale-large.jpg',
		"Chambre parentale de l'appartement Marina N°306",
	],
	['Chambre 1', '/assets/marina-n306/marina-n306-chambre-1-large.jpg', "Chambre 1 de l'appartement Marina N°306"],
	['Chambre 2', '/assets/marina-n306/marina-n306-chambre-2-large.jpg', "Chambre 2 de l'appartement Marina N°306"],
	[
		'Toilette parentale',
		'/assets/marina-n306/marina-n306-toilette-parentale-large.jpg',
		"Toilette parentale de l'appartement Marina N°306",
	],
	['WC 1', '/assets/marina-n306/marina-n306-wc-1-large.jpg', "WC 1 de l'appartement Marina N°306"],
	['WC 2', '/assets/marina-n306/marina-n306-wc-2-large.jpg', "WC 2 de l'appartement Marina N°306"],
	['WC 3', '/assets/marina-n306/marina-n306-wc-3-large.jpg', "WC 3 de l'appartement Marina N°306"],
	['WC', '/assets/marina-n306/marina-n306-wc-large.jpg', "WC de l'appartement Marina N°306"],
].map(([title, image, altText], index) => ({
	id: 30600 + index,
	title,
	alt_text: altText,
	image,
	sort_order: index + 1,
}));

const hilton137m2Photos: PropertyPhoto[] = [
	["Salon", "/assets/hilton-137m2/hilton-137m2-01-large.jpg", "Salon de l'appartement Hilton N° 1"],
	["Séjour", "/assets/hilton-137m2/hilton-137m2-02-large.jpg", "Séjour de l'appartement Hilton N° 1"],
	["Cuisine", "/assets/hilton-137m2/hilton-137m2-03-large.jpg", "Cuisine de l'appartement Hilton N° 1"],
	["Chambre 1", "/assets/hilton-137m2/hilton-137m2-04-large.jpg", "Chambre 1 de l'appartement Hilton N° 1"],
	["Chambre 2", "/assets/hilton-137m2/hilton-137m2-05-large.jpg", "Chambre 2 de l'appartement Hilton N° 1"],
	["Chambre 3", "/assets/hilton-137m2/hilton-137m2-06-large.jpg", "Chambre 3 de l'appartement Hilton N° 1"],
	["Toilette", "/assets/hilton-137m2/hilton-137m2-07-large.jpg", "Toilette de l'appartement Hilton N° 1"],
].map(([title, image, altText], index) => ({
	id: 13700 + index,
	title,
	alt_text: altText,
	image,
	sort_order: index + 1,
}));

const erasmusCommercialAlbumFor = (propertyTitle: string, propertyIndex: number): PropertyPhoto[] => {
	const unitCode = propertyTitle.match(/\b([AB]\d+)\b/i)?.[1]?.toUpperCase();
	if (!unitCode) {
		return [];
	}

	return [
		{
			id: 16000 + propertyIndex,
			title: `Local ${unitCode}`,
			alt_text: `Local ${unitCode} · Erasmus Tower`,
			image: `/assets/erasmus/units/${unitCode}.jpg`,
			sort_order: 1,
		},
	];
};

const rentalPhotoAlbums: Record<string, PropertyPhoto[]> = {
	'Appartement Hilton N°05': hiltonN05Photos,
	'Appartement Hilton N°11': hiltonN11Photos,
	'Appartement Hilton N°13': hiltonN13Photos,
	'Appartement Hilton N°11 - Etage 12': hiltonN11Etage12Photos,
	'Appartement City Center Ra1 N°B': cityCenterPhotos,
};

const salePhotoAlbums: Record<string, PropertyPhoto[]> = {
	'HILTON · N°03': hiltonN03Photos,
	'HILTON · N°11': hiltonN11Photos,
	'HILTON · N°13': hiltonN13Photos,
	'HILTON N° 1': hilton137m2Photos,
	'MANDELSON BLOC A · N°47': mandelsonN47Photos,
	'MARINA BLOC B · N°302': marinaN302Photos,
	'MARINA BLOC B · N°303': marinaN303Photos,
	'MARINA BLOC B · N°306': marinaN306Photos,
};

const hiltonN05Description =
	"Profitez d’un séjour élégant dans cet appartement situé au sein de l’hôtel Hilton à Tanger. Avec sa vue imprenable sur la Méditerranée, son cadre sécurisé et son ambiance calme et luxueuse, il offre l’endroit idéal pour se détendre et vivre pleinement vos vacances.";

const hiltonN11RentDescription =
	"Profitez d’un séjour raffiné dans cet appartement situé au sein de l’hôtel Hilton à Tanger. Offrant une vue exceptionnelle sur la Méditerranée, un cadre sécurisé et une atmosphère calme et élégante, il réunit toutes les conditions pour des vacances reposantes et mémorables.";

const hiltonN13RentDescription =
	"Séjournez dans un appartement élégant au cœur de l’hôtel Hilton à Tanger, où confort, sécurité et tranquillité se rencontrent. Sa vue imprenable sur la Méditerranée et son ambiance luxueuse en font l’adresse idéale pour profiter pleinement de votre séjour.";

const hiltonN11Etage12RentDescription =
	"Vivez une expérience unique dans cet appartement situé au sein de l’hôtel Hilton à Tanger. Entre vue panoramique sur la Méditerranée, environnement sécurisé et ambiance paisible, ce lieu vous invite à la détente dans un cadre chic et confortable.";

const cityCenterRa1Description = 'Situé en plein centre-ville de Tanger, à proximité de la gare TGV, cet appartement offre une vue sur la ville et un cadre confortable, idéal pour un séjour pratique et agréable.';

const rentalDescriptions: Record<string, string> = {
	'Appartement Hilton N°05': hiltonN05Description,
	'Appartement Hilton N°11': hiltonN11RentDescription,
	'Appartement Hilton N°13': hiltonN13RentDescription,
	'Appartement Hilton N°11 - Etage 12': hiltonN11Etage12RentDescription,
	'Appartement City Center Ra1 N°B': cityCenterRa1Description,
};

const saleDescriptions: Record<string, string> = {
	'MARINA BLOC B · N°302': "Offrez-vous une adresse privilégiée à Tanger Marina Bay. Spacieux et baigné de lumière, cet appartement bénéficie d’une superbe vue sur la Méditerranée. Une belle occasion de concrétiser votre projet immobilier, pour y vivre, investir ou séjourner à Tanger.",
	'MARINA BLOC B · N°303': "À Tanger Marina Bay, cet appartement séduit par ses beaux volumes, sa luminosité et sa magnifique vue sur la Méditerranée. Un cadre idéal pour s’installer à Tanger ou profiter d’une résidence secondaire face à la mer.",
	'MARINA BLOC B · N°306': "Découvrez cet appartement spacieux et lumineux situé à Tanger Marina Bay. Sa vue exceptionnelle sur la Méditerranée et son emplacement privilégié en font une belle opportunité pour une résidence principale, un investissement ou un pied-à-terre à Tanger.",
	'HILTON N° 1': "Découvrez cet appartement d’exception situé à Hilton Résidence à Tanger. Offrant une vue imprenable sur la Méditerranée, un cadre sécurisé et une ambiance calme et luxueuse, ce bien représente une opportunité idéale pour un investissement de qualité ou une résidence élégante au cœur de la ville. Le parking est inclus dans le prix de vente.",
	'HILTON · N°03':
		'À vendre, superbe appartement situé au 10ᵉ étage de la résidence Hilton, l’une des adresses les plus prestigieuses de Tanger. Offrant une vue panoramique exceptionnelle sur la Méditerranée, ce bien bénéficie d’un environnement sécurisé et d’un cadre élégant. Il constitue une excellente opportunité pour y vivre ou réaliser un investissement immobilier de qualité.',
	'HILTON · N°11':
		"Découvrez cet appartement d’exception situé au sein de l’hôtel Hilton à Tanger. Offrant une vue imprenable sur la Méditerranée, un cadre sécurisé et une ambiance calme et luxueuse, ce bien représente une opportunité idéale pour un investissement de qualité ou une résidence élégante au cœur de la ville.",
	'HILTON · N°13':
		"À vendre, superbe appartement situé dans l’une des adresses les plus prestigieuses de Tanger, au sein de l’hôtel Hilton. Avec sa vue panoramique sur la Méditerranée, son environnement sécurisé et son cadre raffiné, ce bien allie confort, élégance et fort potentiel d’investissement.",
};

const saleApartmentOrder = ["MARINA BLOC B · N°302", "MARINA BLOC B · N°303", "MARINA BLOC B · N°306", "HILTON · N°03", "HILTON N° 1", "HILTON · N°11", "HILTON · N°13", "MANDELSON BLOC A · N°47"];

const saleApartments: Property[] = [
	['HILTON · N°03', 'HILTON', 'Centre-ville', 'ETAGE 10', 'N°03', 1, 53, '53 m²'],
	['HILTON · N°11', 'HILTON', 'Centre-ville', 'ETAGE 10', 'N°11', 1, 55, '55 m²'],
	['HILTON · N°13', 'HILTON', 'Centre-ville', 'ETAGE 10', 'N°13', 2, 74, '74 m²'],
	['MANDELSON BLOC A · N°47', 'MANDELSON BLOC A', 'Iberia', 'ETAGE 06', 'N°47', 3, 102, '102 m²'],
	['MARINA BLOC B · N°302', 'MARINA BLOC B', 'Marina', 'ETAGE 03', 'N°302', 1, 84, '84 m²'],
	['MARINA BLOC B · N°303', 'MARINA BLOC B', 'Marina', 'ETAGE 03', 'N°303', 1, 89, '89 m²'],
	['MARINA BLOC B · N°306', 'MARINA BLOC B', 'Marina', 'ETAGE 03', 'N°306', 3, 341, '261 m² vendu'],
	['HILTON N° 1', 'HILTON', 'Centre-ville', 'ETAGE 09', 'N° 1', 3, 131, '131 m²'],
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
		is_sold: ['HILTON · N°11', 'HILTON · N°13', 'MANDELSON BLOC A · N°47'].includes(String(title)),
		is_rented: false,
		title: String(title),
		tag: `${district} · Appartement à vendre`,
		residence: String(residence),
		district: String(district),
		address,
		description: saleDescriptions[String(title)] ?? `${address}. Un appartement clair et bien situé pour résidence principale, investissement ou pied-à-terre à Tanger.`,
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
		sort_order: saleApartmentOrder.indexOf(String(title)) + 1,
	} satisfies Property;
});

const rentApartments: Property[] = [
	['Appartement Hilton N°05', 'Hilton', 'Etage 09', 'N°05', 2, '1 300 DH'],
	['Appartement Hilton N°11', 'Hilton', 'Etage 10', 'N°11', 1, '1,100 MAD'],
	['Appartement Hilton N°13', 'Hilton', 'Etage 10', 'N°13', 2, '1,400 MAD'],
	['Appartement Hilton N°11 - Etage 12', 'Hilton', 'Etage 12', 'N°11', 1, '900 DH'],
	['Appartement City Center Ra1 N°B', 'City Center Ra1', 'Etage 05', 'N°B', 4, '1,500 MAD'],
].map(([title, residence, floor, unitNumber, bedrooms, price], index) => {
	const address = residence === 'Hilton' ? 'Place du Maghreb Arabe, Tanger' : 'City Center Ra1, Tanger';
	const photos = rentalPhotoAlbums[String(title)] ?? [];
	return {
		id: 100 + index,
		transaction: 'rent',
		property_type: 'apartment',
		is_sold: ['Appartement Hilton N°11', 'Appartement Hilton N°13'].includes(String(title)),
		is_rented: false,
		title: String(title),
		tag: `${residence} · ${floor} · ${unitNumber}`,
		residence: String(residence),
		district: 'Centre-ville',
		address,
		description: rentalDescriptions[String(title)] ?? `${address}. Appartement disponible à la location, sélectionné pour un séjour confortable à Tanger.`,
		floor: String(floor),
		unit_number: String(unitNumber),
		bedrooms: Number(bedrooms),
		surface_total: null,
		surface_sold: '',
		mezzanine: '',
		project_label: '',
		price: String(price),
		price_note: ['Appartement Hilton N°05', 'Appartement Hilton N°11 - Etage 12'].includes(String(title)) ? 'Prix indiqué pour octobre 2026.' : 'Prix indiqué pour juillet.',
		cta_label: 'Demander la disponibilité →',
		image: photos[0]?.image ?? '',
		photos,
		sort_order: 100 + index,
	} satisfies Property;
});

const rentCommercialUnits: Property[] = [
	['Local A1 · ERASMUS TOWER', 'A', 235, 'RDC 136 m²', '99 m²', '185,5 m²', 'small', 'A'],
	['Local A2 · ERASMUS TOWER', 'A', 210, 'RDC 122 m²', '88 m²', '166 m²', 'small', 'A'],
	['Local A3 · ERASMUS TOWER', 'A', 287, 'RDC 178 m²', '109 m²', '232,5 m²', 'medium', 'A'],
	['Local A4 · ERASMUS TOWER', 'A', 282, 'RDC 175 m²', '107 m²', '228,5 m²', 'medium', 'A'],
	['Local A5 · ERASMUS TOWER', 'A', 305, 'RDC 143 m²', '162 m²', '224 m²', 'medium', 'B'],
	['Local A6 · ERASMUS TOWER', 'A', 227, 'RDC 76 m²', '151 m²', '151,5 m²', 'small', 'B'],
	['Local B1 · ERASMUS TOWER', 'B', 203, 'RDC 105 m²', '98 m²', '154 m²', 'small', 'A'],
	['Local B2 · ERASMUS TOWER', 'B', 267, 'RDC 161 m²', '106 m²', '214 m²', 'medium', 'A'],
	['Local B3 · ERASMUS TOWER', 'B', 498, 'RDC 309 m²', '189 m²', '403,5 m²', 'large', 'A'],
	['Local B4 · ERASMUS TOWER', 'B', 379, 'RDC 190 m²', '189 m²', '284,5 m²', 'large', 'B'],
	['Local B5 · ERASMUS TOWER', 'B', 244, 'RDC 131 m²', '113 m²', '187,5 m²', 'small', 'B'],
	['Local B6 · ERASMUS TOWER', 'B', 270, 'RDC 147 m²', '123 m²', '208,5 m²', 'medium', 'B'],
	['Local B7 · ERASMUS TOWER', 'B', 351, 'RDC 163 m²', '188 m²', '257 m²', 'large', 'B'],
].map(([title, type, surface, rdc, mezzanine, sold, surfaceCategory, rentalCategory], index) => {
	const photos = erasmusCommercialAlbumFor(String(title), index);

	return {
		id: 200 + index,
		transaction: 'rent',
		property_type: 'commercial',
		is_sold: false,
		is_rented: ['Local A4 · ERASMUS TOWER', 'Local A5 · ERASMUS TOWER', 'Local B6 · ERASMUS TOWER'].includes(String(title)),
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
		surface_category: String(surfaceCategory) as Property['surface_category'],
		rental_category: String(rentalCategory) as Property['rental_category'],
		project_label: String(rdc),
		price: '',
		price_note: String(type),
		cta_label: 'Demander la disponibilité →',
		image: photos[0]?.image ?? '',
		photos,
		sort_order: 200 + index,
	} satisfies Property;
});

export const fallbackGuidePlaces: GuidePlace[] = [
	['monuments', 'La Kasbah de Tanger', 'Ancien quartier fortifié en hauteur, connu pour ses ruelles, ses portes anciennes et ses vues sur la médina et le détroit.', '/guide-photos/monuments/la-kasbah-de-tanger.jpg'],
	['monuments', 'La Médina de Tanger', 'Le cœur ancien de la ville : souks, ruelles, maisons traditionnelles et atmosphère culturelle unique.', '/guide-photos/monuments/la-medina-de-tanger.jpg'],
	['monuments', 'Grand Socco — Place du 9 Avril 1947', 'Place emblématique entre la ville moderne et la médina, souvent considérée comme l’entrée du vieux Tanger.', '/guide-photos/monuments/grand-socco-place-9-avril-1947.jpg'],
	['monuments', 'Palais de la Kasbah — Dar El Makhzen', 'Ancien palais du sultan, aujourd’hui lié au patrimoine culturel et architectural de Tanger.', '/guide-photos/monuments/palais-kasbah-dar-el-makhzen.jpg'],
	['monuments', 'Cap Spartel et son phare', 'Site naturel et historique à l’entrée du détroit de Gibraltar, symbole du patrimoine maritime tangérois.', '/guide-photos/monuments/cap-spartel-et-son-phare.jpg'],
	['monuments', 'Les Grottes d’Hercule', 'Site mythique près du Cap Spartel, célèbre pour son ouverture naturelle donnant sur l’océan.', '/guide-photos/monuments/les-grottes-d-hercule.jpg'],
	['monuments', 'Borj Dar El Baroud — Fortifications', 'Ancien ouvrage défensif lié à l’histoire militaire de Tanger et à ses fortifications.', '/guide-photos/monuments/borj-dar-el-baroud-fortifications.jpg'],
	['musees', 'Musée de la Légation américaine', 'La Légation américaine abrite un petit musée historique qui mérite une visite, notamment pour les personnes intéressées par les relations entre le Maroc et les États-Unis à travers les siècles. Située à proximité de la médina, elle se découvre facilement lors d’un détour pendant votre visite.', '/guide-photos/musees/musee-legation-americaine.jpg'],
	['musees', 'Musée Dar Niaba', 'Dar Niaba est un musée historique situé dans la médina de Tanger. Il retrace une partie de l’histoire diplomatique du Maroc et met en valeur le rôle de Tanger comme lieu d’échanges entre différentes cultures.', '/guide-photos/musees/musee-dar-niaba.jpg'],
	['musees', 'Musée de la Kasbah — Espace d’art contemporain', 'Espace culturel dédié aux expositions temporaires, rencontres artistiques et à la création contemporaine.', '/guide-photos/musees/musee-kasbah-espace-art-contemporain.jpg'],
	['musees', 'Musée Villa Harris', 'Situé dans une élégante villa historique de Tanger, le Musée Villa Harris met en valeur l’art et le patrimoine culturel de la ville. Entouré d’un beau jardin, ce lieu offre aux visiteurs une expérience unique entre architecture, histoire et collections artistiques.', '/guide-photos/musees/musee-villa-harris.jpg'],
	['musees', 'Villa Perdicaris', 'Située au cœur du parc Perdicaris, la Villa Perdicaris est un lieu emblématique de Tanger, entouré d’une nature luxuriante et d’une atmosphère paisible. Ce site historique offre un cadre unique entre patrimoine, architecture et paysages verdoyants, idéal pour découvrir une autre facette de la ville.', '/guide-photos/musees/villa-perdicaris.jpg'],
].map(([section, title, description, image], index) => ({ id: index + 1, section, title, description, image, sort_order: index + 1 } as GuidePlace));

export const fallbackEventIdeas: EventIdea[] = [
	['Anniversaire', 'Birthday apartment setup', 'Une décoration chaleureuse avec ballons, gâteau, bougies, message personnalisé et coin photo.', ['Ballons premium et arche légère', 'Table surprise avec gâteau', 'Message personnalisé au prénom'], '/event-photos/anniversaire.jpg'],
	['Amoureux', 'Romantic night', 'Une ambiance douce pour couples : pétales, bougies LED, lumière tamisée et détails raffinés.', ['Chemin de pétales et bougies', 'Plateau gourmand ou fleurs', 'Option demande / surprise'], '/event-photos/amoureux.jpg'],
	['Bride to be', 'Bridal suite decor', 'Une mise en scène chic pour bride to be, photos entre amies et préparation avant mariage.', ['Ballons blancs, dorés ou rose gold', 'Lettrage Bride to Be', 'Coin photo élégant'], '/event-photos/bride-to-be.jpg'],
	['Dîner privé', 'Private dinner', 'Une table intime dans l’appartement avec décoration florale, lumière chaude et service sur demande.', ['Dressage de table premium', 'Fleurs et ambiance lumineuse', 'Option chef / pâtisserie locale'], '/event-photos/diner-prive.jpg'],
].map(([category, title, description, bullet_points, image], index) => ({ id: index + 1, category, title, description, bullet_points, image, sort_order: index + 1 } as EventIdea));

export const fallbackPurplePearlPlans: PurplePearlPlan[] = [
	['facade', 'Façade', '', '', '', 'Visuel 3D', '/assets/purple-pearl/plans/facade-3d-jour.jpg', 'Visuel 3D', 'Visuel 3D', '/assets/purple-pearl/plans/facade-3d-nuit.jpg', 'Visuel 3D'],
	['plan-coupe', 'Plan coupe', 'Plan coupe', 'Coupe architecturale du projet Purple Pearl.', '/assets/purple-pearl/plans/plan-coupe-architectural.jpg', 'Plan 3D', '/assets/purple-pearl/plans/plan-coupe-3d.jpg', 'Plan coupe - Plan 3D', '', '', ''],
	['plan-sous-sol', 'Plan sous-sol', 'Plan sous-sol', 'Plan du sous-sol du projet Purple Pearl.', '/assets/purple-pearl/plans/plan-sous-sol-architectural.jpg', 'Plan 3D', '/assets/purple-pearl/plans/plan-sous-sol-3d.jpg', 'Plan sous-sol - Plan 3D', '', '', ''],
	['plan-rdc-bas-magasins', 'RDC bas : magasins', 'RDC bas : magasins', 'Plan du RDC bas avec magasins.', '/assets/purple-pearl/plans/plan-rdc-bas-magasins-architectural.jpg', 'Plan 3D', '/assets/purple-pearl/plans/plan-rdc-bas-magasins-3d.jpg', 'RDC bas + magasins - Plan 3D', '', '', ''],
	['plan-rdc-haut-app-mezzanine', 'RDC haut : Appartement + mezzanine', 'RDC haut : Appartement + mezzanine', 'Plan du RDC haut : appartement + mezzanine.', '/assets/purple-pearl/plans/plan-rdc-haut-app-mezzanine-architectural.jpg', 'Plan 3D', '/assets/purple-pearl/plans/plan-rdc-haut-app-mezzanine-3d.jpg', 'RDC haut : Appartement + mezzanine - Plan 3D', '', '', ''],
	['plans-etages-1-2-3-4', 'Étages 1, 2, 3 et 4', 'Étages 1, 2, 3 et 4', 'Plans des étages 1, 2, 3 et 4.', '/assets/purple-pearl/plans/plans-etages-1-4-architectural.jpg', 'Plan 3D', '/assets/purple-pearl/plans/plans-etages-1-4-3d.jpg', 'Étages 1, 2, 3 et 4 - Plan 3D', '', '', ''],
	['plan-1er-retrait', '1er retrait', '1er retrait', 'Plan du 1er retrait.', '/assets/purple-pearl/plans/plan-1er-retrait-architectural.jpg', 'Plan 3D', '/assets/purple-pearl/plans/plan-1er-retrait-3d.jpg', '1er retrait - Plan 3D', '', '', ''],
	['plan-2eme-retrait', '2e retrait', '2e retrait', 'Plan du 2e retrait.', '/assets/purple-pearl/plans/plan-2eme-retrait-architectural.jpg', 'Plan 3D', '/assets/purple-pearl/plans/plan-2eme-retrait-3d.jpg', '2e retrait - Plan 3D', '', '', ''],
].map(
	([key, button_label, title, description, image, image_3d_title, image_3d, image_3d_alt_text, image_3d_secondary_title, image_3d_secondary, image_3d_secondary_alt_text], index) =>
		({
			id: index + 1,
			key,
			button_label,
			title,
			description,
			alt_text: title,
			image,
			image_3d_title,
			image_3d,
			image_3d_alt_text,
			image_3d_secondary_title,
			image_3d_secondary,
			image_3d_secondary_alt_text,
			sort_order: index + 1,
		}) as PurplePearlPlan,
);

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
		email_display: 'contact@nectar.ma',
	},
	properties: [...saleApartments, ...rentApartments, ...rentCommercialUnits],
	guidePlaces: fallbackGuidePlaces,
	eventIdeas: fallbackEventIdeas,
	purplePearlPlans: fallbackPurplePearlPlans,
	testimonials: fallbackTestimonials,
};
