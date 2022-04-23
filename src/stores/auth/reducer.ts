import { MetricsPage } from './../../features/metrics/pages/MetricsPage';
import { Action } from '@/stores/types';
import { AuthState } from './types';
import {
	REGISTER_USER_BEGIN,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_ERROR,
	LOGIN_USER_BEGIN,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_ERROR,
} from './actions';

export const authReducer = (state: AuthState, action: Action) => {
	switch (action.type) {
		case REGISTER_USER_BEGIN: {
			return {
				...state,
				isLoading: true,
			};
		}
		case REGISTER_USER_SUCCESS: {
			const { accessToken, user } = action.payload;

			return {
				...state,
				isLoading: false,
				isLoggedIn: true,
				accessToken,
				user,
			};
		}
		case REGISTER_USER_ERROR: {
			return { ...state, isLoading: false, error: action.payload.msg };
		}
		default:
			return state;
	}
};
