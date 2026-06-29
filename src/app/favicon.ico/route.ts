export const GET = () =>
	new Response(null, {
		status: 308,
		headers: {
			Location: '/assets/nectar-logo-navbar.png',
		},
	});
