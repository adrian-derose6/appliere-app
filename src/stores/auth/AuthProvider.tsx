import React, {
	useState,
	useContext,
	useReducer,
	useMemo,
	ReactNode,
	useEffect,
} from 'react';
import { AxiosError } from 'axios';

import {
	RegisterCredentialsDTO,
	registerWithEmailAndPassword,
	loginWithEmailAndPassword,
	LoginCredentialsDTO,
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
	LOGOUT_USER,
} from './actions';
import storage from '@/utils/storage';

const token = storage.getToken();
const user = storage.getUser();

export const initialState: AuthState = {
	accessToken: token || undefined,
	user: user || undefined,
	isLoading: false,
	error: null,
};

export interface AuthContext extends AuthState {
	logout: () => void;
	login: (data: LoginCredentialsDTO) => Promise<void>;
	register: (data: RegisterCredentialsDTO) => Promise<void>;
}

export const AuthContext = React.createContext<AuthContext | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(authReducer, initialState);

	const register = async (data: RegisterCredentialsDTO) => {
		dispatch({ type: REGISTER_USER_BEGIN });

		try {
			const response = await registerWithEmailAndPassword(data);
			const { user, accessToken } = response;
			storage.addUserToLocalStorage(user, accessToken);

			dispatch({ type: REGISTER_USER_SUCCESS, payload: { user, accessToken } });
		} catch (error: any) {
			console.log(error.response.data);
			dispatch({
				type: REGISTER_USER_ERROR,
				payload: { msg: error.response?.data.msg },
			});
		}
	};

	const login = async (data: LoginCredentialsDTO) => {
		dispatch({ type: LOGIN_USER_BEGIN });

		try {
			const response = await loginWithEmailAndPassword(data);
			const { user, accessToken } = response;
			storage.addUserToLocalStorage(user, accessToken);

			dispatch({ type: LOGIN_USER_SUCCESS, payload: { user, accessToken } });
		} catch (error: any) {
			console.log(error.response.data);
			dispatch({
				type: LOGIN_USER_ERROR,
				payload: { msg: error.response?.data.msg },
			});
		}
	};

	const logout = () => {
		dispatch({ type: LOGOUT_USER });
		storage.removeUserFromLocalStorage();
	};

	const value: AuthContext = useMemo(
		() => ({
			...state,
			logout,
			login,
			register,
		}),
		[state]
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContext => {
	return useContext(AuthContext) as AuthContext;
};
