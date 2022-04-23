import React, {
	useState,
	useContext,
	useReducer,
	useMemo,
	ReactNode,
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
} from './actions';
import storage from '@/utils/storage';

const token = storage.getToken();
const user = storage.getUser();

const initialState: AuthState = {
	accessToken: token,
	user: user,
	isLoggedIn: false,
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
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	const handleUserResponse = (data: UserResponse) => {
		const { accessToken, user } = data;
		storage.addUserToLocalStorage(user, accessToken);
		return { accessToken, user };
	};

	const handleLogout = () => {
		setIsLoggedIn(false);
	};

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

	const value: AuthContext = useMemo(
		() => ({
			...state,
			logout: handleLogout,
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
