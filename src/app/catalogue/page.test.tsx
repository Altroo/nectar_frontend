import { redirect } from 'next/navigation';
import CataloguePage from '@/app/catalogue/page';

jest.mock('next/navigation', () => ({
	redirect: jest.fn(),
}));

describe('CataloguePage', () => {
	it('redirects to the apartment sale catalogue', () => {
		CataloguePage();

		expect(redirect).toHaveBeenCalledWith('/vente-appartement');
	});
});
