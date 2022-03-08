import { RouteObject } from 'react-router-dom';

import { ActivitiesPage } from './ActivitiesPage';

export const activitiesRoutes: RouteObject[] = [
	{
		path: 'activities',
		element: <ActivitiesPage />,
		children: [
			{
				path: 'all',
				index: true,
			},
			{
				path: 'due-today',
			},
			{
				path: 'past-due',
			},
			{
				path: 'pending',
			},
			{
				path: 'completed',
			},
			{
				path: 'applications',
			},
			{
				path: 'interviews',
			},
			{
				path: 'offers',
			},
			{
				path: 'networking',
			},
		],
	},
];
