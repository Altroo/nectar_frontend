'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from '@/i18n/client';
import { localizeProperty, type LanguageCode } from '@/i18n/translations';
import type { Property, PropertyPhoto, SiteContact } from '@/types/site';
import { LinkedFooter, MainHeader } from './common';

type CommercialRentalPageProps = {
	properties: Property[];
	contact: SiteContact;
};

type PageCopy = {
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

const copies: Record<LanguageCode, PageCopy> = {
	fr: {
		breadcrumb: 'Location · Local',
		heroTitle: 'Location de locaux commerciaux',
		heroDescription: "Des espaces commerciaux d’exception au cœur de Tanger, pensés pour accompagner la croissance de votre activité.",
		discover: 'Découvrir les locaux',
		advisor: 'Parler à un conseiller',
		introEyebrow: "Un emplacement d’exception",
		introTitle: 'Erasmus Tower',
		introDescription: 'Située sur la Route de Malabata, Erasmus Tower est une adresse stratégique pour votre activité. Un immeuble moderne, visible et accessible, offrant des locaux commerciaux spacieux et modulables.',
		features: [
			{ title: 'Emplacement stratégique', description: 'Sur l’axe Malabata, à forte visibilité' },
			{ title: 'Espaces modulables', description: 'Configurations flexibles selon vos besoins' },
			{ title: 'Surfaces généreuses', description: 'Des surfaces optimisées pour votre confort' },
		],
		search: 'Recherche',
		searchPlaceholder: 'Ex : Local A1, Local B3...',
		type: 'Type',
		allTypes: 'Tous les types',
		residence: 'Résidence',
		allResidences: 'Toutes les résidences',
		minimumSurface: 'Surface minimum',
		allSurfaces: 'Toutes surfaces',
		filter: 'Filtrer',
		available: 'Locaux disponibles',
		previousUnits: 'Voir les locaux précédents',
		nextUnits: 'Voir les locaux suivants',
		forRent: 'À louer',
		addFavorite: 'Ajouter aux favoris',
		removeFavorite: 'Retirer des favoris',
		totalSurface: 'Surface totale',
		rdc: 'RDC',
		mezzanine: 'Mezzanine',
		viewDetails: 'Voir les détails',
		requestAvailability: 'Demander la disponibilité',
		noResults: 'Aucun local ne correspond aux filtres sélectionnés.',
		activitiesTitle: 'Imaginez votre activité ici',
		activitiesDescription: 'Des espaces adaptés à tous vos projets commerciaux.',
		activities: [
			{ title: 'Pâtisserie', description: 'Un écrin chaleureux pour présenter pâtisseries, chocolats et créations gourmandes.' },
			{ title: 'Opticien', description: 'Une boutique lumineuse pour valoriser montures, conseils et services optiques.' },
			{ title: 'Mini-market', description: 'Un espace fonctionnel pensé pour les produits frais et les achats du quotidien.' },
			{ title: 'Boutique', description: 'Une vitrine élégante pour présenter vos collections et accueillir vos clients.' },
		],
		gallery: 'Galerie photo',
		closeGallery: 'Fermer la galerie',
		previousPhoto: 'Photo précédente',
		nextPhoto: 'Photo suivante',
		whatsappMessage: 'Bonjour, je souhaite connaître la disponibilité de',
	},
	en: {
		breadcrumb: 'Rent · Commercial unit',
		heroTitle: 'Commercial spaces for rent',
		heroDescription: 'Exceptional commercial spaces in the heart of Tangier, designed to support the growth of your business.',
		discover: 'Discover the units',
		advisor: 'Speak with an advisor',
		introEyebrow: 'An exceptional location',
		introTitle: 'Erasmus Tower',
		introDescription: 'Located on the Malabata road, Erasmus Tower is a strategic address for your business. A modern, visible and accessible building offering spacious, adaptable commercial units.',
		features: [
			{ title: 'Strategic location', description: 'On the Malabata axis with excellent visibility' },
			{ title: 'Adaptable spaces', description: 'Flexible layouts to suit your needs' },
			{ title: 'Generous surfaces', description: 'Optimized areas for your comfort' },
		],
		search: 'Search',
		searchPlaceholder: 'E.g. Unit A1, Unit B3...',
		type: 'Type',
		allTypes: 'All types',
		residence: 'Residence',
		allResidences: 'All residences',
		minimumSurface: 'Minimum surface',
		allSurfaces: 'All surfaces',
		filter: 'Filter',
		available: 'Available units',
		previousUnits: 'View previous units',
		nextUnits: 'View next units',
		forRent: 'For rent',
		addFavorite: 'Add to favorites',
		removeFavorite: 'Remove from favorites',
		totalSurface: 'Total surface',
		rdc: 'Ground floor',
		mezzanine: 'Mezzanine',
		viewDetails: 'View details',
		requestAvailability: 'Request availability',
		noResults: 'No commercial unit matches the selected filters.',
		activitiesTitle: 'Imagine your business here',
		activitiesDescription: 'Spaces suited to every commercial project.',
		activities: [
			{ title: 'Pastry shop', description: 'A warm setting to showcase pastries, chocolates and gourmet creations.' },
			{ title: 'Optician', description: 'A bright store designed to showcase eyewear, expert advice and optical services.' },
			{ title: 'Mini-market', description: 'A functional space designed for fresh produce and everyday shopping.' },
			{ title: 'Boutique', description: 'An elegant storefront to present your collections and welcome customers.' },
		],
		gallery: 'Photo gallery',
		closeGallery: 'Close gallery',
		previousPhoto: 'Previous photo',
		nextPhoto: 'Next photo',
		whatsappMessage: 'Hello, I would like to check the availability of',
	},
	es: {
		breadcrumb: 'Alquiler · Local',
		heroTitle: 'Alquiler de locales comerciales',
		heroDescription: 'Espacios comerciales excepcionales en el corazón de Tánger, pensados para acompañar el crecimiento de su actividad.',
		discover: 'Descubrir los locales',
		advisor: 'Hablar con un asesor',
		introEyebrow: 'Una ubicación excepcional',
		introTitle: 'Erasmus Tower',
		introDescription: 'Situada en la carretera de Malabata, Erasmus Tower es una dirección estratégica para su actividad. Un edificio moderno, visible y accesible, con locales comerciales amplios y modulables.',
		features: [
			{ title: 'Ubicación estratégica', description: 'En el eje de Malabata, con gran visibilidad' },
			{ title: 'Espacios modulables', description: 'Configuraciones flexibles según sus necesidades' },
			{ title: 'Superficies generosas', description: 'Superficies optimizadas para su comodidad' },
		],
		search: 'Búsqueda',
		searchPlaceholder: 'Ej.: Local A1, Local B3...',
		type: 'Tipo',
		allTypes: 'Todos los tipos',
		residence: 'Residencia',
		allResidences: 'Todas las residencias',
		minimumSurface: 'Superficie mínima',
		allSurfaces: 'Todas las superficies',
		filter: 'Filtrar',
		available: 'Locales disponibles',
		previousUnits: 'Ver locales anteriores',
		nextUnits: 'Ver locales siguientes',
		forRent: 'En alquiler',
		addFavorite: 'Añadir a favoritos',
		removeFavorite: 'Quitar de favoritos',
		totalSurface: 'Superficie total',
		rdc: 'Planta baja',
		mezzanine: 'Entresuelo',
		viewDetails: 'Ver detalles',
		requestAvailability: 'Solicitar disponibilidad',
		noResults: 'Ningún local coincide con los filtros seleccionados.',
		activitiesTitle: 'Imagine su actividad aquí',
		activitiesDescription: 'Espacios adaptados a todos sus proyectos comerciales.',
		activities: [
			{ title: 'Pastelería', description: 'Un entorno cálido para presentar pasteles, chocolates y creaciones gourmet.' },
			{ title: 'Óptica', description: 'Una tienda luminosa para destacar monturas, asesoramiento y servicios ópticos.' },
			{ title: 'Mini-market', description: 'Un espacio funcional pensado para productos frescos y compras diarias.' },
			{ title: 'Boutique', description: 'Un escaparate elegante para presentar sus colecciones y recibir a sus clientes.' },
		],
		gallery: 'Galería de fotos',
		closeGallery: 'Cerrar la galería',
		previousPhoto: 'Foto anterior',
		nextPhoto: 'Foto siguiente',
		whatsappMessage: 'Hola, quisiera conocer la disponibilidad de',
	},
	ar: {
		breadcrumb: 'كراء · محل تجاري',
		heroTitle: 'كراء محلات تجارية',
		heroDescription: 'فضاءات تجارية مميزة في قلب طنجة، مصممة لمواكبة نمو نشاطكم.',
		discover: 'اكتشف المحلات',
		advisor: 'تحدث مع مستشار',
		introEyebrow: 'موقع استثنائي',
		introTitle: 'Erasmus Tower',
		introDescription: 'يقع Erasmus Tower على طريق مالاباطا، وهو عنوان استراتيجي لنشاطكم. مبنى عصري وواضح وسهل الولوج، يوفر محلات تجارية واسعة وقابلة للتكييف.',
		features: [
			{ title: 'موقع استراتيجي', description: 'على محور مالاباطا بوضوح بصري قوي' },
			{ title: 'فضاءات قابلة للتكييف', description: 'تصميمات مرنة حسب احتياجاتكم' },
			{ title: 'مساحات واسعة', description: 'مساحات محسنة لراحتكم' },
		],
		search: 'بحث',
		searchPlaceholder: 'مثال: Local A1، Local B3...',
		type: 'النوع',
		allTypes: 'كل الأنواع',
		residence: 'الإقامة',
		allResidences: 'كل الإقامات',
		minimumSurface: 'المساحة الدنيا',
		allSurfaces: 'كل المساحات',
		filter: 'تصفية',
		available: 'المحلات المتوفرة',
		previousUnits: 'عرض المحلات السابقة',
		nextUnits: 'عرض المحلات التالية',
		forRent: 'للكراء',
		addFavorite: 'إضافة إلى المفضلة',
		removeFavorite: 'إزالة من المفضلة',
		totalSurface: 'المساحة الإجمالية',
		rdc: 'الطابق الأرضي',
		mezzanine: 'ميزانين',
		viewDetails: 'عرض التفاصيل',
		requestAvailability: 'طلب التوفر',
		noResults: 'لا يوجد محل يطابق الفلاتر المختارة.',
		activitiesTitle: 'تخيل نشاطك هنا',
		activitiesDescription: 'فضاءات مناسبة لجميع مشاريعكم التجارية.',
		activities: [
			{ title: 'حلويات', description: 'فضاء دافئ لعرض الحلويات والشوكولاتة والإبداعات الشهية.' },
			{ title: 'محل بصريات', description: 'متجر مشرق لعرض النظارات وتقديم الاستشارة والخدمات البصرية.' },
			{ title: 'متجر مصغر', description: 'فضاء عملي مصمم للمنتجات الطازجة والمشتريات اليومية.' },
			{ title: 'بوتيك', description: 'واجهة أنيقة لعرض تشكيلاتكم واستقبال زبنائكم.' },
		],
		gallery: 'معرض الصور',
		closeGallery: 'إغلاق المعرض',
		previousPhoto: 'الصورة السابقة',
		nextPhoto: 'الصورة التالية',
		whatsappMessage: 'مرحبا، أود معرفة مدى توفر',
	},
};

const activityImages = [
	'/assets/erasmus/erasmus-activity-patisserie.jpg',
	'/assets/erasmus/erasmus-activity-opticien.jpg',
	'/assets/erasmus/erasmus-activity-mini-market.jpg',
	'/assets/erasmus/erasmus-activity-boutique.jpg',
];

const favoriteStorageKey = 'nectar-location-local-favorites';

const unitCode = (property: Property) => property.title.match(/\b([AB]\d+)\b/i)?.[1]?.toUpperCase() ?? '';
const unitType = (property: Property) => unitCode(property).charAt(0);
const unitCardImage = (property: Property) => {
	const code = unitCode(property);
	return code ? `/assets/erasmus/units/${code}.jpg` : property.image.replace(/-(large|card|thumb)\.jpg$/, '-card.jpg') || '/assets/erasmus/erasmus-tower-building.jpg';
};
const unitName = (title: string) => title.split('·')[0].trim();
const surfaceLabel = (surface: number | null) => (surface ? `${surface.toLocaleString('fr-FR')} m²` : '—');
const detailLabel = (value: string, prefix?: string) => value.replace(prefix ? new RegExp(`^${prefix}\\s*`, 'i') : /^$/, '') || '—';

export const CommercialRentalPage = ({ properties, contact }: CommercialRentalPageProps) => {
	const { language } = useTranslation();
	const copy = copies[language];
	const carouselRef = useRef<HTMLDivElement>(null);
	const favoritesLoadedRef = useRef(false);
	const [query, setQuery] = useState('');
	const [type, setType] = useState('');
	const [residence, setResidence] = useState('');
	const [minimumSurface, setMinimumSurface] = useState('');
	const [favoriteIds, setFavoriteIds] = useState<Set<number>>(new Set());
	const [gallery, setGallery] = useState<{ title: string; photos: PropertyPhoto[]; index: number } | null>(null);

	useEffect(() => {
		const timer = window.setTimeout(() => {
			try {
				const stored = JSON.parse(window.sessionStorage.getItem(favoriteStorageKey) ?? '[]');
				if (Array.isArray(stored)) {
					setFavoriteIds(new Set(stored.filter((id): id is number => typeof id === 'number')));
				}
			} catch {
				window.sessionStorage.removeItem(favoriteStorageKey);
			}
			favoritesLoadedRef.current = true;
		}, 0);

		return () => window.clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (!favoritesLoadedRef.current) {
			return;
		}

		try {
			window.sessionStorage.setItem(favoriteStorageKey, JSON.stringify(Array.from(favoriteIds)));
		} catch {
			// Favorites remain usable for the current render if browser storage is unavailable.
		}
	}, [favoriteIds]);

	useEffect(() => {
		if (!gallery) {
			return;
		}

		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setGallery(null);
			}
		};

		window.addEventListener('keydown', closeOnEscape);
		return () => window.removeEventListener('keydown', closeOnEscape);
	}, [gallery]);

	const rows = useMemo(
		() =>
			properties
				.filter((property) => property.transaction === 'rent' && property.property_type === 'commercial')
				.sort((a, b) => a.sort_order - b.sort_order)
				.map((property) => localizeProperty(language, property)),
		[language, properties],
	);

	const residences = useMemo(() => Array.from(new Set(rows.map((property) => property.residence).filter(Boolean))), [rows]);
	const visibleRows = rows.filter((property) => {
		const searchText = [property.title, property.residence, property.district, property.address, property.unit_number].join(' ').toLowerCase();
		return (
			(!query || searchText.includes(query.trim().toLowerCase())) &&
			(!type || unitType(property) === type) &&
			(!residence || property.residence === residence) &&
			(!minimumSurface || (property.surface_total ?? 0) >= Number(minimumSurface))
		);
	});

	const scrollCarousel = (direction: -1 | 1) => {
		const carousel = carouselRef.current;
		if (!carousel) {
			return;
		}
		carousel.scrollBy({ left: direction * Math.max(300, carousel.clientWidth * 0.82), behavior: 'smooth' });
	};

	const resetCarouselPosition = () => {
		carouselRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
	};

	const toggleFavorite = (propertyId: number) => {
		const next = new Set(favoriteIds);
		if (next.has(propertyId)) {
			next.delete(propertyId);
		} else {
			next.add(propertyId);
		}
		setFavoriteIds(next);
	};

	const openGallery = (property: Property) => {
		const name = unitName(property.title);
		setGallery({
			title: name,
			photos: [
				{
					id: property.id,
					title: name,
					alt_text: `${name} · Erasmus Tower`,
					image: unitCardImage(property),
					sort_order: 1,
				},
			],
			index: 0,
		});
	};

	const stepGallery = (direction: -1 | 1) => {
		setGallery((current) => {
			if (!current) {
				return null;
			}
			return { ...current, index: (current.index + direction + current.photos.length) % current.photos.length };
		});
	};

	return (
		<>
			<MainHeader />
			<div className="cr-page">
				<section className="cr-hero">
					<div className="cr-container cr-hero__content">
						<p className="cr-hero__breadcrumb">{copy.breadcrumb}</p>
						<h1>{copy.heroTitle}</h1>
						<p className="cr-hero__description">{copy.heroDescription}</p>
						<div className="cr-hero__actions">
							<a className="cr-button cr-button--solid" href="#locaux">
								{copy.discover} <ArrowIcon />
							</a>
							<a className="cr-button cr-button--outline" href="/#contact">
								{copy.advisor} <ChatIcon />
							</a>
						</div>
					</div>
				</section>

				<section className="cr-intro">
					<div className="cr-container cr-intro__grid">
						<img className="cr-intro__image" src="/assets/erasmus/erasmus-location-exception.jpg" alt="Erasmus Tower à Tanger" width="2200" height="1466" />
						<div className="cr-intro__content">
							<p className="cr-eyebrow">{copy.introEyebrow}</p>
							<h2>{copy.introTitle}</h2>
							<span className="cr-divider" />
							<p className="cr-intro__description">{copy.introDescription}</p>
							<div className="cr-features">
								{copy.features.map((feature, index) => (
									<article className="cr-feature" key={feature.title}>
										<FeatureIcon index={index} />
										<div>
											<h3>{feature.title}</h3>
											<p>{feature.description}</p>
										</div>
									</article>
								))}
							</div>
						</div>
					</div>
				</section>

				<main className="cr-main" id="locaux">
					<div className="cr-container">
						<form
							className="cr-filters"
							onSubmit={(event) => {
								event.preventDefault();
								resetCarouselPosition();
							}}
						>
							<label className="cr-filter cr-filter--search">
								<span>{copy.search}</span>
								<div>
									<SearchIcon />
									<input type="search" value={query} placeholder={copy.searchPlaceholder} onChange={(event) => setQuery(event.target.value)} />
								</div>
							</label>
							<label className="cr-filter">
								<span>{copy.type}</span>
								<select value={type} onChange={(event) => setType(event.target.value)}>
									<option value="">{copy.allTypes}</option>
									<option value="A">{copy.type} A</option>
									<option value="B">{copy.type} B</option>
								</select>
							</label>
							<label className="cr-filter">
								<span>{copy.residence}</span>
								<select value={residence} onChange={(event) => setResidence(event.target.value)}>
									<option value="">{copy.allResidences}</option>
									{residences.map((item) => (
										<option value={item} key={item}>
											{item}
										</option>
									))}
								</select>
							</label>
							<label className="cr-filter">
								<span>{copy.minimumSurface}</span>
								<select value={minimumSurface} onChange={(event) => setMinimumSurface(event.target.value)}>
									<option value="">{copy.allSurfaces}</option>
									{[200, 250, 300, 400].map((surface) => (
										<option key={surface} value={surface}>
											{surface} m²
										</option>
									))}
								</select>
							</label>
							<button className="cr-filter-button" type="submit">
								<FilterIcon /> {copy.filter}
							</button>
						</form>

						<section className="cr-listing" aria-labelledby="cr-listing-title">
							<div className="cr-section-heading">
								<h2 id="cr-listing-title">{copy.available}</h2>
								<div className="cr-carousel-controls">
									<button type="button" aria-label={copy.previousUnits} onClick={() => scrollCarousel(-1)}>
										<ChevronIcon direction="left" />
									</button>
									<button type="button" aria-label={copy.nextUnits} onClick={() => scrollCarousel(1)}>
										<ChevronIcon direction="right" />
									</button>
								</div>
							</div>
							{visibleRows.length ? (
								<div className="cr-carousel" ref={carouselRef}>
									{visibleRows.map((property, index) => {
										const isFavorite = favoriteIds.has(property.id);
										const name = unitName(property.title);
										const cardImage = unitCardImage(property);
										const whatsappHref = `https://wa.me/${contact.whatsapp_number}?text=${encodeURIComponent(`${copy.whatsappMessage} ${name} · Erasmus Tower.`)}`;
										return (
											<article className="cr-property-card" key={property.id}>
												<div className="cr-property-card__image-wrap">
													<img
														className="cr-property-card__image"
														src={cardImage}
														alt={`${name} · Erasmus Tower`}
														loading={index < 3 ? 'eager' : 'lazy'}
														width="960"
														height="1200"
													/>
													<span className="cr-property-card__status">{copy.forRent}</span>
													<button
														className={`cr-favorite${isFavorite ? ' is-favorite' : ''}`}
														type="button"
														aria-label={`${isFavorite ? copy.removeFavorite : copy.addFavorite} · ${name}`}
														aria-pressed={isFavorite}
														onClick={() => toggleFavorite(property.id)}
													>
														<HeartIcon filled={isFavorite} />
													</button>
												</div>
												<div className="cr-property-card__body">
													<h3>{name}</h3>
													<p className="cr-property-card__location">
														<strong>{property.residence}</strong>
														<span>·</span>
														{property.district}
													</p>
													<div className="cr-property-card__meta">
														<PropertyMeta label={copy.totalSurface} value={surfaceLabel(property.surface_total)} />
														<PropertyMeta label={copy.rdc} value={detailLabel(property.project_label, 'RDC')} />
														<PropertyMeta label={copy.mezzanine} value={property.mezzanine || '—'} />
													</div>
													<div className="cr-property-card__actions">
														<button className="cr-details-button" type="button" onClick={() => openGallery(property)}>
															{copy.viewDetails} <ArrowIcon />
														</button>
														<a className="cr-whatsapp-button" href={whatsappHref} target="_blank" rel="noopener">
															<WhatsAppIcon /> {copy.requestAvailability}
														</a>
													</div>
												</div>
											</article>
										);
									})}
								</div>
							) : (
								<p className="cr-no-results">{copy.noResults}</p>
							)}
						</section>

						<section className="cr-activities" aria-labelledby="cr-activities-title">
							<div className="cr-activities__heading">
								<h2 id="cr-activities-title">{copy.activitiesTitle}</h2>
								<p>{copy.activitiesDescription}</p>
							</div>
							<div className="cr-activity-grid">
								{copy.activities.map((activity, index) => (
									<article className="cr-activity-card" key={activity.title}>
										<img className={index === 3 ? 'cr-activity-card__image--top' : undefined} src={activityImages[index]} alt="" width="1000" height="1000" loading="lazy" />
										<div>
											<span className="cr-activity-card__icon">
												<ActivityIcon index={index} />
											</span>
											<div>
												<h3>{activity.title}</h3>
												<p>{activity.description}</p>
											</div>
										</div>
									</article>
								))}
							</div>
						</section>
					</div>
				</main>
			</div>

			{gallery ? (
				<div className="cr-gallery" role="dialog" aria-modal="true" aria-label={`${copy.gallery} · ${gallery.title}`}>
					<button className="cr-gallery__backdrop" type="button" aria-label={copy.closeGallery} onClick={() => setGallery(null)} />
					<div className="cr-gallery__window">
						<button className="cr-gallery__close" type="button" aria-label={copy.closeGallery} onClick={() => setGallery(null)}>
							×
						</button>
						<img src={gallery.photos[gallery.index].image} alt={gallery.photos[gallery.index].alt_text || gallery.photos[gallery.index].title} />
						<div className="cr-gallery__footer">
							<div>
								<strong>{gallery.title}</strong>
								<span>
									{gallery.index + 1} / {gallery.photos.length}
								</span>
							</div>
							<div>
								<button type="button" aria-label={copy.previousPhoto} onClick={() => stepGallery(-1)}>
									<ChevronIcon direction="left" />
								</button>
								<button type="button" aria-label={copy.nextPhoto} onClick={() => stepGallery(1)}>
									<ChevronIcon direction="right" />
								</button>
							</div>
						</div>
					</div>
				</div>
			) : null}

			<LinkedFooter contact={contact} />
		</>
	);
};

