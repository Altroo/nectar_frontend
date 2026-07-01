'use client';

import { useState } from 'react';

type ProcessPanelKey = 'vente' | 'location';

type ProcessStepItem = {
	number: string;
	title: string;
	copy: string;
};

const processPanels: Record<ProcessPanelKey, { label: string; tabLabel: string; copy: string; ariaLabel: string; steps: ProcessStepItem[] }> = {
	vente: {
		label: 'Vente',
		tabLabel: 'Procédure vente',
		copy: 'Une méthode pensée pour valoriser le bien, attirer les bons acheteurs et sécuriser chaque étape jusqu’à la signature.',
		ariaLabel: 'Procédure vente avec Nectar immobilier',
		steps: [
			{
				number: '01',
				title: 'Estimation & stratégie',
				copy: 'Nous analysons le bien, son emplacement, sa surface et le marché de Tanger pour définir un prix cohérent et une stratégie de vente claire.',
			},
			{
				number: '02',
				title: 'Mise en valeur',
				copy: 'Nous préparons une présentation premium : photos, description, points forts, diffusion ciblée et argumentaire adapté aux acheteurs.',
			},
			{
				number: '03',
				title: 'Visites qualifiées',
				copy: 'Nous sélectionnons les profils sérieux, organisons les visites et répondons aux questions essentielles pour accélérer la décision.',
			},
			{
				number: '04',
				title: 'Négociation & signature',
				copy: 'Nous accompagnons l’offre, la négociation, les documents et le suivi jusqu’à la finalisation de la vente en toute transparence.',
			},
		],
	},
	location: {
		label: 'Location',
		tabLabel: 'Procédure location',
		copy: 'Un parcours rapide et structuré pour trouver le bon locataire ou le bon logement, avec des conditions claires dès le départ.',
		ariaLabel: 'Procédure location avec Nectar immobilier',
		steps: [
			{
				number: '01',
				title: 'Besoin & critères',
				copy: 'Nous définissons le type de bien, le quartier, le budget, la durée de location et les priorités pour cadrer précisément la recherche.',
			},
			{
				number: '02',
				title: 'Sélection & visites',
				copy: 'Nous proposons des biens adaptés ou des candidats qualifiés, puis organisons les visites avec toutes les informations nécessaires.',
			},
			{
				number: '03',
				title: 'Dossier & conditions',
				copy: 'Nous vérifions les informations clés, clarifions le loyer, la caution, les charges, les dates et les conditions avant engagement.',
			},
			{
				number: '04',
				title: 'Contrat & remise des clés',
				copy: 'Nous accompagnons la préparation du contrat, l’état des lieux, la remise des clés et le suivi pour une installation sereine.',
			},
		],
	},
};

const processOrder: ProcessPanelKey[] = ['vente', 'location'];

export const HomeProcessSection = () => {
	const [activePanel, setActivePanel] = useState<ProcessPanelKey>('vente');

	return (
		<section className="process-section process-animated process-filtered is-visible" id="processus">
			<div className="nectar-section-inner">
				<div className="nectar-section-head">
					<span className="nectar-section-kicker">Notre processus</span>
					<div className="nectar-section-title">
						<h2>Un accompagnement clair selon votre projet immobilier.</h2>
						<p>Sélectionnez votre besoin pour découvrir la procédure dédiée : vente ou location, avec un suivi simple, sécurisé et transparent.</p>
					</div>
				</div>
				<div aria-label="Filtrer la procédure" className="process-tabs" role="tablist">
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
							<div aria-label={panel.ariaLabel} className="process-steps">
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
