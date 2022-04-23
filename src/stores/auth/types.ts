import { AuthUser } from '@/features/auth';

export interface AuthState {
	accessToken?: string;
	user?: AuthUser;
	isLoading: boolean;
	error?: any;
}
