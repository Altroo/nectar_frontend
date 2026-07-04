'use client';

import { LinkedFooter, MainHeader } from '@/components/common';
import { useTranslation } from '@/i18n/client';
import { localizeEventIdea } from '@/i18n/translations';
import type { EventIdea, SiteContact } from '@/types/site';

export const EventPage = ({ ideas, contact }: { ideas: EventIdea[]; contact: SiteContact }) => {
	const { language, t } = useTranslation();
	const localizedIdeas = [...ideas].sort((a, b) => a.sort_order - b.sort_order).map((idea) => localizeEventIdea(language, idea));

	return (
		<>
			<MainHeader />
			<section className="hero">
				<div className="hero-inner">
					<span className="kicker">{t('event.kicker')}</span>
					<h1>{t('event.title')}</h1>
					<p>{t('event.copy')}</p>
				</div>
			</section>
			<section className="section">
				<div className="inner">
					<div className="head">
						<span className="kicker">{t('event.ideasKicker')}</span>
						<div>
							<h2>{t('event.ideasTitle')}</h2>
							<p>{t('event.ideasCopy')}</p>
						</div>
					</div>
					<div className="grid">
						{localizedIdeas.map((idea) => (
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
							<span className="kicker">{t('event.customKicker')}</span>
							<h3>{t('event.customTitle')}</h3>
						</div>
						<div>
							<p>{t('event.customCopy')}</p>
							<a href="/#contact">{t('event.customCta')}</a>
						</div>
					</div>
					<div className="process">
						{[0, 1, 2].map((index) => (
							<div key={index}>
								<strong>{String(index + 1).padStart(2, '0')}</strong>
								<p>{t(`event.steps.${index}`)}</p>
							</div>
						))}
					</div>
				</div>
			</section>
			<LinkedFooter contact={contact} />
		</>
	);
};
