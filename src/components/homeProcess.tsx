'use client';

import { useRef, useState } from 'react';
import { useTranslation } from '@/i18n/client';

type ProcessPanelKey = 'vente' | 'location';

type ProcessStepItem = {
	number: string;
	title: string;
	copy: string;
};

const processOrder: ProcessPanelKey[] = ['vente', 'location'];

export const HomeProcessSection = () => {
	const [activePanel, setActivePanel] = useState<ProcessPanelKey>('vente');
	const processStepRefs = useRef<Record<ProcessPanelKey, HTMLDivElement | null>>({
		vente: null,
		location: null,
	});
	const { t } = useTranslation();
	const processPanels: Record<ProcessPanelKey, { label: string; tabLabel: string; copy: string; ariaLabel: string; steps: ProcessStepItem[] }> = {
		vente: {
			label: t('process.vente.label'),
			tabLabel: t('process.vente.tab'),
			copy: t('process.vente.copy'),
			ariaLabel: t('process.vente.aria'),
			steps: [0, 1, 2, 3].map((index) => ({
				number: `0${index + 1}`,
				title: t(`process.vente.steps.${index}.0`),
				copy: t(`process.vente.steps.${index}.1`),
			})),
		},
		location: {
			label: t('process.location.label'),
			tabLabel: t('process.location.tab'),
			copy: t('process.location.copy'),
			ariaLabel: t('process.location.aria'),
			steps: [0, 1, 2, 3].map((index) => ({
				number: `0${index + 1}`,
				title: t(`process.location.steps.${index}.0`),
				copy: t(`process.location.steps.${index}.1`),
			})),
		},
	};
	const scrollProcessSteps = (key: ProcessPanelKey, direction: 'previous' | 'next') => {
		const steps = processStepRefs.current[key];
		const firstStep = steps?.querySelector<HTMLElement>('.process-step');

		if (!steps) {
			return;
		}

		const distance = (firstStep?.getBoundingClientRect().width ?? steps.clientWidth * 0.84) + 16;
		steps.scrollBy({
			behavior: 'smooth',
			left: (direction === 'next' ? 1 : -1) * distance,
		});
	};

	return (
		<section className="process-section process-animated process-filtered is-visible" id="processus">
			<div className="nectar-section-inner">
				<div className="nectar-section-head">
					<span className="nectar-section-kicker">{t('process.kicker')}</span>
					<div className="nectar-section-title">
						<h2>{t('process.title')}</h2>
						<p>{t('process.copy')}</p>
					</div>
				</div>
				<div aria-label={t('process.filterAria')} className="process-tabs" role="tablist">
					{processOrder.map((key) => {
						const isActive = activePanel === key;
						return (
							<button
								aria-controls={`process-panel-${key}`}
								aria-selected={isActive}
								className={`process-tab${isActive ? ' is-active' : ''}`}
								id={`process-tab-${key}`}
								key={key}
								role="tab"
								type="button"
								onClick={() => setActivePanel(key)}
							>
								{processPanels[key].tabLabel}
							</button>
						);
					})}
				</div>
				{processOrder.map((key) => {
					const panel = processPanels[key];
					const isActive = activePanel === key;
					return (
						<div
							aria-labelledby={`process-tab-${key}`}
							className={`process-panel${isActive ? ' is-active' : ''}`}
							id={`process-panel-${key}`}
							key={key}
							role="tabpanel"
						>
							<div className="process-panel-head">
								<span>{panel.label}</span>
								<p>{panel.copy}</p>
							</div>
							<div aria-label={panel.ariaLabel} className="process-mobile-controls">
								<button aria-label={t('listing.previous')} type="button" onClick={() => scrollProcessSteps(key, 'previous')}>
									<svg aria-hidden="true" viewBox="0 0 24 24">
										<path d="m15 18-6-6 6-6" />
									</svg>
								</button>
								<button aria-label={t('listing.next')} type="button" onClick={() => scrollProcessSteps(key, 'next')}>
									<svg aria-hidden="true" viewBox="0 0 24 24">
										<path d="m9 18 6-6-6-6" />
									</svg>
								</button>
							</div>
							<div
								aria-label={panel.ariaLabel}
								className="process-steps"
								ref={(element) => {
									processStepRefs.current[key] = element;
								}}
							>
								{panel.steps.map((step) => (
									<ProcessStep key={`${key}-${step.number}`} step={step} />
								))}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

const ProcessStep = ({ step }: { step: ProcessStepItem }) => (
	<article className="process-step">
		<span className="process-step__number">{step.number}</span>
		<h3>{step.title}</h3>
		<p>{step.copy}</p>
	</article>
);
