import React, { useState, useContext, useReducer, Dispatch } from 'react';

import {
	RegisterCredentialsDTO,
	AuthUser,
	registerWithEmailAndPassword,
	UserResponse,
} from '@/features/auth';
import { authReducer } from './reducer';
import storage from '@/utils/storage';

export interface AuthContext {
	accessToken: string;
	user?: AuthUser;
	isLoggedIn: boolean;
	logout: () => void;
	login: () => void;
	register: (data: RegisterCredentialsDTO) => Promise<AuthUser>;
}

export const AuthContext = React.createContext<AuthContext | null>(null);

type AuthProviderProps = {
	children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [dispatch, state] = useReducer(authReducer, {});
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	const handleUserResponse = (data: UserResponse) => {
		const { accessToken, user } = data;
		storage.setToken(accessToken);
		return user;
	};

	const handleLogin = () => {
		setIsLoggedIn(true);
	};

	const handleLogout = () => {
		setIsLoggedIn(false);
	};

	const register = async (data: RegisterCredentialsDTO) => {
		const response = await registerWithEmailAndPassword(data);
		const user = handleUserResponse(response);
		return user;
	};

	const contextValue: AuthContext = {
		accessToken: '',
		isLoggedIn,
		logout: handleLogout,
		login: handleLogin,
		register,
	};

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};

export const useAuth = (): AuthContext => {
	return useContext(AuthContext) as AuthContext;
};
