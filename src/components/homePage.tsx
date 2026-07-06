'use client';

import type { CSSProperties } from 'react';
import { ContactForm, FloatingNewsletter } from '@/components/forms';
import { LinkedFooter, MainHeader, StyleBlock } from '@/components/common';
import { HomeProcessSection } from '@/components/homeProcess';
import { useTranslation } from '@/i18n/client';
import { localizeContact, localizeGuidePlace, localizeTestimonial } from '@/i18n/translations';
import type { GuidePlace, SiteContent, Testimonial } from '@/types/site';

const homepageGuideCardStyles = `
.sunset-hero{
	background:#171513 !important;
	overflow:visible !important;
}
.sunset-hero-media{
	position:absolute;
	inset:0;
	z-index:0;
	pointer-events:none;
	overflow:hidden;
}
.sunset-hero__slide{
	position:absolute;
	inset:0;
	background-image:linear-gradient(90deg,rgba(22,22,22,.76) 0%,rgba(22,22,22,.34) 48%,rgba(22,22,22,.12) 100%),var(--hero-image);
	background-position:center center;
	background-size:cover;
	background-repeat:no-repeat;
	opacity:0;
	transform:scale(1.025);
	animation:nectarHeroSlideB 14s ease-in-out infinite;
	will-change:opacity, transform;
}
.sunset-hero__slide:first-child{
	animation-name:nectarHeroSlideA;
}
@keyframes nectarHeroSlideA{
	0%,43%{opacity:1;transform:scale(1.025)}
	50%,93%{opacity:0;transform:scale(1)}
	100%{opacity:1;transform:scale(1.025)}
}
@keyframes nectarHeroSlideB{
	0%,43%{opacity:0;transform:scale(1)}
	50%,93%{opacity:1;transform:scale(1.025)}
	100%{opacity:0;transform:scale(1)}
}
@media (prefers-reduced-motion: reduce){
	.sunset-hero__slide{
		animation:none !important;
		transform:none !important;
	}
	.sunset-hero__slide:first-child{
		opacity:1;
	}
}
.guide-card--data::before{
	background-image:var(--guide-card-image) !important;
	background-position:var(--guide-card-position, center) !important;
}
`;

const contactEmail = 'contact@nectar.ma';

