import { authFetch } from '@/lib/axios';

import { UserResponse } from '../types';

export interface RegisterCredentialsDTO {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
}

export const register = (
	data: RegisterCredentialsDTO
): Promise<UserResponse> => {
	return authFetch.post('/auth/register', data);
};
