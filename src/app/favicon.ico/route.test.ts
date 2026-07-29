/** @jest-environment node */

import { GET } from '@/app/favicon.ico/route';

describe('favicon route', () => {
	it('redirects to the versioned PNG favicon', () => {
		const response = GET();

		expect(response.status).toBe(307);
		expect(response.headers.get('location')).toBe('/favicon.png?v=nectar-logo');
	});
});
