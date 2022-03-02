import { Navigate, RouteObject } from 'react-router-dom';

import boardRoutes from '@/features/board/routes';
import HomePage from '@/features/home/routes/HomePage';

const protectedRoutes: RouteObject[] = [
	{
		path: '/home',
		element: <HomePage />,
	},
	{
		path: '/jobs',
		element: null,
	},
	{
		path: '/browse',
		element: null,
	},
	{
		path: '/track/contacts',
		element: null,
	},
	{
		path: '/track/boards',
		children: boardRoutes,
	},
	{
		path: '*',
		element: <Navigate replace to='/home' />,
	},
];

export default protectedRoutes;
