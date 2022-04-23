import { AuthUser } from '@/features/auth';

export interface AuthState {
	accessToken: string;
	user: AuthUser | null;
	isLoggedIn: boolean;
	isLoading: boolean;
}
