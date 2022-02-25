import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import BoardsOverview from '@/features/board/pages/BoardsOverview';

interface Route {
	path: string;
	element: ReactNode | null;
}

const protectedRoutes: Route[] = [
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
		element: <BoardsOverview />,
	},
	{
		path: '*',
		element: <Navigate replace to='/track/boards' />,
	},
];

export default protectedRoutes;
