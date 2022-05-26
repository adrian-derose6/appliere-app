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
				element: <ActivitiesPage name='All' />,
			},
			{
				path: 'due-today',
				element: <ActivitiesPage name='Due Today' />,
			},
			{
				path: 'past-due',
				element: <ActivitiesPage name='Past Due' />,
			},
			{
				path: 'pending',
				element: <ActivitiesPage name='Pending' />,
			},
			{
				path: 'completed',
				element: <ActivitiesPage name='Completed' />,
			},
			{
				path: 'applications',
				element: <ActivitiesPage name='Applications' />,
			},
			{
				path: 'interviews',
				element: <ActivitiesPage name='Interviews' />,
			},
			{
				path: 'offers',
				element: <ActivitiesPage name='Offers' />,
			},
			{
				path: 'networking',
				element: <ActivitiesPage name='Networking' />,
			},
			{
				path: '*',
				element: <Navigate to='all' />,
			},
		],
	},
];
