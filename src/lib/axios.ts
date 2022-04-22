import Axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

import { API_URL } from '@/config/env-vars';
import storage from '@/utils/storage';

function authRequestInterceptor(config: AxiosRequestConfig) {
	const token = storage.getToken();

	if (config.headers) {
		config.headers.Accept = 'application/json';
	}
	if (token && config.headers) {
		config.headers.authorization = `${token}`;
	}

	return config;
}

export const axios = Axios.create({
	baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {
		const message = error.response?.data?.message || error.message;
		return Promise.reject(error);
	}
);
