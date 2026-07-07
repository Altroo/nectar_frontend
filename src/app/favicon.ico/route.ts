export const GET = () =>
	new Response(null, {
		status: 307,
		headers: {
			Location: '/favicon.png?v=nectar-logo',
		},
	});
