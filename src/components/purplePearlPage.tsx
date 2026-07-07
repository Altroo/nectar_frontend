'use client';

import { PurplePearlVisitForm } from '@/components/forms';
import { PurpleHeader, PurplePearlFooter, StyleBlock } from '@/components/common';
import { PurplePlans } from '@/components/purplePlans';
import { useTranslation } from '@/i18n/client';
import { translations } from '@/i18n/translations';
import { purplePearlRedesignStyles } from '@/styles/purplePearlRedesignStyles';
import type { PurplePearlPlan, SiteContact } from '@/types/site';

export const PurplePearlPage = ({ plans, contact }: { plans: PurplePearlPlan[]; contact: SiteContact }) => {
	const { language, t } = useTranslation();
	const proximityWalk = translations[language].purple.proximityWalk.map(([label, value]) => [String(label), String(value)] as [string, string]);
	const proximityDrive = translations[language].purple.proximityDrive.map(([label, value]) => [String(label), String(value)] as [string, string]);
	const arrow = language === 'ar' ? '←' : '→';

	return (
		<>
			<PurpleHeader />
			<StyleBlock css={purplePearlRedesignStyles} />
			<main className="pp-redesign">
				<section className="pp-hero" aria-label="Hero Purple Pearl">
					<div className="pp-container pp-hero-grid">
						<div className="pp-hero-copy">
							<p className="pp-eyebrow">{t('purple.heroLabel')}</p>
							<h1 className="pp-hero-title">
								Purple
								<br />
								Pearl
							</h1>
							<p className="pp-hero-text">{t('purple.heroCopy')}</p>
							<div className="pp-actions">
								<a className="pp-btn pp-btn--primary" href="#voir-projet">
									{t('purple.viewProject')} <span aria-hidden="true">{arrow}</span>
								</a>
								<a className="pp-btn pp-btn--secondary" href="#plans">
									{t('purple.viewPlans')} <span aria-hidden="true">{arrow}</span>
								</a>
							</div>
						</div>
					</div>
				</section>
				<section className="pp-section pp-about-section" id="voir-projet">
					<div className="pp-container">
						<div className="pp-card pp-about-card">
							<div className="pp-card-copy">
								<p className="pp-section-kicker">{t('purple.description')}</p>
								<p>{t('purple.descriptionCopy')}</p>
							</div>
							<div className="pp-stats">
								<div className="pp-stat">
									<span aria-hidden="true">⌂</span>
									<strong>{t('purple.surfaceValue')}</strong>
									<small>{t('purple.surfaceLabel')}</small>
								</div>
								<div className="pp-stat">
									<span aria-hidden="true">◷</span>
									<strong>2026</strong>
									<small>{t('purple.yearLabel')}</small>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="pp-section pp-section--compact pp-location-section" id="adresse">
					<div className="pp-container pp-location-grid">
						<div className="pp-card pp-info-card">
							<p className="pp-section-kicker">{t('purple.address')}</p>
							<h2>{t('purple.addressPlace')}</h2>
							<p>{t('purple.addressCopy')}</p>
							<div className="pp-map-preview">
								<iframe loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Tanger%2C%20Maroc&output=embed" title={t('purple.map')} />
							</div>
							<a className="pp-map-btn" href="https://www.google.com/maps/search/Tanger+Maroc" target="_blank" rel="noopener">
								{t('purple.map')} <span aria-hidden="true">↗</span>
							</a>
						</div>
						<div className="pp-card pp-proximity" id="proximite">
							<p className="pp-section-kicker">{t('purple.proximity')}</p>
							<div className="pp-proximity-grid">
								<div className="pp-near-card">
									<NearColumn title={t('purple.walk')} items={proximityWalk} />
								</div>
								<div className="pp-near-card">
									<NearColumn title={t('purple.drive')} items={proximityDrive} />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="pp-section pp-section--compact" id="plans">
					<div className="pp-container">
						<h2 className="pp-title-line">{t('purple.plans')}</h2>
						<div className="pp-card pp-plans-card">
							<PurplePlans plans={plans} />
						</div>
					</div>
				</section>
				<section className="pp-section pp-section--compact" id="visite">
					<div className="pp-container">
						<h2 className="pp-title-line">{t('purple.visit')}</h2>
						<div className="pp-card pp-form-card">
							<PurplePearlVisitForm />
						</div>
					</div>
				</section>
			</main>
			<PurplePearlFooter contact={contact} />
		</>
	);
};

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
