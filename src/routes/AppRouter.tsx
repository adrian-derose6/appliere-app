import { useContext } from 'react';
import { useRoutes } from 'react-router-dom';

import { AuthContext } from '@/stores/contexts/auth-context';

import protectedRoutes from './protected-routes';
import publicRoutes from './public-routes';

const AppRouter = () => {
	const { isLoggedIn } = useContext(AuthContext);

	console.log(protectedRoutes, publicRoutes);

	const activeRoutes = isLoggedIn ? protectedRoutes : publicRoutes;
	const element = useRoutes([...activeRoutes]);
	return <>{element}</>;
};

export default AppRouter;
