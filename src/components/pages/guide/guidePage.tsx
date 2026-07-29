'use client';

import { LinkedFooter, MainHeader } from '@/components/layouts/siteLayout';
import { useTranslation } from '@/contexts/languageContext';
import { localizeGuidePlace } from '@/translations';
import type { GuidePlace, SiteContact } from '@/types/siteTypes';


export const GuidePage = ({ places, contact }: { places: GuidePlace[]; contact: SiteContact }) => {
	const { language, t } = useTranslation();
	const monuments = places
		.filter((place) => place.section === 'monuments')
		.sort((a, b) => a.sort_order - b.sort_order)
		.map((place) => localizeGuidePlace(language, place));
	const museums = places
		.filter((place) => place.section === 'musees')
		.sort((a, b) => a.sort_order - b.sort_order)
		.map((place) => localizeGuidePlace(language, place));
	return (
		<>
			<MainHeader />
			<section className="hero">
				<span>{t('guide.heroKicker')}</span>
				<h1>{t('guide.heroTitle')}</h1>
				<p>{t('guide.heroCopy')}</p>
				<div className="quick-nav">
					<a href="#monuments">{t('guide.monumentsNav')}</a>
					<a href="#musees">{t('guide.museumsNav')}</a>
					<a href="#itineraires">{t('guide.itineraryNav')}</a>
				</div>
			</section>
			<GuideSection id="monuments" kicker={t('guide.monumentsKicker')} title={t('guide.monumentsTitle')} places={monuments} />
			<GuideSection id="musees" kicker={t('guide.museumsKicker')} title={t('guide.museumsTitle')} copy={t('guide.museumsCopy')} places={museums} alternate />
			<section className="section" id="itineraires">
				<div className="inner">
					<div className="itinerary">
						<h3>{t('guide.itineraryTitle')}</h3>
						<p>{t('guide.itineraryCopy')}</p>
					</div>
				</div>
			</section>
			<LinkedFooter contact={contact} />
		</>
	);
};

const GuideSection = ({ id, kicker, title, copy, places, alternate }: { id: string; kicker: string; title: string; copy?: string; places: GuidePlace[]; alternate?: boolean }) => {
	const featuredPlace = places[0];
	const remainingPlaces = places.slice(1);

	return (
		<section className={`section${alternate ? ' alt' : ''}`} id={id}>
			<div className="inner">
				<div className="head">
					<span className="kicker">{kicker}</span>
					<div>
						<h2>{title}</h2>
						{copy ? <p>{copy}</p> : null}
					</div>
				</div>
				{featuredPlace ? <GuideFeature place={featuredPlace} /> : null}
				<div className="grid">
					{remainingPlaces.map((place) => (
						<GuidePlaceCard place={place} key={place.id} />
					))}
				</div>
			</div>
		</section>
	);
};

const GuideFeature = ({ place }: { place: GuidePlace }) => (
	<article className="guide-feature">
		<div className="guide-feature__photo" style={{ backgroundImage: `linear-gradient(180deg, rgba(47,32,23,.02), rgba(47,32,23,.16)), url('${place.image}')` }} />
		<div className="guide-feature__content">
			<h3>{place.title}</h3>
			<p>{place.description}</p>
		</div>
	</article>
);

const GuidePlaceCard = ({ place }: { place: GuidePlace }) => (
	<article className="place-card">
		<div className="place-photo" style={{ backgroundImage: `linear-gradient(180deg, rgba(47,32,23,.04), rgba(47,32,23,.28)), url('${place.image}')` }} />
		<div className="place-content">
			<h3>{place.title}</h3>
			<p>{place.description}</p>
		</div>
	</article>
);
