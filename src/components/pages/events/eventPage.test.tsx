import { render, screen } from '@testing-library/react';
import { EventPage } from '@/components/pages/events/eventPage';
import { fallbackContent, fallbackEventIdeas } from '@/data/fallbackContent';

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

describe('EventPage', () => {
	it('sorts and renders event ideas with their steps', () => {
		render(<EventPage ideas={[fallbackEventIdeas[2], fallbackEventIdeas[0]]} contact={fallbackContent.contact} />);

		expect(screen.getByText(fallbackEventIdeas[0].title)).toBeInTheDocument();
		expect(screen.getByText(fallbackEventIdeas[0].bullet_points[0])).toBeInTheDocument();
		expect(screen.getByText('event.steps.0')).toBeInTheDocument();
	});
});
