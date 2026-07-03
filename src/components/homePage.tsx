import { ContactForm, FloatingNewsletter } from '@/components/forms';
import { LinkedFooter, MainHeader } from '@/components/common';
import { HomeProcessSection } from '@/components/homeProcess';
import type { SiteContent, Testimonial } from '@/types/site';

export const HomePage = ({ content }: { content: SiteContent }) => (
	<>
		<MainHeader />
		<section className="sunset-hero" id="agence">
			<div className="sunset-content">
				<p className="sunset-kicker">Agence immobilière à Tanger</p>
				<h1>L’immobilier d’exception à Tanger</h1>
				<div className="sunset-line" />
				<p className="sunset-subtitle">Acheter, vendre ou louer un bien sélectionné avec élégance, accompagnement et expertise locale à Tanger.</p>
				<a className="sunset-main-btn" href="#contact">
					Prendre rendez-vous <span>→</span>
				</a>
			</div>
			<form className="sunset-search">
				<div className="sunset-field">
					<label>Type de bien</label>
					<select>
						<option>Tous</option>
						<option>Appartement</option>
						<option>Villa</option>
						<option>Magasin</option>
						<option>Bureaux</option>
					</select>
				</div>
				<div className="sunset-field">
					<label>Transaction</label>
					<select>
						<option>Tous</option>
						<option>Achat</option>
						<option>Vente</option>
						<option>Location</option>
					</select>
				</div>
				<div className="sunset-field">
					<label>Quartier</label>
					<select>
						<option>Tanger</option>
						<option>Malabata</option>
						<option>Marina</option>
						<option>Cap Spartel</option>
						<option>Centre-ville</option>
						<option>Iberia</option>
						<option>Achakar</option>
					</select>
				</div>
				<div className="sunset-field">
					<label>Budget</label>
					<input inputMode="numeric" placeholder="Écrire votre budget" type="text" />
				</div>
				<a className="sunset-search-btn" href="/vente-appartement">
					<span>⌕</span>Rechercher
				</a>
			</form>
		</section>
		<section className="intro about-premium" id="apropos">
			<div className="about-premium__inner">
				<div className="about-premium__content">
					<span className="section-kicker">À propos</span>
					<h2>Une agence locale, une approche plus humaine et plus sélective.</h2>
					<p>Nectar immobilier accompagne les propriétaires, acquéreurs et locataires avec une méthode claire : estimation réaliste, présentation premium du bien, sélection ciblée des profils et suivi personnalisé jusqu’à la finalisation.</p>
					<p>Notre différence se voit dans le détail : des annonces soignées, des visites mieux préparées, une communication rapide et une vraie connaissance des quartiers de Tanger. Nous privilégions la qualité des biens et la confiance, plutôt que le volume.</p>
					<div aria-label="Chiffres clés Nectar immobilier" className="about-stats">
						<div className="about-stat">
							<strong>120+</strong>
							<span>biens vendus ou loués</span>
						</div>
						<div className="about-stat">
							<strong>22 ans</strong>
							<span>d’expérience terrain</span>
						</div>
						<div className="about-stat">
							<strong>100%</strong>
							<span>de satisfaction client</span>
						</div>
					</div>
				</div>
				<div aria-label="Bureau de l'agence Nectar immobilier" className="about-premium__visual">
					<img alt="Bureau de l'agence Nectar immobilier à Tanger" className="nectar-about-office-image" src="/assets/nectar-bureau.png" />
				</div>
			</div>
		</section>
		<HomeProcessSection />
		<section className="purple-pearl-section" id="purple-pearl">
			<div className="purple-pearl-inner">
				<span className="purple-pearl-kicker">Promotion immobilière</span>
				<div className="purple-pearl-content">
					<h2>Purple Pearl</h2>
					<p>Découvrez notre projet Purple Pearl : une promotion immobilière premium à Tanger, pensée pour l’investissement, la résidence principale et les clients qui recherchent un cadre élégant avec un accompagnement clair.</p>
					<a className="purple-pearl-btn" href="/purple-pearl">
						Demander les détails <span>→</span>
					</a>
				</div>
			</div>
		</section>
		<section className="guide-section" id="guide">
			<div className="guide-section__inner">
				<div className="guide-section__head">
					<span className="guide-section__kicker">Guide touristique</span>
					<div className="guide-section__title">
						<h2>À la découverte du patrimoine historique et culturel de Tanger</h2>
						<p>Cliquez sur le guide pour découvrir les monuments historiques et les musées de Tanger avec photos et descriptions courtes.</p>
						<a className="guide-cta" href="/guide-tanger">
							Voir le guide complet <span>→</span>
						</a>
					</div>
				</div>
				<div className="guide-cards">
					<GuideCard href="/guide-tanger#monuments" className="guide-card guide-card--cap" label="01 · Monuments" title="Cap Spartel, Kasbah & Médina" copy="Un parcours essentiel pour découvrir les lieux emblématiques de Tanger : vues, ruelles historiques, fortifications et patrimoine maritime." />
					<GuideCard href="/guide-tanger#musees" className="guide-card guide-card--medina" label="02 · Musées" title="Kasbah, Dar Niaba & Légation américaine" copy="Une sélection de musées pour comprendre l’histoire méditerranéenne, artistique et diplomatique de Tanger." />
					<GuideCard href="/guide-tanger#itineraires" className="guide-card guide-card--cafe" label="03 · Itinéraire" title="Balade culturelle à Tanger" copy="Une idée de parcours simple : médina, Kasbah, musée, Grand Socco puis coucher de soleil à Cap Spartel." />
				</div>
				<div className="guide-recommendations">
					<GuideRecommendation label="Monuments" title="Patrimoine historique" copy="Kasbah, Médina, Grand Socco, Petit Socco, Cap Spartel, Grottes d’Hercule et anciennes fortifications." />
					<GuideRecommendation label="Musées" title="Culture & mémoire" copy="Musée de la Kasbah, Dar Niaba, Légation américaine et centre d’interprétation des fortifications." />
					<GuideRecommendation label="Service Nectar" title="Guide personnalisé" copy="Pour nos clients, nous pouvons recommander des lieux selon le quartier, la durée du séjour et l’expérience recherchée." />
				</div>
			</div>
		</section>
		<section className="contact-photo-exact" id="contact">
			<div className="contact-photo-wrap">
				<div className="contact-photo-top">
					<span className="contact-photo-kicker">Contact</span>
					<div className="contact-photo-title">
						<h2>Contactez-nous</h2>
						<p>Vous souhaitez vendre, louer ou trouver un bien à Tanger ? Envoyez-nous votre demande, notre équipe vous répond rapidement avec un accompagnement clair et personnalisé.</p>
					</div>
				</div>
				<div className="contact-photo-body">
					<ContactForm />
					<aside className="contact-photo-rdv">
						<span>Coordonnées directes</span>
						<h3>Nous contacter</h3>
						<p>Appelez-nous, écrivez-nous ou prenez rendez-vous directement avec l’agence Nectar immobilier à Tanger.</p>
						<div className="contact-direct-card">
							<h4>Nectar immobilier</h4>
							<div className="contact-direct-item">
								<span>Adresse</span>
								<strong>{content.contact.address}</strong>
							</div>
							<div className="contact-direct-item">
								<span>Téléphone</span>
								<a href={`tel:+${content.contact.whatsapp_number}`}>{content.contact.phone_display}</a>
							</div>
							<div className="contact-direct-item">
								<span>Email</span>
								<a href={`mailto:${content.contact.email_display.split('/')[0].trim()}`}>{content.contact.email_display}</a>
							</div>
						</div>
					</aside>
				</div>
			</div>
		</section>
		<section className="testimonials-section" id="temoignages">
			<div className="nectar-section-inner">
				<div className="nectar-section-head">
					<span className="nectar-section-kicker">Recommandations clients</span>
					<div className="nectar-section-title">
						<h2>Ils nous ont fait confiance</h2>
						<p>Ces recommandations concernent les appartements Hilton et l’Apartment in City Center Tangier : séjours courts, couples, familles et groupes.</p>
					</div>
				</div>
				<div className="testimonials-grid hilton-reviews-grid">
					{[...content.testimonials, ...content.testimonials].map((testimonial, index) => (
						<TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
					))}
				</div>
			</div>
		</section>
		<LinkedFooter contact={content.contact} />
		<FloatingNewsletter />
	</>
);

const GuideCard = ({ href, className, label, title, copy }: { href: string; className: string; label: string; title: string; copy: string }) => (
	<a aria-label={title} className={className} href={href}>
		<div className="guide-card__content">
			<span>{label}</span>
			<h3>{title}</h3>
			<p>{copy}</p>
		</div>
	</a>
);

const GuideRecommendation = ({ label, title, copy }: { label: string; title: string; copy: string }) => (
	<div className="guide-rec">
		<span>{label}</span>
		<h3>{title}</h3>
		<p>{copy}</p>
	</div>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
	<article className={`testimonial-card hilton-review-card${testimonial.highlight_city_center ? ' city-center-review-card' : ''}`}>
		<div className="testimonial-stars">{testimonial.rating}</div>
		<blockquote>« {testimonial.quote} »</blockquote>
		<footer>
			<strong>{testimonial.client_name}</strong>
			<span>{testimonial.details}</span>
		</footer>
	</article>
);
