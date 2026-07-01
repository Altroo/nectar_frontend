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
						<img src={plan.image} alt={plan.alt_text || plan.title} loading="lazy" />
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
