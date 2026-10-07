import { StrictMode, type ReactNode } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import GoogleAnalytics from './googleAnalytics';

let mockPathname = '/';
let mockSearchParams = new URLSearchParams();

jest.mock('next/navigation', () => ({
	usePathname: () => mockPathname,
	useSearchParams: () => mockSearchParams,
}));

jest.mock('next/script', () => ({
	__esModule: true,
	default: ({ children, id, src, strategy, onReady }: { children?: ReactNode; id?: string; src?: string; strategy?: string; onReady?: () => void }) => (
		<button data-testid={id ?? 'external-script'} data-src={src} data-strategy={strategy} onClick={onReady}>
			{children}
		</button>
	),
}));

describe('GoogleAnalytics', () => {
	beforeEach(() => {
		mockPathname = '/';
		mockSearchParams = new URLSearchParams();
		window.gtag = undefined;
		window.dataLayer = [];
		document.title = 'Nectar immobilière';
	});

	it.each([undefined, '', 'G-XXXXXXXXXX', "G-TEST';alert(1);//"])(
		'does not load analytics for an absent, placeholder, or invalid ID (%s)',
		(measurementId) => {
			const { container } = render(<GoogleAnalytics measurementId={measurementId} />);

			expect(container).toBeEmptyDOMElement();
			expect(window.dataLayer).toEqual([]);
		},
	);

	it('loads the configured Google tag after hydration with automatic page views disabled', () => {
		render(<GoogleAnalytics measurementId="G-TEST12345" />);

		expect(screen.getByTestId('external-script')).toHaveAttribute('data-src', 'https://www.googletagmanager.com/gtag/js?id=G-TEST12345');
		expect(screen.getByTestId('external-script')).toHaveAttribute('data-strategy', 'afterInteractive');
		expect(screen.getByTestId('google-analytics')).toHaveTextContent("gtag('config', 'G-TEST12345', { send_page_view: false });");
	});

	it('sends the initial page view once initialization finishes, even when gtag was initially unavailable', () => {
		mockPathname = '/vente-appartement';
		mockSearchParams = new URLSearchParams('source=newsletter');
		document.title = 'Appartements à vendre';
		render(<GoogleAnalytics measurementId="G-TEST12345" />);

		const gtag = jest.fn();
		window.gtag = gtag;
		expect(gtag).not.toHaveBeenCalled();
		fireEvent.click(screen.getByTestId('google-analytics'));

		expect(gtag).toHaveBeenCalledTimes(1);
		expect(gtag).toHaveBeenCalledWith('event', 'page_view', {
			send_to: 'G-TEST12345',
			page_path: '/vente-appartement?source=newsletter',
			page_location: window.location.href,
			page_title: 'Appartements à vendre',
		});
	});

	it('tracks route and query changes and return visits without duplicate views on rerenders', () => {
		const gtag = jest.fn();
		window.gtag = gtag;
		const view = (
			<StrictMode>
				<GoogleAnalytics measurementId="G-TEST12345" />
			</StrictMode>
		);
		const { rerender } = render(view);
		fireEvent.click(screen.getByTestId('google-analytics'));
		expect(gtag).toHaveBeenCalledTimes(1);

		mockSearchParams = new URLSearchParams();
		rerender(<StrictMode><GoogleAnalytics measurementId="G-TEST12345" /></StrictMode>);
		expect(gtag).toHaveBeenCalledTimes(1);

		mockPathname = '/contact';
		rerender(<StrictMode><GoogleAnalytics measurementId="G-TEST12345" /></StrictMode>);
		mockSearchParams = new URLSearchParams('source=footer');
		rerender(<StrictMode><GoogleAnalytics measurementId="G-TEST12345" /></StrictMode>);
		mockPathname = '/';
		mockSearchParams = new URLSearchParams();
		rerender(<StrictMode><GoogleAnalytics measurementId="G-TEST12345" /></StrictMode>);

		expect(gtag.mock.calls.map((call) => call[2].page_path)).toEqual(['/', '/contact', '/contact?source=footer', '/']);
	});
});
