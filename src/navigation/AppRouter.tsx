import { useContext } from 'react';
import { useRoutes } from 'react-router-dom';

import { AuthContext } from '@/stores/contexts/auth-context';

import { protectedRoutes } from './protected-routes';
import { publicRoutes } from './public-routes';

export const AppRouter = () => {
	const { isLoggedIn } = useContext(AuthContext);

	const activeRoutes = isLoggedIn ? protectedRoutes : publicRoutes;
	const router = useRoutes([...activeRoutes]);

	return <>{router}</>;
};
