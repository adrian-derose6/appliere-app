export interface AuthUser {
	id: string;
	email: string;
	firstName: string;
	lastName?: string;
}

export interface UserResponse {
	accessToken: string;
	user: AuthUser;
	message: string;
}
