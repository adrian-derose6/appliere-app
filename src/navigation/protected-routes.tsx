import { Navigate, RouteObject } from 'react-router-dom';

import { boardRoutes } from '@/features/board/pages';
import { HomePage } from '@/features/home';

export const protectedRoutes: RouteObject[] = [
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
