import { PurplePearlVisitForm } from '@/components/forms';
import { PurpleHeader, PurplePearlFooter, StyleBlock } from '@/components/common';
import { PurplePlans } from '@/components/purplePlans';
import type { PurplePearlPlan, SiteContact } from '@/types/site';

const proximityHoverResetStyles = `
#proximite .near-col,
#proximite .near-col:hover{
	transform:none!important;
	box-shadow:none!important;
}
#proximite .near-col{
	transition:none!important;
}
#voir-projet .overview-grid--two{
	grid-template-columns:repeat(2,minmax(0,1fr))!important;
	max-width:760px;
}
@media(max-width:760px){
	#voir-projet .overview-grid--two{
		grid-template-columns:1fr!important;
	}
}
#proximite .near-card-grid{
	display:grid;
	grid-template-columns:repeat(2,minmax(0,1fr));
	gap:28px;
	align-items:stretch;
}
#proximite .near-card{
	height:100%;
}
#visite .check-wrap{
	display:flex!important;
	flex-direction:row!important;
	align-items:center!important;
	justify-content:flex-start!important;
	gap:12px!important;
	line-height:1.35!important;
}
#visite .check-wrap input[type="checkbox"]{
	width:18px!important;
	height:18px!important;
	min-width:18px!important;
	margin:0!important;
	padding:0!important;
	flex:0 0 18px!important;
	accent-color:var(--pp-mid);
}
#visite .check-wrap span{
	display:inline!important;
}
@media(max-width:760px){
	#proximite .near-card-grid{
		grid-template-columns:1fr;
		gap:18px;
	}
}
`;

export const PurplePearlPage = ({ plans, contact }: { plans: PurplePearlPlan[]; contact: SiteContact }) => (
	<>
		<StyleBlock css={proximityHoverResetStyles} />
		<PurpleHeader />
		<main>
			<section className="hero" aria-label="Hero Purple Pearl">
				<div className="container">
					<div className="hero-content">
						<img className="hero-logo" src="/assets/purple-pearl-logo.png" alt="Logo Purple Pearl" />
						<p className="eyebrow">Promotion immobilière</p>
						<h1>Purple Pearl</h1>
						<p>Purple Pearl est une promotion immobilière d’appartements et de magasins à vendre à Tanger, pensée pour offrir des espaces modernes, lumineux et élégants. Le projet se distingue par une architecture soignée, des agencements fonctionnels et une identité visuelle harmonieuse, offrant un cadre de vie agréable pour les résidents ainsi que des espaces adaptés aux activités commerciales.</p>
						<div className="hero-actions">
							<a className="hero-btn" href="#voir-projet">
								Voir notre projet
							</a>
							<a className="hero-btn secondary" href="#plans">
								Voir les plans
							</a>
						</div>
					</div>
				</div>
			</section>
			<section className="page-section" id="voir-projet">
				<div className="container">
					<div className="section-header">
						<div className="section-number">01</div>
						<h2>Description</h2>
					</div>
					<div className="intro-card">
						<p style={{ margin: 0, fontSize: 18, lineHeight: 1.9, color: 'var(--pp-muted)' }}>Purple Pearl allie architecture contemporaine, appartements bien agencés et espaces pensés pour le confort du quotidien. Le projet propose plusieurs typologies de logements, adaptées à différents besoins, avec des espaces extérieurs ou fonctionnels tels que cour, terrasse, balcon ou buanderie. Il comprend également des magasins à vendre, pensés pour accueillir des activités commerciales dans un cadre pratique et accessible.</p>
						<div className="overview-grid overview-grid--two">
							<div className="overview-item stat-card">
								<strong>59 à 125,96 m²</strong>
								<span>Surfaces disponibles</span>
							</div>
							<div className="overview-item stat-card">
								<strong>2026</strong>
								<span>Année de construction</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="page-section" id="adresse" style={{ paddingTop: 0 }}>
				<div className="container">
					<div className="section-header">
						<div className="section-number">02</div>
						<h2>Adresse</h2>
					</div>
					<div className="address-grid">
						<div className="address-item">
							<strong>Adresse</strong>
							<p>Tanger, Maroc — l’adresse détaillée peut être précisée lors de la demande de visite.</p>
						</div>
						<div className="address-item">
							<strong>Ville</strong>
							<p>Tanger</p>
						</div>
					</div>
					<a className="map-btn" href="https://www.google.com/maps/search/Tanger+Maroc" target="_blank" rel="noopener">
						Ouvrir sur Google Maps
					</a>
				</div>
			</section>
			<section className="page-section" id="proximite" style={{ paddingTop: 0 }}>
				<div className="container">
					<div className="section-header">
						<div className="section-number">03</div>
						<h2>À proximité du projet</h2>
					</div>
					<div className="near-card-grid">
						<div className="info-card near-card">
							<NearColumn
								title="À pied"
								items={[
									['Commerces de proximité', '2–5 min'],
									['Cafés & Restaurants', '3–5 min'],
									['Pharmacie', '3 min'],
									['Mosquée', '4–5 min'],
									['École', '5–7 min'],
									['Salle de sport', '6–8 min'],
								]}
							/>
						</div>
						<div className="info-card near-card">
							<NearColumn
								title="En voiture"
								items={[
									['Centre-ville de Tanger', '10–15 min'],
									['Corniche', '12–15 min'],
									['Gare TGV Tanger Ville', '10–15 min'],
									['Grands axes routiers', '2 min'],
									['Rond-point Andalus', '2 min'],
									['Zone commerciale', '5–8 min'],
									['Marina Tanger', '15 min'],
									['Port Tanger Ville', '20 min'],
									['Aéroport Ibn Battouta', '20–25 min'],
								]}
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="page-section" id="plans" style={{ paddingTop: 0 }}>
				<div className="container">
					<div className="section-header">
						<div className="section-number">04</div>
						<h2>Plans</h2>
					</div>
					<PurplePlans plans={plans} />
				</div>
			</section>
			<section className="page-section" id="visite" style={{ paddingTop: 0 }}>
				<div className="container">
					<div className="section-header">
						<div className="section-number">05</div>
						<h2>Planifier une visite</h2>
					</div>
					<div className="visit-card">
						<PurplePearlVisitForm />
					</div>
				</div>
			</section>
		</main>
		<PurplePearlFooter contact={contact} />
	</>
);

const NearColumn = ({ title, items }: { title: string; items: [string, string][] }) => (
	<div className="near-col">
		<h3>{title}</h3>
		{items.map(([label, value]) => (
			<div className="near-row" key={label}>
				<strong>{label}</strong>
				<span>{value}</span>
			</div>
		))}
	</div>
);
