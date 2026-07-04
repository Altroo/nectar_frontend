import { LinkedFooter, MainHeader, StyleBlock } from '@/components/common';
import type { GuidePlace, SiteContact } from '@/types/site';

const guideFeatureStyles = `
.guide-feature{
	margin-bottom:34px;
	background:#fff;
	border:1px solid rgba(73,52,37,.12);
	box-shadow:0 20px 54px rgba(47,32,23,.08);
	overflow:hidden;
}
.guide-feature__photo{
	min-height:430px;
	background-size:cover;
	background-position:center;
	background-color:#2F2118;
}
.guide-feature__content{
	padding:28px 32px 32px;
}
.guide-feature__content h3{
	margin:0 0 12px;
	font-family:Georgia,serif;
	font-size:34px;
	line-height:1;
	font-weight:400;
	letter-spacing:-.035em;
	color:#493425;
}
.guide-feature__content p{
	margin:0;
	max-width:820px;
	color:#8D7660;
	line-height:1.65;
	font-size:16px;
}
@media(max-width:650px){
	.guide-feature__photo{
		min-height:280px;
	}
	.guide-feature__content{
		padding:24px;
	}
	.guide-feature__content h3{
		font-size:30px;
	}
}
`;

export const GuidePage = ({ places, contact }: { places: GuidePlace[]; contact: SiteContact }) => {
	const monuments = places.filter((place) => place.section === 'monuments').sort((a, b) => a.sort_order - b.sort_order);
	const museums = places.filter((place) => place.section === 'musees').sort((a, b) => a.sort_order - b.sort_order);
	return (
		<>
			<StyleBlock css={guideFeatureStyles} />
			<MainHeader />
			<section className="hero">
				<span>Guide touristique</span>
				<h1>À la découverte du patrimoine historique et culturel de Tanger</h1>
				<p>Une sélection simple des monuments historiques et des musées à citer dans le guide Nectar immobilier, avec photos et descriptions courtes.</p>
				<div className="quick-nav">
					<a href="#monuments">Monuments historiques</a>
					<a href="#musees">Musées</a>
					<a href="#itineraires">Idée de parcours</a>
				</div>
			</section>
			<GuideSection id="monuments" kicker="Monuments historiques" title="Les lieux emblématiques de Tanger" places={monuments} />
			<GuideSection id="musees" kicker="Musées" title="Culture, mémoire et art" copy="Des adresses culturelles pour comprendre l’histoire, l’identité méditerranéenne et le rôle international de Tanger." places={museums} alternate />
			<section className="section" id="itineraires">
				<div className="inner">
					<div className="itinerary">
						<h3>Idée de parcours</h3>
						<p>Commencez par le Grand Socco, entrez dans la Médina, montez vers la Kasbah et le Palais Dar El Makhzen, puis terminez la journée par Cap Spartel et les Grottes d’Hercule pour le coucher du soleil.</p>
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
