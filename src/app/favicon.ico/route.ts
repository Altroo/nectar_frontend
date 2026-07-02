export const GET = () =>
	new Response(null, {
		status: 307,
		headers: {
			Location: '/favicon.svg?v=nectar',
		},
	});
