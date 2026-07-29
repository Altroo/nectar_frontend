import { fallbackContent } from '@/data/fallbackContent';
import type { SiteContent } from '@/types/siteTypes';
import { getApi, postApi } from '@/utils/apiHelpers';
import { allowAnyInstance, siteInstance } from '@/utils/helpers';
import { WEBSITE_CONTENT_PROXY, WEBSITE_FORM_API } from '@/utils/routes';

export const fetchSiteContent = async (): Promise<SiteContent> => {
	try {
		const response = await getApi<SiteContent>(WEBSITE_CONTENT_PROXY, siteInstance());
		return response.data;
	} catch {
		return fallbackContent;
	}
};

export const postWebsiteForm = async (path: string, payload: unknown) => {
	const instance = allowAnyInstance();
	try {
		const response = await postApi<unknown, unknown>(WEBSITE_FORM_API(path), instance, payload);
		return response.data;
	} catch {
		throw new Error('La demande n’a pas pu être envoyée.');
	}
};