export const HomePage = ({ content }: { content: SiteContent }) => {
	const { language, t } = useTranslation();
	const guidePlaces = [...content.guidePlaces].sort((a, b) => a.sort_order - b.sort_order);
	const featuredMonument = guidePlaces.find((place) => place.section === 'monuments');
	const featuredMuseum = guidePlaces.find((place) => place.section === 'musees');
	const localizedFeaturedMonument = featuredMonument ? localizeGuidePlace(language, featuredMonument) : undefined;
	const localizedFeaturedMuseum = featuredMuseum ? localizeGuidePlace(language, featuredMuseum) : undefined;
	const contact = localizeContact(language, content.contact);
	const testimonials = content.testimonials.map((testimonial) => localizeTestimonial(language, testimonial));

	return (
	<>
		<StyleBlock css={homepageGuideCardStyles} />
		<MainHeader />
		<section className="sunset-hero" id="agence">
			<div aria-hidden="true" className="sunset-hero-media">
				<span className="sunset-hero__slide" style={{ '--hero-image': "url('/hero-tanger-sunset.png')" } as CSSProperties} />
				<span className="sunset-hero__slide" style={{ '--hero-image': "url('/assets/hero-tanger-drone-02.jpg')" } as CSSProperties} />
			</div>
			<div className="sunset-content">
				<p className="sunset-kicker">{t('home.heroKicker')}</p>
				<h1>{t('home.heroTitle')}</h1>
				<div className="sunset-line" />
				<p className="sunset-subtitle">{t('home.heroSubtitle')}</p>
				<a className="sunset-main-btn" href="#contact">
					{t('home.appointment')} <span>→</span>
				</a>
			</div>
			<form className="sunset-search">
				<div className="sunset-field">
					<label>{t('home.searchType')}</label>
					<select>
						<option>{t('home.all')}</option>
						<option>{t('nav.apartment')}</option>
						<option>{t('home.villa')}</option>
						<option>{t('home.shop')}</option>
						<option>{t('home.offices')}</option>
					</select>
				</div>
				<div className="sunset-field">
					<label>{t('home.searchTransaction')}</label>
					<select>
						<option>{t('home.all')}</option>
						<option>{t('home.buy')}</option>
						<option>{t('home.sale')}</option>
						<option>{t('home.rent')}</option>
					</select>
				</div>
				<div className="sunset-field">
					<label>{t('home.searchDistrict')}</label>
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
					<label>{t('home.searchBudget')}</label>
					<input dir="ltr" inputMode="numeric" placeholder={t('home.searchPlaceholder')} type="text" />
				</div>
				<a className="sunset-search-btn" href="/vente-appartement">
					<span>⌕</span>{t('home.searchButton')}
				</a>
			</form>
		</section>
		<section className="intro about-premium" id="apropos">
			<div className="about-premium__inner">
				<div className="about-premium__content">
					<span className="section-kicker">{t('home.aboutKicker')}</span>
					<h2>{t('home.aboutTitle')}</h2>
					<p>{t('home.aboutCopy1')}</p>
					<p>{t('home.aboutCopy2')}</p>
					<div aria-label={t('home.statsAria')} className="about-stats">
						<div className="about-stat">
							<strong dir="ltr">120+</strong>
							<span>{t('home.statSold')}</span>
						</div>
						<div className="about-stat">
							<strong dir="ltr">22</strong>
							<span>{t('home.statExperience')}</span>
						</div>
						<div className="about-stat">
							<strong dir="ltr">100%</strong>
							<span>{t('home.statSatisfaction')}</span>
						</div>
					</div>
				</div>
				<div aria-label={t('home.aboutImageAria')} className="about-premium__visual">
					<img alt={t('home.aboutImageAlt')} className="nectar-about-office-image" src="/assets/nectar-residence.jpg" />
				</div>
			</div>
		</section>
		<HomeProcessSection />
		<section className="purple-pearl-section" id="purple-pearl">
			<div className="purple-pearl-inner">
				<span className="purple-pearl-kicker">{t('home.purpleKicker')}</span>
				<div className="purple-pearl-content">
					<h2>Purple Pearl</h2>
					<p>{t('home.purpleCopy')}</p>
					<a className="purple-pearl-btn" href="/purple-pearl">
						{t('home.purpleCta')} <span>→</span>
					</a>
				</div>
			</div>
		</section>
		<section className="guide-section" id="guide">
			<div className="guide-section__inner">
				<div className="guide-section__head">
					<span className="guide-section__kicker">{t('home.guideKicker')}</span>
					<div className="guide-section__title">
						<h2>{t('home.guideTitle')}</h2>
						<p>{t('home.guideCopy')}</p>
						<a className="guide-cta" href="/guide-tanger">
							{t('home.guideCta')} <span>→</span>
						</a>
					</div>
				</div>
				<div className="guide-cards">
					<GuideCard href="/guide-tanger#monuments" className={getGuideCardClassName('guide-card guide-card--cap', featuredMonument)} label={`01 · ${t('home.recMonumentsLabel')}`} title={localizedFeaturedMonument?.title ?? t('home.recMonumentsTitle')} copy={localizedFeaturedMonument?.description ?? t('home.recMonumentsCopy')} image={featuredMonument?.image} imagePosition="right center" />
					<GuideCard href="/guide-tanger#musees" className={getGuideCardClassName('guide-card guide-card--medina', featuredMuseum)} label={`02 · ${t('home.recMuseumsLabel')}`} title={localizedFeaturedMuseum?.title ?? t('home.recMuseumsTitle')} copy={localizedFeaturedMuseum?.description ?? t('home.recMuseumsCopy')} image={featuredMuseum?.image} />
					<GuideCard href="/guide-tanger#itineraires" className="guide-card guide-card--cafe" label={`03 · ${t('guide.itineraryNav')}`} title={t('home.guideItineraryTitle')} copy={t('home.guideItineraryCopy')} />
				</div>
				<div className="guide-recommendations">
					<GuideRecommendation label={t('home.recMonumentsLabel')} title={t('home.recMonumentsTitle')} copy={t('home.recMonumentsCopy')} />
					<GuideRecommendation label={t('home.recMuseumsLabel')} title={t('home.recMuseumsTitle')} copy={t('home.recMuseumsCopy')} />
					<GuideRecommendation label={t('home.recServiceLabel')} title={t('home.recServiceTitle')} copy={t('home.recServiceCopy')} />
				</div>
			</div>
		</section>
		<section className="contact-photo-exact" id="contact">
			<div className="contact-photo-wrap">
				<div className="contact-photo-top">
					<span className="contact-photo-kicker">{t('home.contactKicker')}</span>
					<div className="contact-photo-title">
						<h2>{t('home.contactTitle')}</h2>
						<p>{t('home.contactCopy')}</p>
					</div>
				</div>
				<div className="contact-photo-body">
					<ContactForm />
					<aside className="contact-photo-rdv">
						<span>{t('home.directKicker')}</span>
						<h3>{t('home.directTitle')}</h3>
						<p>{t('home.directCopy')}</p>
						<div className="contact-direct-card">
							<h4>Nectar immobilière</h4>
							<div className="contact-direct-item">
								<span>{t('home.address')}</span>
								<strong>{contact.address}</strong>
							</div>
							<div className="contact-direct-item">
								<span>{t('home.phone')}</span>
								<a dir="ltr" href={`tel:+${contact.whatsapp_number}`}>{contact.phone_display}</a>
							</div>
							<div className="contact-direct-item">
								<span>{t('home.email')}</span>
								<a href={`mailto:${contactEmail}`}>{contactEmail}</a>
							</div>
						</div>
					</aside>
				</div>
			</div>
		</section>
		<section className="testimonials-section" id="temoignages">
			<div className="nectar-section-inner">
				<div className="nectar-section-head">
					<span className="nectar-section-kicker">{t('home.testimonialsKicker')}</span>
					<div className="nectar-section-title">
						<h2>{t('home.testimonialsTitle')}</h2>
						<p>{t('home.testimonialsCopy')}</p>
					</div>
				</div>
				<div className="testimonials-grid hilton-reviews-grid">
					{[...testimonials, ...testimonials].map((testimonial, index) => (
						<TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
					))}
				</div>
			</div>
		</section>
		<LinkedFooter contact={content.contact} />
		<FloatingNewsletter />
	</>
	);
};

const getGuideCardClassName = (baseClassName: string, place?: GuidePlace) => (place?.image ? `${baseClassName} guide-card--data` : baseClassName);

const getGuideCardStyle = (image?: string, imagePosition?: string): CSSProperties | undefined =>
	image ? ({ '--guide-card-image': `url(${JSON.stringify(image)})`, '--guide-card-position': imagePosition } as CSSProperties) : undefined;

const GuideCard = ({ href, className, label, title, copy, image, imagePosition }: { href: string; className: string; label: string; title: string; copy: string; image?: string; imagePosition?: string }) => (
	<a aria-label={title} className={className} href={href} style={getGuideCardStyle(image, imagePosition)}>
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
