import type { AxiosInstance } from 'axios';

export const getApi = async <ResponseData>(url: string, instance: AxiosInstance) => {
	const response = await instance.get<ResponseData>(url);
	return {
		status: response.status,
		data: response.data,
	};
};

export const postApi = async <ResponseData, RequestData>(url: string, instance: AxiosInstance, body: RequestData) => {
	const response = await instance.post<ResponseData>(url, body);
	return {
		status: response.status,
		data: response.data,
	};
};
