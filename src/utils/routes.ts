const requiredEnv = (name: 'NEXT_PUBLIC_ROOT_API_URL' | 'NEXT_PUBLIC_SITE_URL', value: string | undefined) => {
	if (!value) {
		throw new Error(`${name} is not configured.`);
	}
	return value.replace(/\/+$/, '');
};

export const getApiRoot = () => requiredEnv('NEXT_PUBLIC_ROOT_API_URL', process.env.NEXT_PUBLIC_ROOT_API_URL);
export const getSiteRoot = () => requiredEnv('NEXT_PUBLIC_SITE_URL', process.env.NEXT_PUBLIC_SITE_URL);

export const WEBSITE_CONTENT_API = '/website/content/';
export const WEBSITE_CONTENT_PROXY = '/api/website/content';
export const WEBSITE_FORM_API = (path: string) => `/website/${path.replace(/^\/+|\/+$/g, '')}/`;
