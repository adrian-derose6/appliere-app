import { useRoutes, useLocation } from 'react-router-dom';

import { useAuth } from '@/stores/auth/AuthProvider';
import { protectedRoutes } from './protected-routes';
import { publicRoutes } from './public-routes';
import { modalRoutes } from './modal-routes';

export const AppRouter = () => {
	const { user } = useAuth();
	const location = useLocation();
	const locationState = location.state as { backgroundLocation?: Location };

	const activeRoutes = user ? protectedRoutes : publicRoutes;
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
