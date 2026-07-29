import { fireEvent, render, screen } from '@testing-library/react';
import { HomeProcessSection } from '@/components/pages/home/homeProcess';

jest.mock('@/contexts/languageContext', () => ({
	useTranslation: () => ({
		t: (key: string) => key,
	}),
}));

describe('HomeProcessSection', () => {
	it('switches between sale and rental process panels', () => {
		render(<HomeProcessSection />);
		const tabs = screen.getAllByRole('tab');

		expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
		fireEvent.click(tabs[1]);
		expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
		expect(screen.getByText('process.location.steps.0.0')).toBeInTheDocument();
	});

	it('scrolls process steps with the mobile controls', () => {
		const scrollBy = jest.fn();
		Object.defineProperty(HTMLElement.prototype, 'scrollBy', { configurable: true, value: scrollBy });
		render(<HomeProcessSection />);

		fireEvent.click(screen.getAllByRole('button', { name: 'listing.next' })[0]);

		expect(scrollBy).toHaveBeenCalledWith(expect.objectContaining({ behavior: 'smooth' }));
	});
});
