import { LinkedFooter, MainHeader } from '@/components/common';
import type { EventIdea, SiteContact } from '@/types/site';

export const EventPage = ({ ideas, contact }: { ideas: EventIdea[]; contact: SiteContact }) => (
	<>
		<MainHeader />
		<section className="hero">
			<div className="hero-inner">
				<span className="kicker">Événements privés</span>
				<h1>Décorations d’appartement à Tanger</h1>
				<p>Des mises en scène élégantes pour transformer un appartement en moment inoubliable : anniversaire, surprise romantique, demande, bride to be ou dîner privé.</p>
			</div>
		</section>
		<section className="section">
			<div className="inner">
				<div className="head">
					<span className="kicker">Nos idées</span>
					<div>
						<h2>Des ambiances personnalisées, prêtes à vivre.</h2>
						<p>Chaque décoration est pensée selon le profil du client, le type de séjour et l’effet recherché : émotion, surprise, photo souvenir et confort premium.</p>
					</div>
				</div>
				<div className="grid">
					{ideas
						.sort((a, b) => a.sort_order - b.sort_order)
						.map((idea) => (
							<article className="event-card" key={idea.id}>
								<div className="event-photo" style={{ backgroundImage: `url('${idea.image}')` }} />
								<div className="event-content">
									<span>{idea.category}</span>
									<h3>{idea.title}</h3>
									<p>{idea.description}</p>
									<ul className="event-list">
										{idea.bullet_points.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</div>
							</article>
						))}
				</div>
				<div className="cta-band">
					<div>
						<span className="kicker">Sur mesure</span>
						<h3>Une idée spéciale ? Nous créons l’ambiance.</h3>
					</div>
					<div>
						<p>Pour un anniversaire, une surprise amoureuse, une demande, un séjour famille ou un week-end entre amies, Nectar immobilier peut préparer une décoration adaptée à l’appartement et au budget.</p>
						<a href="/#contact">Demander une décoration</a>
					</div>
				</div>
				<div className="process">
					<div>
						<strong>01</strong>
						<p>Choix du thème, couleurs, message et date d’arrivée.</p>
					</div>
					<div>
						<strong>02</strong>
						<p>Préparation discrète de l’appartement avant l’arrivée du client.</p>
					</div>
					<div>
						<strong>03</strong>
						<p>Décoration prête, photos possibles et coordination jusqu’à la remise des clés.</p>
					</div>
				</div>
			</div>
		</section>
		<LinkedFooter contact={contact} />
	</>
);
