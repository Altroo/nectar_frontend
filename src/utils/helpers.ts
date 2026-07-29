import axios, { type AxiosInstance } from 'axios';
import { getApiRoot, getSiteRoot } from '@/utils/routes';

const jsonHeaders = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
};

export const allowAnyInstance = (): AxiosInstance =>
	axios.create({
		baseURL: getApiRoot(),
		headers: jsonHeaders,
	});

export const siteInstance = (): AxiosInstance =>
	axios.create({
		baseURL: getSiteRoot(),
		headers: jsonHeaders,
	});