const PropertyMeta = ({ label, value }: { label: string; value: string }) => (
	<div>
		<small>{label}</small>
		<strong>{value}</strong>
	</div>
);

const ArrowIcon = () => (
	<svg aria-hidden="true" viewBox="0 0 24 24">
		<path d="M5 12h13M13 6l6 6-6 6" />
	</svg>
);

const ChevronIcon = ({ direction }: { direction: 'left' | 'right' }) => (
	<svg aria-hidden="true" viewBox="0 0 24 24">
		<path d={direction === 'left' ? 'm15 18-6-6 6-6' : 'm9 18 6-6-6-6'} />
	</svg>
);

const SearchIcon = () => (
	<svg aria-hidden="true" viewBox="0 0 24 24">
		<circle cx="11" cy="11" r="7" />
		<path d="m20 20-4-4" />
	</svg>
);

const ChatIcon = () => (
	<svg aria-hidden="true" viewBox="0 0 24 24">
		<path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.6 8.6 0 0 1-3.4-.7L4 20l1.5-4.1A7.2 7.2 0 0 1 4 11.5a8 8 0 0 1 16 0Z" />
	</svg>
);

const FilterIcon = () => (
	<svg aria-hidden="true" viewBox="0 0 24 24">
		<path d="M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M10 14v6" />
	</svg>
);

