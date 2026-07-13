'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from '@/i18n/client';
import { localizeProperty } from '@/i18n/translations';
import type { Property, PropertyType, SiteContact, Transaction } from '@/types/site';
import { LinkedFooter, MainHeader } from './common';

type ListingPageProps = {
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

const surfaceLabel = (surface: number | null) => (surface ? `${surface.toLocaleString('fr-FR')} m²` : '');
const priceNumber = (price: string) => Number(price.replace(/[^\d]/g, '') || 0);
const apartmentFavoriteStorageKey = (transaction: Transaction) => `nectar-${transaction === 'sale' ? 'vente' : 'location'}-appartement-favorites`;

type GalleryImageVariant = 'large' | 'card' | 'thumb';

const albumAssetPattern = /^\/assets\/(?:city-center|erasmus|hilton-n05|hilton-n11|hilton-n11-12th|hilton-n13|mandelson-n47)\//;

const galleryImageVariant = (image: string, variant: GalleryImageVariant) => {
	if (!albumAssetPattern.test(image)) {
		return image;
	}

	if (image.endsWith('.png')) {
		return image.replace(/\.png$/, `-${variant}.jpg`);
	}

	return image.replace(/-(large|card|thumb)\.jpg$/, `-${variant}.jpg`);
};

export const ListingPage = ({
	transaction,
	propertyType,
	title,
	kicker,
	description,
	sectionTitle,
	sectionDescription,
	properties,
	contact,
}: ListingPageProps) => {
	const [query, setQuery] = useState('');
	const [residence, setResidence] = useState('');
	const [rooms, setRooms] = useState('');
	const [minSurface, setMinSurface] = useState('');
	const [maxBudget, setMaxBudget] = useState('');
	const favoritesLoadedRef = useRef(false);
	const [favoriteIds, setFavoriteIds] = useState<Set<number>>(new Set());
	const { language, t } = useTranslation();
	const pageKey = `listing.pages.${transaction}.${propertyType}`;
	const favoriteStorageKey = apartmentFavoriteStorageKey(transaction);

	useEffect(() => {
		if (propertyType !== 'apartment') {
			return;
		}

		favoritesLoadedRef.current = false;
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
	}, [favoriteStorageKey, propertyType]);

	useEffect(() => {
		if (propertyType !== 'apartment' || !favoritesLoadedRef.current) {
			return;
		}

		try {
			window.sessionStorage.setItem(favoriteStorageKey, JSON.stringify(Array.from(favoriteIds)));
		} catch {
			// Favorites remain usable until the page is closed if storage is unavailable.
		}
	}, [favoriteIds, favoriteStorageKey, propertyType]);

	const toggleFavorite = (propertyId: number) => {
		const next = new Set(favoriteIds);
		if (next.has(propertyId)) {
			next.delete(propertyId);
		} else {
			next.add(propertyId);
		}
		setFavoriteIds(next);
	};

	const rows = useMemo(
		() =>
			properties
				.filter((property) => property.transaction === transaction && property.property_type === propertyType)
				.sort((a, b) => a.sort_order - b.sort_order)
				.map((property) => localizeProperty(language, property)),
		[language, properties, propertyType, transaction],
	);

	const residences = Array.from(new Set(rows.map((property) => property.residence).filter(Boolean)));
	const roomChoices = Array.from(new Set(rows.map((property) => property.bedrooms).filter((value): value is number => Boolean(value)))).sort((a, b) => a - b);
	const commercialTypes = Array.from(new Set(rows.map((property) => property.price_note).filter(Boolean)));
	const usesBudgetFilter = transaction === 'rent' && propertyType === 'apartment';
	const usesCommercialTypeFilter = propertyType === 'commercial';

	const visibleRows = rows.filter((property) => {
		const searchable = [property.title, property.tag, property.residence, property.district, property.address, property.description, property.unit_number]
			.join(' ')
			.toLowerCase();
		const matchesQuery = !query || searchable.includes(query.toLowerCase());
		const matchesResidence = !residence || property.residence.toLowerCase() === residence.toLowerCase();
		const matchesRooms = !rooms || String(property.bedrooms ?? property.price_note) === rooms;
		const matchesSurface = !minSurface || (property.surface_total ?? 0) >= Number(minSurface);
		const matchesBudget = !usesBudgetFilter || !maxBudget || !property.price || priceNumber(property.price) <= Number(maxBudget);
		return matchesQuery && matchesResidence && matchesRooms && matchesSurface && matchesBudget;
	});

	return (
		<>
			<MainHeader />
			<section className="page-hero">
				<span>{t(`${pageKey}.1`, kicker)}</span>
				<h1>{t(`${pageKey}.0`, title)}</h1>
				<p>{t(`${pageKey}.2`, description)}</p>
			</section>
			<main className={`list-section${propertyType === 'commercial' ? ' local' : ''}`}>
				<div className="list-head">
					<h2>{t(`${pageKey}.3`, sectionTitle)}</h2>
					<p>{t(`${pageKey}.4`, sectionDescription)}</p>
				</div>
				<div className="filters">
					<label>
						{t('listing.search')}
						<input placeholder={propertyType === 'apartment' ? t('listing.searchApartmentPlaceholder') : t('listing.searchCommercialPlaceholder')} type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
					</label>
					<label>
						{usesCommercialTypeFilter ? t('listing.type') : t('listing.residence')}
						<select value={usesCommercialTypeFilter ? rooms : residence} onChange={(event) => (usesCommercialTypeFilter ? setRooms(event.target.value) : setResidence(event.target.value))}>
							<option value="">{usesCommercialTypeFilter ? t('listing.all') : t('listing.allPlural')}</option>
							{usesCommercialTypeFilter
								? commercialTypes.map((type) => (
										<option key={type} value={type}>
											{t('listing.type')} {type}
										</option>
									))
								: residences.map((item) => (
										<option key={item} value={item}>
											{item}
										</option>
									))}
						</select>
					</label>
					<label>
						{propertyType === 'apartment' ? t('listing.bedrooms') : t('listing.residence')}
						{propertyType === 'apartment' ? (
							<select value={rooms} onChange={(event) => setRooms(event.target.value)}>
								<option value="">{t('listing.allPlural')}</option>
								{roomChoices.map((room) => (
									<option key={room} value={room}>
										{room} {room > 1 ? t('listing.bedroomsUnit') : t('listing.bedroom')}
									</option>
								))}
							</select>
						) : (
							<select value={residence} onChange={(event) => setResidence(event.target.value)}>
								<option value="">{t('listing.allPlural')}</option>
								{residences.map((item) => (
									<option key={item}>{item}</option>
								))}
							</select>
						)}
					</label>
					<label>
						{usesBudgetFilter ? t('listing.budgetMax') : t('listing.minSurface')}
						<input
							dir="ltr"
							placeholder={usesBudgetFilter ? 'MAD' : 'm²'}
							type="number"
							value={usesBudgetFilter ? maxBudget : minSurface}
							onChange={(event) => (usesBudgetFilter ? setMaxBudget(event.target.value) : setMinSurface(event.target.value))}
						/>
					</label>
					<button type="button">{t('listing.filter')}</button>
				</div>
				{transaction === 'rent' && propertyType === 'apartment' ? (
					<p className="result-count">
						<span>{visibleRows.length}</span> {t('listing.apartmentsShown')}
					</p>
				) : null}
				<div className="grid" id="cards">
					{visibleRows.map((property) => (
						<PropertyCard
							key={property.id}
							property={property}
							isFavorite={favoriteIds.has(property.id)}
							onToggleFavorite={toggleFavorite}
						/>
					))}
				</div>
				{visibleRows.length === 0 ? <div className="no-results">{t('listing.noResults')}</div> : null}
			</main>
			<LinkedFooter contact={contact} />
		</>
	);
};

const PropertyCard = ({ property, isFavorite, onToggleFavorite }: { property: Property; isFavorite: boolean; onToggleFavorite: (propertyId: number) => void }) => {
	const { t } = useTranslation();
	const isCommercial = property.property_type === 'commercial';
	const isRentalApartment = property.transaction === 'rent' && property.property_type === 'apartment';
	const isSaleApartment = property.transaction === 'sale' && property.property_type === 'apartment';
	const isApartmentListing = isRentalApartment || isSaleApartment;
	const albumPhotos = [...(property.photos ?? [])].filter((photo) => photo.image).sort((a, b) => a.sort_order - b.sort_order);
	const primaryImage = property.image || albumPhotos[0]?.image || '';
	const cardImage = primaryImage ? galleryImageVariant(primaryImage, 'card') : '';
	const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
	const activePhoto = activePhotoIndex === null ? null : albumPhotos[activePhotoIndex];
	const activePhotoImage = activePhoto ? galleryImageVariant(activePhoto.image, 'large') : '';
	const activePhotoCount = albumPhotos.length;
	const showPhoto = (index: number) => setActivePhotoIndex(index);
	const showPreviousPhoto = () => {
		if (!activePhotoCount || activePhotoIndex === null) {
			return;
		}
		setActivePhotoIndex((activePhotoIndex - 1 + activePhotoCount) % activePhotoCount);
	};
	const showNextPhoto = () => {
		if (!activePhotoCount || activePhotoIndex === null) {
			return;
		}
		setActivePhotoIndex((activePhotoIndex + 1) % activePhotoCount);
	};
	const displayTag = isSaleApartment ? t('listing.tags.apartmentForSale') : isCommercial && property.transaction === 'rent' ? t('listing.tags.commercialForRent') : isCommercial && property.transaction === 'sale' ? t('listing.tags.commercialForSale') : property.tag;
	const ctaLabel = property.transaction === 'sale' ? t('listing.requestPrice') : property.transaction === 'rent' ? t('listing.requestAvailability') : t('listing.request');

	return (
		<article className={`card${isCommercial ? ' local' : ''}`}>
			<div className={`card-img${isApartmentListing ? ' apartment-card-image' : ''}`} style={cardImage ? { backgroundImage: `linear-gradient(135deg,rgba(73,52,37,.24),rgba(73,52,37,.04)),url('${cardImage}')` } : undefined}>
				{isApartmentListing ? (
					<>
						<span className="apartment-card-status">{t(isSaleApartment ? 'listing.forSale' : 'listing.forRent')}</span>
						<button
							className={`apartment-card-favorite${isFavorite ? ' is-favorite' : ''}`}
							type="button"
							aria-label={`${isFavorite ? t('listing.removeFavorite') : t('listing.addFavorite')} · ${property.title}`}
							aria-pressed={isFavorite}
							onClick={() => onToggleFavorite(property.id)}
						>
							<HeartIcon filled={isFavorite} />
						</button>
					</>
				) : null}
			</div>
			<div className="card-body">
				<span className="tag">{displayTag}</span>
				<h3>{property.title}</h3>
				<p>{property.description}</p>
				{property.price ? <span className="price">{property.price}</span> : null}
				{property.price_note && isRentalApartment ? <p>{t('listing.priceNoteMonth')}</p> : null}
				<div className="meta">
					{isRentalApartment ? (
						<>
							<Meta label={t('listing.meta.bedrooms')} value={`${property.bedrooms ?? ''} ${property.bedrooms && property.bedrooms > 1 ? t('listing.bedroomsUnit') : t('listing.bedroom')}`} />
							<Meta label={t('listing.meta.floor')} value={property.floor} />
							<Meta label={t('listing.meta.residence')} value={property.residence} />
							<Meta label={t('listing.meta.unit')} value={property.unit_number} />
						</>
					) : isCommercial ? (
						<>
							<Meta label={t('listing.meta.globalSurface')} value={surfaceLabel(property.surface_total)} />
							<Meta label={t('listing.meta.rdc')} value={property.project_label.replace(/^RDC /, '')} />
							<Meta label={t('listing.meta.mezzanine')} value={property.mezzanine} />
							<Meta label={t('listing.meta.totalSurface')} value={property.surface_sold} />
						</>
					) : (
						<>
							<Meta label={t('listing.meta.floor')} value={property.floor} />
							<Meta label={t('listing.meta.bedrooms')} value={String(property.bedrooms ?? '')} />
							<Meta label={t('listing.meta.globalSurface')} value={surfaceLabel(property.surface_total)} />
							<Meta label={t('listing.meta.soldSurface')} value={property.surface_sold} />
						</>
					)}
				</div>
				{activePhotoCount ? (
					<div className="property-album" aria-label={`${t('listing.album')} ${property.title}`}>
						<button className="property-album__open" type="button" onClick={() => showPhoto(0)} aria-label={t('listing.openAlbum', '', { title: property.title })}>
							{t('listing.album')}{' '}
							<span>
								{activePhotoCount} {activePhotoCount > 1 ? t('listing.photos') : t('listing.photo')}
							</span>
						</button>
						<div className="property-album__thumbs">
							{albumPhotos.slice(0, 4).map((photo, index) => (
								<button className="property-album__thumb" type="button" key={photo.id} onClick={() => showPhoto(index)} aria-label={t('listing.viewPhoto', '', { title: photo.title })}>
									<img src={galleryImageVariant(photo.image, 'thumb')} alt={photo.alt_text || photo.title} loading="lazy" decoding="async" width="180" height="180" />
								</button>
							))}
						</div>
					</div>
				) : null}
				<a className="cta" href="/#contact">
					{ctaLabel}
				</a>
			</div>
			{activePhoto ? (
				<div className="property-album-modal" role="dialog" aria-modal="true" aria-label={`${t('listing.album')} ${property.title}`}>
					<button className="property-album-modal__backdrop" type="button" aria-label={t('listing.closeAlbum')} onClick={() => setActivePhotoIndex(null)} />
					<div className="property-album-modal__window">
						<button className="property-album-modal__close" type="button" aria-label={t('listing.closeAlbum')} onClick={() => setActivePhotoIndex(null)}>
							×
						</button>
						<img src={activePhotoImage} alt={activePhoto.alt_text || activePhoto.title} decoding="async" />
						<footer className="property-album-modal__footer">
							<div>
								<strong>{activePhoto.title}</strong>
								<span>
									{(activePhotoIndex ?? 0) + 1} / {activePhotoCount}
								</span>
							</div>
							<div className="property-album-modal__controls">
								<button type="button" onClick={showPreviousPhoto}>
									{t('listing.previous')}
								</button>
								<button type="button" onClick={showNextPhoto}>
									{t('listing.next')}
								</button>
							</div>
						</footer>
					</div>
				</div>
			) : null}
		</article>
	);
};

const Meta = ({ label, value }: { label: string; value: string }) => (
	<div>
		<small>{label}</small>
		<strong>{value}</strong>
	</div>
);

const HeartIcon = ({ filled }: { filled: boolean }) => (
	<svg aria-hidden="true" viewBox="0 0 24 24">
		<path fill={filled ? 'currentColor' : 'none'} d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.4 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
	</svg>
);
