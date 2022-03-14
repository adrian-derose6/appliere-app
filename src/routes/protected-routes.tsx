import { Navigate, RouteObject } from 'react-router-dom';

import { MainLayout } from '@/components/Layout';
import { boardRoutes } from '@/features/board';
import { HomePage } from '@/features/home';

export const protectedRoutes: RouteObject[] = [
	{
		path: '/',
		element: <MainLayout />,
		children: [
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
		],
	},
];
