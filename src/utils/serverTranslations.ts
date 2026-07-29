import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { defaultLanguage, isLanguageCode, languageCookieName, localizedPageTitle } from '@/translations';

export const generateLocalizedMetadata = async (pathname: string): Promise<Metadata> => {
	const cookieStore = await cookies();
	const savedLanguage = cookieStore.get(languageCookieName)?.value;
	const language = isLanguageCode(savedLanguage) ? savedLanguage : defaultLanguage;

	return {
		title: localizedPageTitle(language, pathname),
	};
};
