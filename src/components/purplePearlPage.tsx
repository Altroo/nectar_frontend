import { PurplePearlVisitForm } from '@/components/forms';
import { PurpleHeader } from '@/components/common';
import { PurplePlans } from '@/components/purplePlans';
import type { PurplePearlPlan } from '@/types/site';

export const PurplePearlPage = ({ plans }: { plans: PurplePearlPlan[] }) => (
	<>
		<PurpleHeader />
		<main>
			<section className="hero" aria-label="Hero Purple Pearl">
				<div className="container">
					<div className="hero-content">
						<img className="hero-logo" src="/assets/purple-pearl-logo.png" alt="Logo Purple Pearl" />
						<p className="eyebrow">Promotion immobilière</p>
						<h1>Purple Pearl</h1>
						<p>Purple Pearl est une promotion immobilière d’appartements de luxe à Tanger, pensée pour offrir des espaces modernes, lumineux et élégants. La photo de l’immeuble est intégrée directement dans la hero section avec une nuance violette, pour un rendu premium et cohérent avec l’identité du projet.</p>
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
			<section className="page-section" id="details" style={{ paddingTop: 0 }}>
				<div className="container">
					<div className="section-header">
						<div className="section-number">02</div>
						<h2>Détails</h2>
						<p>Les informations clés du projet Purple Pearl, présentées dans une mise en page plus claire.</p>
					</div>
					<div className="detail-card">
						<div className="detail-grid">
							<Detail label="Prix" value="Sur demande" />
							<Detail label="Salle de bain" value="1 - 2" />
							<Detail label="Surfaces" value="De 49,58 à 108,19 m²" />
							<Detail label="Année de construction" value="2025" />
							<Detail label="Chambre" value="1 - 3" />
							<Detail label="Année de livraison" value="2027" />
						</div>
						<div className="extra-grid">
							<Detail label="Logements collectifs" value="Résidence Purple Pearl" className="extra-item" />
							<Detail label="Appartements" value="Typologies variées" className="extra-item" />
							<Detail label="Parking" value="Sous-sol, selon disponibilité" className="extra-item" />
							<Detail label="Espaces" value="Cour, terrasse, balcon, buanderie" className="extra-item" />
						</div>
					</div>
				</div>
			</section>
			<section className="page-section" id="caracteristiques" style={{ paddingTop: 0 }}>
				<div className="container">
					<div className="section-header">
						<div className="section-number">03</div>
						<h2>Caractéristiques</h2>
						<p>Les points forts du projet, en cohérence avec le positionnement haut de gamme de Purple Pearl.</p>
					</div>
					<div className="feature-grid">
						{['Résidence contemporaine', 'Appartements lumineux', 'Design élégant et moderne', 'Cour selon typologie', 'Terrasse selon typologie', 'Balcon selon typologie', 'Buanderie selon typologie', 'Commodités à proximité', 'Accompagnement Nectar'].map((item) => (
							<div className="feature-pill" key={item}>
								✓ {item}
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="page-section" id="adresse" style={{ paddingTop: 0 }}>
				<div className="container">
					<div className="section-header">
						<div className="section-number">04</div>
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
			<section className="page-section" id="plans" style={{ paddingTop: 0 }}>
				<div className="container">
					<div className="section-header">
						<div className="section-number">06</div>
						<h2>Plans</h2>
						<p>Cliquez sur un titre pour afficher directement le plan correspondant : sous-sol, RDC, RDC haut, étages 1 à 4, 1er retrait ou 2e retrait.</p>
					</div>
					<PurplePlans plans={plans} />
				</div>
			</section>
			<section className="page-section" id="visite" style={{ paddingTop: 0 }}>
				<div className="container">
					<div className="section-header">
						<div className="section-number">07</div>
						<h2>Planifier une visite</h2>
						<p>Formulaire de contact simple et harmonisé avec les couleurs Purple Pearl.</p>
					</div>
					<div className="visit-card">
						<PurplePearlVisitForm />
					</div>
				</div>
			</section>
		</main>
		<footer className="site-footer">
			<div className="container footer-wrap">
				<div>
					<div className="footer-title">Nectar immobilier</div>
					<p>Page Purple Pearl corrigée : hero section avec la photo de l’immeuble en fond violet, sans mélange avec un autre site.</p>
				</div>
				<p>© Nectar immobilier — Purple Pearl</p>
			</div>
		</footer>
	</>
);

const Detail = ({ label, value, className = 'detail-item' }: { label: string; value: string; className?: string }) => (
	<div className={className}>
		<strong>{label}</strong>
		<span>{value}</span>
	</div>
);
