import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm, FloatingNewsletter, NewsletterForm, PurplePearlVisitForm } from '@/components/forms/websiteForms';
import { postWebsiteForm } from '@/utils/websiteApi';

jest.mock('@/contexts/languageContext', () => ({
	useTranslation: () => ({
		language: 'fr',
		t: (key: string) => key,
	}),
}));

jest.mock('@/utils/websiteApi', () => ({
	postWebsiteForm: jest.fn(),
}));

const postWebsiteFormMock = jest.mocked(postWebsiteForm);

describe('website forms', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('normalizes and submits contact data', async () => {
		postWebsiteFormMock.mockResolvedValue({ ok: true });
		const { container } = render(<ContactForm />);
		fireEvent.change(container.querySelector('[name="full_name"]') as HTMLInputElement, { target: { value: 'Nectar Client' } });
		fireEvent.change(container.querySelector('[name="phone"]') as HTMLInputElement, { target: { value: '0600000000' } });
		fireEvent.change(container.querySelector('[name="preferred_date"]') as HTMLInputElement, { target: { value: '7/8/2026' } });
		fireEvent.submit(container.querySelector('form') as HTMLFormElement);

		await waitFor(() =>
			expect(postWebsiteFormMock).toHaveBeenCalledWith(
				'contact-requests',
				expect.objectContaining({
					full_name: 'Nectar Client',
					phone: '0600000000',
					preferred_date: '2026-08-07',
				}),
			),
		);
		expect(screen.getByText('forms.status.success')).toBeInTheDocument();
	});

	it('shows the newsletter error state when submission fails', async () => {
		postWebsiteFormMock.mockRejectedValue(new Error('offline'));
		const { container } = render(<NewsletterForm source="footer" />);
		fireEvent.change(container.querySelector('[name="email"]') as HTMLInputElement, { target: { value: 'client@example.com' } });
		fireEvent.submit(container.querySelector('form') as HTMLFormElement);

		await waitFor(() => expect(screen.getByText('forms.status.error')).toBeInTheDocument());
		expect(postWebsiteFormMock).toHaveBeenCalledWith('newsletter', {
			email: 'client@example.com',
			source: 'footer',
		});
	});

	it('submits Purple Pearl visit consent and date', async () => {
		postWebsiteFormMock.mockResolvedValue({ ok: true });
		const { container } = render(<PurplePearlVisitForm />);
		fireEvent.change(container.querySelector('[name="full_name"]') as HTMLInputElement, { target: { value: 'Visitor' } });
		fireEvent.change(container.querySelector('[name="phone"]') as HTMLInputElement, { target: { value: '0611111111' } });
		fireEvent.change(container.querySelector('[name="preferred_date"]') as HTMLInputElement, { target: { value: '2026-09-01' } });
		fireEvent.click(container.querySelector('[name="consent"]') as HTMLInputElement);
		fireEvent.submit(container.querySelector('form') as HTMLFormElement);

		await waitFor(() =>
			expect(postWebsiteFormMock).toHaveBeenCalledWith(
				'purple-pearl-visits',
				expect.objectContaining({
					full_name: 'Visitor',
					preferred_date: '2026-09-01',
					consent: true,
				}),
			),
		);
	});

	it('lets users dismiss the floating newsletter', async () => {
		const user = userEvent.setup();
		render(<FloatingNewsletter />);

		await user.click(screen.getByRole('button', { name: 'forms.newsletter.close' }));

		expect(screen.queryByText('forms.newsletter.title')).not.toBeInTheDocument();
	});
});
