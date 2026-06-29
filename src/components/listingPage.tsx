'use client';

import { useMemo, useState } from 'react';
import type { Property, PropertyType, SiteContact, Transaction } from '@/types/site';
import { SimpleFooter, SimpleHeader } from './common';

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

	const rows = useMemo(
		() =>
			properties
				.filter((property) => property.transaction === transaction && property.property_type === propertyType)
				.sort((a, b) => a.sort_order - b.sort_order),
		[properties, propertyType, transaction],
	);

	const residences = Array.from(new Set(rows.map((property) => property.residence).filter(Boolean)));
	const roomChoices = Array.from(new Set(rows.map((property) => property.bedrooms).filter((value): value is number => Boolean(value)))).sort((a, b) => a - b);
	const commercialTypes = Array.from(new Set(rows.map((property) => property.price_note).filter(Boolean)));

	const visibleRows = rows.filter((property) => {
		const searchable = [property.title, property.tag, property.residence, property.district, property.address, property.description, property.unit_number]
			.join(' ')
			.toLowerCase();
		const matchesQuery = !query || searchable.includes(query.toLowerCase());
		const matchesResidence = !residence || property.residence.toLowerCase() === residence.toLowerCase();
		const matchesRooms = !rooms || String(property.bedrooms ?? property.price_note) === rooms;
		const matchesSurface = !minSurface || (property.surface_total ?? 0) >= Number(minSurface);
		const matchesBudget = !maxBudget || !property.price || priceNumber(property.price) <= Number(maxBudget);
		return matchesQuery && matchesResidence && matchesRooms && matchesSurface && matchesBudget;
	});

	return (
		<>
			<SimpleHeader />
			<section className="page-hero">
				<span>{kicker}</span>
				<h1>{title}</h1>
				<p>{description}</p>
			</section>
			<main className={`list-section${propertyType === 'commercial' ? ' local' : ''}`}>
				<div className="list-head">
					<h2>{sectionTitle}</h2>
					<p>{sectionDescription}</p>
				</div>
				<div className="filters">
					<label>
						Recherche
						<input placeholder={propertyType === 'apartment' ? 'Résidence, adresse...' : 'Type, résidence...'} type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
					</label>
					<label>
						{propertyType === 'commercial' && transaction === 'sale' ? 'Type' : 'Résidence'}
						<select value={propertyType === 'commercial' && transaction === 'sale' ? rooms : residence} onChange={(event) => (propertyType === 'commercial' && transaction === 'sale' ? setRooms(event.target.value) : setResidence(event.target.value))}>
							<option value="">{propertyType === 'commercial' && transaction === 'sale' ? 'Tous' : 'Toutes'}</option>
							{propertyType === 'commercial' && transaction === 'sale'
								? commercialTypes.map((type) => (
										<option key={type} value={type}>
											Type {type}
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
						{propertyType === 'apartment' ? 'Chambres' : transaction === 'sale' ? 'Résidence' : 'Surface'}
						{propertyType === 'apartment' ? (
							<select value={rooms} onChange={(event) => setRooms(event.target.value)}>
								<option value="">Toutes</option>
								{roomChoices.map((room) => (
									<option key={room} value={room}>
										{room} chambre{room > 1 ? 's' : ''}
									</option>
								))}
							</select>
						) : transaction === 'sale' ? (
							<select value={residence} onChange={(event) => setResidence(event.target.value)}>
								<option value="">Toutes</option>
								{residences.map((item) => (
									<option key={item}>{item}</option>
								))}
							</select>
						) : (
							<select>
								<option value="">Toutes</option>
							</select>
						)}
					</label>
					<label>
						{transaction === 'rent' && propertyType === 'apartment' ? 'Budget max' : propertyType === 'commercial' && transaction === 'rent' ? 'Budget' : 'Surface minimum'}
						<input
							placeholder={transaction === 'rent' ? 'MAD' : 'm²'}
							type="number"
							value={transaction === 'rent' ? maxBudget : minSurface}
							onChange={(event) => (transaction === 'rent' ? setMaxBudget(event.target.value) : setMinSurface(event.target.value))}
						/>
					</label>
					<button type="button">Filtrer</button>
				</div>
				{transaction === 'rent' && propertyType === 'apartment' ? (
					<p className="result-count">
						<span>{visibleRows.length}</span> appartements affichés
					</p>
				) : null}
				<div className="grid" id="cards">
					{visibleRows.map((property) => (
						<PropertyCard key={property.id} property={property} />
					))}
				</div>
				{visibleRows.length === 0 ? <div className="no-results">Aucun bien ne correspond aux filtres sélectionnés.</div> : null}
			</main>
			<SimpleFooter contact={contact} />
		</>
	);
};

const PropertyCard = ({ property }: { property: Property }) => {
	const isCommercial = property.property_type === 'commercial';
	const isRentalApartment = property.transaction === 'rent' && property.property_type === 'apartment';

	return (
		<article className={`card${isCommercial ? ' local' : ''}`}>
			<div className="card-img" style={property.image ? { backgroundImage: `linear-gradient(135deg,rgba(73,52,37,.24),rgba(73,52,37,.04)),url('${property.image}')` } : undefined} />
			<div className="card-body">
				<span className="tag">{property.tag}</span>
				<h3>{property.title}</h3>
				<p>{property.description}</p>
				{property.price ? <span className="price">{property.price}</span> : null}
				{property.price_note && isRentalApartment ? <p>{property.price_note}</p> : null}
				<div className="meta">
					{isRentalApartment ? (
						<>
							<Meta label="Chambres" value={`${property.bedrooms ?? ''} chambre${property.bedrooms && property.bedrooms > 1 ? 's' : ''}`} />
							<Meta label="Etage" value={property.floor} />
							<Meta label="Résidence" value={property.residence} />
							<Meta label="N° Appt" value={property.unit_number} />
						</>
					) : isCommercial && property.transaction === 'sale' ? (
						<>
							<Meta label="Surface globale" value={surfaceLabel(property.surface_total)} />
							<Meta label="RDC" value={property.project_label.replace(/^RDC /, '')} />
							<Meta label="Mezzanine" value={property.mezzanine} />
							<Meta label="Total vendu" value={property.surface_sold} />
						</>
					) : isCommercial ? (
						<>
							<Meta label="Quartiers" value={property.district} />
							<Meta label="Projet" value={property.project_label} />
						</>
					) : (
						<>
							<Meta label="Étage" value={property.floor} />
							<Meta label="Chambres" value={String(property.bedrooms ?? '')} />
							<Meta label="Superficie globale" value={surfaceLabel(property.surface_total)} />
							<Meta label="Surface vendue" value={property.surface_sold} />
						</>
					)}
				</div>
				<a className="cta" href="/#contact">
					{property.cta_label || 'Faire une demande →'}
				</a>
			</div>
		</article>
	);
};

const Meta = ({ label, value }: { label: string; value: string }) => (
	<div>
		<small>{label}</small>
		<strong>{value}</strong>
	</div>
);
