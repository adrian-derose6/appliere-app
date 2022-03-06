import { RouteObject } from 'react-router-dom';

import { BoardLayout } from '../components/Layout/BoardLayout';
import { BoardsOverview } from './BoardsOverview';
import { BoardPage } from './BoardPage';
import { activitiesRoutes } from '@/features/activities/pages';

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
			},
			{
				path: 'map',
			},
			{
				path: 'metrics',
			},
			...activitiesRoutes,
		],
	},
];
