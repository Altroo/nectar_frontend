import { fallbackContent } from '@/data/fallbackContent';
import type { SiteContent } from '@/types/site';

const apiRoot = () => process.env.NEXT_PUBLIC_ROOT_API_URL ?? 'http://127.0.0.1:8008/api';

export const fetchSiteContent = async (): Promise<SiteContent> => {
	try {
		const response = await fetch(`${apiRoot()}/website/content/`, {
			cache: 'no-store',
			next: { revalidate: 0 },
		});
		if (!response.ok) return fallbackContent;
		return (await response.json()) as SiteContent;
	} catch {
		return fallbackContent;
	}
};

export const postWebsiteForm = async (path: string, payload: unknown) => {
	const response = await fetch(`${apiRoot()}/website/${path}/`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(payload),
	});
	if (!response.ok) {
		throw new Error('La demande n’a pas pu être envoyée.');
	}
	return response.json();
};
