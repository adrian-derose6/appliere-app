import React, { useState, useContext, useReducer } from 'react';

import {
	RegisterCredentialsDTO,
	registerWithEmailAndPassword,
	AuthUser,
	UserResponse,
} from '@/features/auth';
import { authReducer } from './reducer';
import { AuthState } from './types';
import storage from '@/utils/storage';

const token = storage.getToken();
const user = storage.getUser();

const initialState: AuthState = {
	accessToken: token || '',
	user: user ? user : null,
	isLoggedIn: false,
};

export interface AuthContext extends AuthState {
	logout: () => void;
	login: () => void;
	register: (data: RegisterCredentialsDTO) => Promise<AuthUser>;
}

export const AuthContext = React.createContext<AuthContext | null>(null);

type AuthProviderProps = {
	children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [state, dispatch] = useReducer(authReducer, initialState);
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

	const value: AuthContext = {
		...state,
		logout: handleLogout,
		login: handleLogin,
		register,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContext => {
	return useContext(AuthContext) as AuthContext;
};
