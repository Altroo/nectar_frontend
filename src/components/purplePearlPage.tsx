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
						<p>Purple Pearl est une promotion immobilière d’appartements premium à Tanger, pensée pour offrir des espaces modernes, lumineux et élégants. La photo de l’immeuble est intégrée directement dans la hero section avec une nuance violette, pour un rendu premium et cohérent avec l’identité du projet.</p>
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
						<p>Une présentation complète de Purple Pearl, avec un design amélioré et une palette violette inspirée du logo du projet.</p>
					</div>
					<div className="intro-card">
						<p style={{ margin: 0, fontSize: 18, lineHeight: 1.9, color: 'var(--pp-muted)' }}>Purple Pearl réunit architecture contemporaine, appartements bien agencés et prestations recherchées. Le projet propose différentes typologies de logements avec des espaces extérieurs ou pratiques selon les besoins : cour, terrasse, balcon ou buanderie. Le tout est présenté dans un univers visuel violet cohérent avec la marque.</p>
						<div className="overview-grid">
							<div className="overview-item stat-card">
								<strong>49,58 à 108,19 m²</strong>
								<span>Surfaces disponibles</span>
							</div>
							<div className="overview-item stat-card">
								<strong>2025</strong>
								<span>Année de construction</span>
							</div>
							<div className="overview-item stat-card">
								<strong>2027</strong>
								<span>Année de livraison</span>
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
						<p>La partie adresse du projet, gardée dans l’univers violet Purple Pearl.</p>
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
						<p>Une lecture rapide des commodités et accès autour du projet.</p>
					</div>
					<div className="info-card near-grid">
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
			</section>
			<section className="page-section" id="plans" style={{ paddingTop: 0 }}>
				<div className="container">
					<div className="section-header">
						<div className="section-number">04</div>
						<h2>Plans</h2>
						<p>Cliquez sur une rubrique pour afficher les plans architecturaux et les plans 3D correspondants.</p>
					</div>
					<PurplePlans plans={plans} />
				</div>
			</section>
			<section className="page-section" id="visite" style={{ paddingTop: 0 }}>
				<div className="container">
					<div className="section-header">
						<div className="section-number">05</div>
						<h2>Planifier une visite</h2>
						<p>Formulaire de contact simple et harmonisé avec les couleurs Purple Pearl.</p>
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
