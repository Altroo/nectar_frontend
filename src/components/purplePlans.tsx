'use client';

import { useState } from 'react';
import type { PurplePearlPlan } from '@/types/site';

export const PurplePlans = ({ plans }: { plans: PurplePearlPlan[] }) => {
	const ordered = [...plans].sort((a, b) => a.sort_order - b.sort_order);
	const [active, setActive] = useState(ordered[0]?.key ?? '');
	const activePlan = ordered.find((plan) => plan.key === active) ?? ordered[0];

	return (
		<>
			<div className="floor-filter" role="tablist" aria-label="Filtre des plans par niveau">
				{ordered.map((plan) => (
					<button className={`floor-btn${plan.key === activePlan?.key ? ' active' : ''}`} type="button" key={plan.key} onClick={() => setActive(plan.key)}>
						{plan.button_label}
					</button>
				))}
			</div>
			<div className="floor-plan-viewer">
				{ordered.map((plan) => (
					<figure className={`floor-plan-panel${plan.key === activePlan?.key ? ' active' : ''}`} data-plan-panel={plan.key} key={plan.key}>
						<div className="plan-version-grid">
							<PlanVersion title="Plan architectural" image={plan.image} alt={plan.alt_text || `${plan.title} - Plan architectural`} />
							<PlanVersion title="Plan 3D" image={plan.image_3d} alt={plan.image_3d_alt_text || `${plan.title} - Plan 3D`} />
						</div>
						<figcaption>
							<strong>{plan.title}</strong>
							<span>{plan.description}</span>
						</figcaption>
					</figure>
				))}
			</div>
		</>
	);
};

const PlanVersion = ({ title, image, alt }: { title: string; image: string; alt: string }) => (
	<div className={`plan-version${image ? '' : ' plan-version--empty'}`}>
		<span>{title}</span>
		{image ? <img src={image} alt={alt} loading="lazy" decoding="async" /> : <p>En attente</p>}
	</div>
);
