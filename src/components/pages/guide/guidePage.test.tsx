import { render, screen } from '@testing-library/react';
import { GuidePage } from '@/components/pages/guide/guidePage';
import { fallbackContent, fallbackGuidePlaces } from '@/data/fallbackContent';

jest.mock('@/components/layouts/siteLayout', () => ({
	MainHeader: () => <header>Header</header>,
	LinkedFooter: () => <footer>Footer</footer>,
}));

jest.mock('@/contexts/languageContext', () => ({
	useTranslation: () => ({
		language: 'fr',
		t: (key: string) => key,
	}),
}));

describe('GuidePage', () => {
	it('separates monuments and museums and sorts each section', () => {
		const places = [fallbackGuidePlaces[2], fallbackGuidePlaces[0], fallbackGuidePlaces[8], fallbackGuidePlaces[7]];
		const { container } = render(<GuidePage places={places} contact={fallbackContent.contact} />);

		expect(container.querySelector('#monuments')).toBeInTheDocument();
		expect(container.querySelector('#musees')).toBeInTheDocument();
		expect(screen.getByText(fallbackGuidePlaces[0].title)).toBeInTheDocument();
		expect(screen.getByText(fallbackGuidePlaces[7].title)).toBeInTheDocument();
	});

	it('renders empty guide sections safely', () => {
		const { container } = render(<GuidePage places={[]} contact={fallbackContent.contact} />);

		expect(container.querySelectorAll('.guide-feature')).toHaveLength(0);
	});
});
