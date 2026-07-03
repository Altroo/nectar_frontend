import { PurplePearlVisitForm } from '@/components/forms';
import { PurpleHeader, StyleBlock, socialLinks } from '@/components/common';
import { PurplePlans } from '@/components/purplePlans';
import type { PurplePearlPlan } from '@/types/site';

const purpleFooterSocialStyles = `
.footer-social-links{
	display:flex;
	flex-wrap:wrap;
	gap:10px;
	align-items:center;
}
.footer-social-links a{
	display:inline-flex;
	align-items:center;
	justify-content:center;
	min-height:38px;
	padding:9px 13px;
	border:1px solid rgba(255,255,255,.24);
	border-radius:999px;
	background:rgba(58,29,92,.22);
	color:#fff;
	font-size:11px;
	font-weight:800;
	letter-spacing:.12em;
	text-transform:uppercase;
}
.footer-social-links a:hover{
	background:#fff;
	color:var(--pp-mid);
}
`;

export const PurplePearlPage = ({ plans }: { plans: PurplePearlPlan[] }) => (
	<>
		<StyleBlock css={purpleFooterSocialStyles} />
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
			<section className="page-section" id="proximite" style={{ paddingTop: 0 }}>
				<div className="container">
					<div className="section-header">
						<div className="section-number">05</div>
						<h2>À proximité du projet</h2>
						<p>Une lecture rapide des commodités et accès autour du projet.</p>
					</div>
					<div className="info-card near-grid">
						<NearColumn
							title="À pied"
							items={[
								['Cafés & restaurants', 'Quelques minutes'],
								['Commerces de proximité', 'Quelques minutes'],
								['Pharmacie', 'À proximité'],
							]}
						/>
						<NearColumn
							title="En voiture"
							items={[
								['Centre-ville de Tanger', 'Accès rapide'],
								['Corniche', 'Accès facile'],
								['Gare TGV / grands axes', 'Selon circulation'],
							]}
						/>
					</div>
				</div>
			</section>
			<section className="page-section" id="plans" style={{ paddingTop: 0 }}>
				<div className="container">
					<div className="section-header">
						<div className="section-number">06</div>
						<h2>Plans</h2>
						<p>Cliquez sur une rubrique pour afficher les plans architecturaux et les plans 3D correspondants.</p>
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
				<div className="footer-social-links" aria-label="Réseaux sociaux Purple Pearl">
					<a aria-label="Instagram Purple Pearl" href={socialLinks.purplePearlInstagram} rel="noopener" target="_blank">
						Instagram
					</a>
					<a aria-label="TikTok Purple Pearl" href={socialLinks.purplePearlTikTok} rel="noopener" target="_blank">
						TikTok
					</a>
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
