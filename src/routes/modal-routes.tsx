import { RouteObject } from 'react-router-dom';

import { AddJobModal } from '@/features/board/routes/AddJobModal/AddJobModal.components';

export const modalRoutes: RouteObject[] = [
	{
		path: '/add-job',
		element: <AddJobModal />,
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
