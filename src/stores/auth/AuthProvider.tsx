import React, { useState, useContext, useReducer } from 'react';
import { AxiosError } from 'axios';

import {
	RegisterCredentialsDTO,
	registerWithEmailAndPassword,
	AuthUser,
	UserResponse,
} from '@/features/auth';
import { authReducer } from './reducer';
import { AuthState } from './types';
import {
	REGISTER_USER_BEGIN,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_ERROR,
	LOGIN_USER_BEGIN,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_ERROR,
} from './actions';
import storage from '@/utils/storage';

const token = storage.getToken();
const user = storage.getUser();

const initialState: AuthState = {
	accessToken: token,
	user: user,
	isLoggedIn: false,
	isLoading: false,
};

export interface AuthContext extends AuthState {
	logout: () => void;
	login: () => void;
	register: (data: RegisterCredentialsDTO) => Promise<void>;
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
		storage.addUserToLocalStorage(user, token);
		return { accessToken, user };
	};

	const handleLogin = () => {
		setIsLoggedIn(true);
	};

	const handleLogout = () => {
		setIsLoggedIn(false);
	};

	const register = async (data: RegisterCredentialsDTO) => {
		dispatch({ type: REGISTER_USER_BEGIN });

		try {
			const response = await registerWithEmailAndPassword(data);
			console.log(response);
			const { accessToken, user } = handleUserResponse(response);

			dispatch({ type: REGISTER_USER_SUCCESS, payload: { user, accessToken } });
		} catch (error) {
			const err = error as AxiosError;
			console.log(err);
			dispatch({
				type: REGISTER_USER_ERROR,
				payload: { msg: err.response?.data.msg },
			});
		}
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
