'use client';

import { PurplePearlVisitForm } from '@/components/forms';
import { PurpleHeader, PurplePearlFooter, StyleBlock } from '@/components/common';
import { PurplePlans } from '@/components/purplePlans';
import { useTranslation } from '@/i18n/client';
import { translations } from '@/i18n/translations';
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
		max-width:none!important;
		width:100%!important;
	}
	#voir-projet .overview-grid--two .overview-item{
		min-height:132px;
		display:flex;
		flex-direction:column;
		justify-content:center;
	}
	#plans .floor-filter{
		display:grid!important;
		grid-template-columns:repeat(4,minmax(0,1fr))!important;
		gap:14px!important;
		align-items:stretch!important;
	}
	#plans .floor-btn{
		width:100%!important;
		min-height:58px!important;
		display:flex!important;
		align-items:center!important;
		justify-content:center!important;
		text-align:center!important;
	}
	@media(max-width:900px){
		#plans .floor-filter{
			grid-template-columns:repeat(2,minmax(0,1fr))!important;
		}
	}
	@media(max-width:760px){
		#voir-projet .overview-grid--two{
			grid-template-columns:1fr!important;
		}
		#plans .floor-filter{
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

export const PurplePearlPage = ({ plans, contact }: { plans: PurplePearlPlan[]; contact: SiteContact }) => {
	const { language, t } = useTranslation();
	const proximityWalk = translations[language].purple.proximityWalk.map(([label, value]) => [String(label), String(value)] as [string, string]);
	const proximityDrive = translations[language].purple.proximityDrive.map(([label, value]) => [String(label), String(value)] as [string, string]);

	return (
		<>
			<StyleBlock css={proximityHoverResetStyles} />
			<PurpleHeader />
			<main>
				<section className="hero" aria-label="Hero Purple Pearl">
					<div className="container">
						<div className="hero-content">
							<img className="hero-logo" src="/assets/purple-pearl-logo.png" alt="Logo Purple Pearl" />
							<p className="eyebrow">{t('purple.heroLabel')}</p>
							<h1>Purple Pearl</h1>
							<p>{t('purple.heroCopy')}</p>
							<div className="hero-actions">
								<a className="hero-btn" href="#voir-projet">
									{t('purple.viewProject')}
								</a>
								<a className="hero-btn secondary" href="#plans">
									{t('purple.viewPlans')}
								</a>
							</div>
						</div>
					</div>
				</section>
				<section className="page-section" id="voir-projet">
					<div className="container">
						<div className="section-header">
							<div className="section-number">01</div>
							<h2>{t('purple.description')}</h2>
						</div>
						<div className="intro-card">
							<p style={{ margin: 0, fontSize: 18, lineHeight: 1.9, color: 'var(--pp-muted)' }}>{t('purple.descriptionCopy')}</p>
							<div className="overview-grid overview-grid--two">
								<div className="overview-item stat-card">
									<strong>59 à 125,96 m²</strong>
									<span>{t('purple.surfaceLabel')}</span>
								</div>
								<div className="overview-item stat-card">
									<strong>2026</strong>
									<span>{t('purple.yearLabel')}</span>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="page-section" id="adresse" style={{ paddingTop: 0 }}>
					<div className="container">
						<div className="section-header">
							<div className="section-number">02</div>
							<h2>{t('purple.address')}</h2>
						</div>
						<div className="address-grid">
							<div className="address-item">
								<strong>{t('purple.address')}</strong>
								<p>{t('purple.addressCopy')}</p>
							</div>
							<div className="address-item">
								<strong>{t('purple.city')}</strong>
								<p>Tanger</p>
							</div>
						</div>
						<a className="map-btn" href="https://www.google.com/maps/search/Tanger+Maroc" target="_blank" rel="noopener">
							{t('purple.map')}
						</a>
					</div>
				</section>
				<section className="page-section" id="proximite" style={{ paddingTop: 0 }}>
					<div className="container">
						<div className="section-header">
							<div className="section-number">03</div>
							<h2>{t('purple.proximity')}</h2>
						</div>
						<div className="near-card-grid">
							<div className="info-card near-card">
								<NearColumn title={t('purple.walk')} items={proximityWalk} />
							</div>
							<div className="info-card near-card">
								<NearColumn title={t('purple.drive')} items={proximityDrive} />
							</div>
						</div>
					</div>
				</section>
				<section className="page-section" id="plans" style={{ paddingTop: 0 }}>
					<div className="container">
						<div className="section-header">
							<div className="section-number">04</div>
							<h2>{t('purple.plans')}</h2>
						</div>
						<PurplePlans plans={plans} />
					</div>
				</section>
				<section className="page-section" id="visite" style={{ paddingTop: 0 }}>
					<div className="container">
						<div className="section-header">
							<div className="section-number">05</div>
							<h2>{t('purple.visit')}</h2>
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
