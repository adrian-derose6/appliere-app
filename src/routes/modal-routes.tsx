import { RouteObject } from 'react-router-dom';

import { AddJobModal } from '@/features/job';
import { jobRoutes } from '@/features/job';

export const modalRoutes: RouteObject[] = [
	{
		path: '/add-job/:boardId/:listId',
		element: <AddJobModal />,
	},
	{
		path: '/job',
		children: jobRoutes,
	},
	{
		path: '/add-activity',
		element: null,
	},
	{
		path: '/add-contact',
		element: null,
	},
];