const HeartIcon = ({ filled }: { filled: boolean }) => (
	<svg aria-hidden="true" viewBox="0 0 24 24">
		<path fill={filled ? 'currentColor' : 'none'} d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.4 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
	</svg>
);

const WhatsAppIcon = () => (
	<svg aria-hidden="true" viewBox="0 0 32 32">
		<path d="M16 4.8a11 11 0 0 0-9.5 16.6L5 27l5.8-1.5A11.2 11.2 0 1 0 16 4.8Zm0 20.3c-1.7 0-3.4-.5-4.9-1.3l-.4-.2-3.4.9.9-3.3-.2-.4a9 9 0 1 1 8 4.3Zm5-6.7c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1l-.9 1.1c-.2.2-.4.2-.7.1-1.7-.8-2.9-1.6-4-3.5-.2-.3 0-.5.1-.6l.5-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.5 1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.2 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z" />
	</svg>
);

const FeatureIcon = ({ index }: { index: number }) => {
	if (index === 0) {
		return (
			<svg className="cr-feature__icon" aria-hidden="true" viewBox="0 0 24 24">
				<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
				<circle cx="12" cy="10" r="2.4" />
			</svg>
		);
	}

	if (index === 1) {
		return (
			<svg className="cr-feature__icon" aria-hidden="true" viewBox="0 0 24 24">
				<path d="m12 2 8 4.5v11L12 22l-8-4.5v-11L12 2Z" />
				<path d="m4 6.5 8 4.5 8-4.5M12 11v11" />
			</svg>
		);
	}

	return (
		<svg className="cr-feature__icon" aria-hidden="true" viewBox="0 0 24 24">
			<path d="m12 2 9 5-9 5-9-5 9-5Z" />
			<path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
		</svg>
	);
};

const ActivityIcon = ({ index }: { index: number }) => {
	if (index === 0) {
		return (
			<svg aria-hidden="true" viewBox="0 0 24 24">
				<path d="M5 20h14M7 20v-7a5 5 0 0 1 10 0v7M9 10c1-2 5-2 6 0M8 15h8" />
			</svg>
		);
	}

	if (index === 1) {
		return (
			<svg aria-hidden="true" viewBox="0 0 24 24">
				<circle cx="7" cy="13" r="4" />
				<circle cx="17" cy="13" r="4" />
				<path d="M11 13h2M3 13 2 9M21 13l1-4" />
			</svg>
		);
	}

	if (index === 2) {
		return (
			<svg aria-hidden="true" viewBox="0 0 24 24">
				<path d="M4 5h2l2 10h9l2-7H7M10 19a1 1 0 1 0 0 .1M17 19a1 1 0 1 0 0 .1" />
			</svg>
		);
	}

	return (
		<svg aria-hidden="true" viewBox="0 0 24 24">
			<path d="M12 7a2 2 0 1 0-2-2M10 7 3 13l2 3h14l2-3-9-6" />
		</svg>
	);
};
