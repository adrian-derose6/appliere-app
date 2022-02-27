import { RouteObject } from 'react-router-dom';

import BoardLayout from '../components/Layout/BoardLayout';
import BoardsOverview from './BoardsOverview';
import BoardPage from './BoardPage';
import ActivitiesPage from './ActivitiesPage';

const boardRoutes: RouteObject[] = [
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
				path: 'activities',
				element: <ActivitiesPage />,
			},
			{
				path: 'contacts',
			},
			{
				path: 'map',
			},
			{},
		],
	},
];

export default boardRoutes;
