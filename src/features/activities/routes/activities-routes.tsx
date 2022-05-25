import { RouteObject } from 'react-router-dom';

import { ActivitiesPage } from './ActivitiesPage';
import { ActivitiesLayout } from '../components/Layout/ActivitiesLayout';

export const activitiesRoutes: RouteObject[] = [
	{
		path: 'activities',
		element: <ActivitiesLayout />,
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
