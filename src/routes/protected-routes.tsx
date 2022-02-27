import { Navigate, RouteObject } from 'react-router-dom';

import boardRoutes from '@/features/board/routes';

const protectedRoutes: RouteObject[] = [
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
		element: <Navigate replace to='/track/boards' />,
	},
];

export default protectedRoutes;
