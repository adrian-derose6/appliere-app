import { RouteObject } from 'react-router-dom';

import { BoardLayout } from '../components/1. Layout/BoardLayout';
import { BoardsOverview } from './BoardsOverview';
import { BoardPage } from './BoardPage';
import { ContactsPage } from '@/features/contacts';
import { MetricsPage } from '@/features/metrics';
import { BoardMapPage } from '@/features/board-map';
import { activitiesRoutes } from '@/features/activities';

export const boardRoutes: RouteObject[] = [
	{
		index: true,
		element: <BoardsOverview />,
	},
	{
		path: ':boardId',
		element: <BoardLayout />,
		children: [
			{
				path: 'board',
				element: <BoardPage />,
			},
			{
				path: 'contacts',
				element: <ContactsPage />,
			},
			{
				path: 'map',
				element: <BoardMapPage />,
			},
			{
				path: 'metrics',
				element: <MetricsPage />,
			},
			...activitiesRoutes,
		],
	},
];
