import { AuthUser } from '@/features/auth';

export interface AuthState {
	accessToken?: string;
	user?: AuthUser;
	isLoggedIn: boolean;
	isLoading: boolean;
	error?: any;
}
