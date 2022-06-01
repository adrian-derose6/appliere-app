import { RouteObject, Navigate } from 'react-router-dom';

import { ActivitiesNavigation } from '../components/Layout/ActivitiesNavigation.component';
import { ActivitiesPage } from './ActivitiesPage';

export const activitiesRoutes: RouteObject[] = [
	{
		path: 'activities',
		element: <ActivitiesNavigation />,
		children: [
			{
				path: 'all',
				element: <ActivitiesPage name='All' type='all' />,
			},
			{
				path: 'due-today',
				element: <ActivitiesPage name='Due Today' type='due-today' />,
			},
			{
				path: 'past-due',
				element: <ActivitiesPage name='Past Due' type='past-due' />,
			},
			{
				path: 'pending',
				element: <ActivitiesPage name='Pending' type='pending' />,
			},
			{
				path: 'completed',
				element: <ActivitiesPage name='Completed' type='completed' />,
			},
			{
				path: 'applications',
				element: <ActivitiesPage name='Applications' type='applications' />,
			},
			{
				path: 'interviews',
				element: <ActivitiesPage name='Interviews' type='interviews' />,
			},
			{
				path: 'offers',
				element: <ActivitiesPage name='Offers' type='offers' />,
			},
			{
				path: 'networking',
				element: <ActivitiesPage name='Networking' type='networking' />,
			},
			{
				path: '*',
				element: <Navigate to='all' />,
			},
		],
	},
];
