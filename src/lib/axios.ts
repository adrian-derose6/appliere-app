import Axios, { AxiosRequestConfig } from 'axios';

import { API_URL } from '@/config/env-vars';
import storage from '@/utils/storage';

function authRequestInterceptor(config: AxiosRequestConfig) {
	const token = storage.getToken();

	if (config.headers) {
		config.headers.Accept = 'application/json';
	}
	if (token && config.headers) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
}

export const authFetch = Axios.create({
	baseURL: API_URL,
});

authFetch.interceptors.request.use(authRequestInterceptor, (error) => {
	return Promise.reject(error);
});
authFetch.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {
		const message = error.response?.data?.message || error.message;
		return Promise.reject(error);
	}
);
