import { fireEvent, render, screen } from '@testing-library/react';
import { PurplePlans } from '@/components/pages/purplePearl/purplePlans';
import { fallbackPurplePearlPlans } from '@/data/fallbackContent';

jest.mock('@/contexts/languageContext', () => ({
	useTranslation: () => ({
		language: 'fr',
		t: (key: string) => key,
	}),
}));

describe('PurplePlans', () => {
	it('filters hidden plans and switches the active plan', () => {
		const visiblePlans = fallbackPurplePearlPlans.filter(
			(plan) => !['plan-rdc-haut-app-mezzanine', 'plans-etages-1-2-3-4', 'plan-1er-retrait', 'plan-2eme-retrait'].includes(plan.key),
		);
		render(<PurplePlans plans={fallbackPurplePearlPlans} />);
		const buttons = screen.getAllByRole('button');

		expect(buttons).toHaveLength(visiblePlans.length);
		expect(buttons[0]).toHaveClass('active');
		fireEvent.click(buttons[1]);
		expect(buttons[1]).toHaveClass('active');
	});

	it('renders an empty viewer when no plans are available', () => {
		const { container } = render(<PurplePlans plans={[]} />);

		expect(container.querySelectorAll('[data-plan-panel]')).toHaveLength(0);
	});
});
