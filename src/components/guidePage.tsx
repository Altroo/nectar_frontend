import { LinkedFooter, MainHeader } from '@/components/common';
import type { GuidePlace, SiteContact } from '@/types/site';

export const GuidePage = ({ places, contact }: { places: GuidePlace[]; contact: SiteContact }) => {
	const monuments = places.filter((place) => place.section === 'monuments').sort((a, b) => a.sort_order - b.sort_order);
	const museums = places.filter((place) => place.section === 'musees').sort((a, b) => a.sort_order - b.sort_order);
	return (
		<>
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
			<GuideSection id="monuments" kicker="Monuments historiques" title="Les lieux emblématiques de Tanger" copy="Des points forts à recommander aux clients pour une première découverte de la ville." places={monuments} />
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

const GuideSection = ({ id, kicker, title, copy, places, alternate }: { id: string; kicker: string; title: string; copy: string; places: GuidePlace[]; alternate?: boolean }) => (
	<section className={`section${alternate ? ' alt' : ''}`} id={id}>
		<div className="inner">
			<div className="head">
				<span className="kicker">{kicker}</span>
				<div>
					<h2>{title}</h2>
					<p>{copy}</p>
				</div>
			</div>
			<div className="grid">
				{places.map((place) => (
					<article className="place-card" key={place.id}>
						<div className="place-photo" style={{ backgroundImage: `linear-gradient(180deg, rgba(47,32,23,.04), rgba(47,32,23,.28)), url('${place.image}')` }} />
						<div className="place-content">
							<h3>{place.title}</h3>
							<p>{place.description}</p>
						</div>
					</article>
				))}
			</div>
		</div>
	</section>
);
