'use client';

import { useState } from 'react';
import { useTranslation } from '@/i18n/client';
import { localizePurplePlan } from '@/i18n/translations';
import type { PurplePearlPlan } from '@/types/site';

const hiddenPlanKeys = new Set(['plan-rdc-haut-app-mezzanine', 'plans-etages-1-2-3-4', 'plan-1er-retrait', 'plan-2eme-retrait']);

export const PurplePlans = ({ plans }: { plans: PurplePearlPlan[] }) => {
	const { language, t } = useTranslation();
	const ordered = [...plans]
		.filter((plan) => !hiddenPlanKeys.has(plan.key))
		.sort((a, b) => a.sort_order - b.sort_order)
		.map((plan) => localizePurplePlan(language, plan));
	const [active, setActive] = useState(ordered[0]?.key ?? '');
	const activePlan = ordered.find((plan) => plan.key === active) ?? ordered[0];

	return (
		<>
			<div className="floor-filter" role="tablist" aria-label={t('purple.planFilterAria')}>
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
							{plan.image ? <PlanVersion title={t('purple.planLabels.architectural')} image={plan.image} alt={plan.alt_text || `${plan.title || plan.button_label} - ${t('purple.planLabels.architectural')}`} emptyLabel={t('purple.planLabels.pending')} /> : null}
							{plan.image_3d ? <PlanVersion title={plan.image_3d_title || t('purple.planLabels.plan3d')} image={plan.image_3d} alt={plan.image_3d_alt_text || `${plan.title || plan.button_label} - ${t('purple.planLabels.plan3d')}`} emptyLabel={t('purple.planLabels.pending')} /> : null}
							{plan.image_3d_secondary ? <PlanVersion title={plan.image_3d_secondary_title || t('purple.planLabels.secondary3d')} image={plan.image_3d_secondary} alt={plan.image_3d_secondary_alt_text || `${plan.title || plan.button_label} - ${t('purple.planLabels.secondary3d')}`} emptyLabel={t('purple.planLabels.pending')} /> : null}
							{!plan.image && !plan.image_3d && !plan.image_3d_secondary ? <PlanVersion title={t('purple.planLabels.pending')} image="" alt="" emptyLabel={t('purple.planLabels.pending')} /> : null}
						</div>
						{plan.title || plan.description ? (
							<figcaption>
								{plan.title ? <strong>{plan.title}</strong> : null}
								{plan.description ? <span>{plan.description}</span> : null}
							</figcaption>
						) : null}
					</figure>
				))}
			</div>
		</>
	);
};

const PlanVersion = ({ title, image, alt, emptyLabel }: { title: string; image: string; alt: string; emptyLabel: string }) => (
	<div className={`plan-version${image ? '' : ' plan-version--empty'}`}>
		<span>{title}</span>
		{image ? <img src={image} alt={alt} loading="lazy" decoding="async" /> : <p>{emptyLabel}</p>}
	</div>
);
