import { useContext } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';

import { AuthContext } from '@/stores/contexts/auth-context';

import { protectedRoutes } from './protected-routes';
import { publicRoutes } from './public-routes';
import { modalRoutes } from './modal-routes';

export const AppRouter = () => {
	const { isLoggedIn } = useContext(AuthContext);
	const location = useLocation();
	const locationState = location.state as { backgroundLocation?: Location };

	const activeRoutes = isLoggedIn ? protectedRoutes : publicRoutes;
	const mainRouter = useRoutes(
		[...activeRoutes],
		locationState?.backgroundLocation || location
	);
	const modalRouter = useRoutes([...modalRoutes]);

	return (
		<>
			{mainRouter}
			{locationState?.backgroundLocation && modalRouter}
		</>
	);
};
