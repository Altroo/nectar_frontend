'use client';

import { createContext, type ReactNode, useContext, useEffect, useSyncExternalStore } from 'react';
import { defaultLanguage, isLanguageCode, languageCookieName, languageDirection, languages, type LanguageCode, translate } from './translations';

const languageStorageKey = languageCookieName;
const languageChangeEvent = 'nectar-language-change';
const languageCookieMaxAge = 60 * 60 * 24 * 365;

const readCookieLanguage = () => {
	if (typeof document === 'undefined') return null;
	const value = document.cookie
		.split('; ')
		.find((cookie) => cookie.startsWith(`${languageCookieName}=`))
		?.split('=')[1];
	return isLanguageCode(value) ? value : null;
};

const readLanguage = (): LanguageCode => {
	if (typeof window === 'undefined') return defaultLanguage;

	const saved = window.localStorage.getItem(languageStorageKey);
	if (isLanguageCode(saved)) return saved;

	const savedCookie = readCookieLanguage();
	if (savedCookie) return savedCookie;

	const browserLanguage = window.navigator.language.slice(0, 2);
	if (isLanguageCode(browserLanguage)) return browserLanguage;

	return defaultLanguage;
};

const subscribeLanguage = (onStoreChange: () => void) => {
	window.addEventListener(languageChangeEvent, onStoreChange);
	window.addEventListener('storage', onStoreChange);
	return () => {
		window.removeEventListener(languageChangeEvent, onStoreChange);
		window.removeEventListener('storage', onStoreChange);
	};
};

const LanguageContext = createContext(defaultLanguage);

export const setLanguage = (language: LanguageCode) => {
	window.localStorage.setItem(languageStorageKey, language);
	document.cookie = `${languageCookieName}=${language}; Max-Age=${languageCookieMaxAge}; Path=/; SameSite=Lax`;
	window.dispatchEvent(new Event(languageChangeEvent));
};

export const I18nProvider = ({ children, initialLanguage = defaultLanguage }: { children: ReactNode; initialLanguage?: LanguageCode }) => {
	const language = useSyncExternalStore(subscribeLanguage, readLanguage, () => initialLanguage);

	useEffect(() => {
		document.documentElement.lang = language;
		document.documentElement.dir = languageDirection(language);
		document.body.dir = languageDirection(language);
		document.body.classList.toggle('is-rtl', languageDirection(language) === 'rtl');
	}, [language]);

	return <LanguageContext.Provider value={language}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);

export const useTranslation = () => {
	const language = useLanguage();
	return {
		language,
		dir: languageDirection(language),
		languages,
		t: (key: string, fallback = '', params?: Record<string, string | number>) => translate(language, key, fallback, params),
		setLanguage,
	};
};
