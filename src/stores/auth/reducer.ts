import { Action } from '@/stores/types';
import { AuthState } from './types';
import { initialState } from './AuthProvider';
import {
	REGISTER_USER_BEGIN,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_ERROR,
	LOGIN_USER_BEGIN,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_ERROR,
	LOGOUT_USER,
} from './actions';

export const authReducer = (state: AuthState, action: Action): AuthState => {
	switch (action.type) {
		case REGISTER_USER_BEGIN: {
			return {
				...state,
				isLoading: true,
				error: null,
			};
		}
		case REGISTER_USER_SUCCESS: {
			const { accessToken, user } = action.payload;

			return {
				...state,
				isLoading: false,
				accessToken,
				user,
				error: null,
			};
		}
		case REGISTER_USER_ERROR: {
			return {
				...state,
				isLoading: false,
				error: action.payload.msg,
			};
		}
		case LOGIN_USER_BEGIN: {
			return {
				...state,
				isLoading: true,
				error: null,
			};
		}
		case LOGIN_USER_SUCCESS: {
			const { accessToken, user } = action.payload;

			return {
				...state,
				isLoading: false,
				accessToken,
				user,
				error: null,
			};
		}
		case LOGIN_USER_ERROR: {
			return { ...state, isLoading: false, error: action.payload.msg };
		}
		case LOGOUT_USER: {
			return {
				...initialState,
				user: undefined,
				accessToken: undefined,
			};
		}
		default:
			return state;
	}
};
