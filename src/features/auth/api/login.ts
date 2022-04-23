import { authFetch } from '@/lib/axios';

import { UserResponse } from '../types';

export type LoginCredentialsDTO = {
	email: string;
	password: string;
};

export const loginWithEmailAndPassword = (
	data: LoginCredentialsDTO
): Promise<UserResponse> => {
	return authFetch.post('/auth/login', data);
};
