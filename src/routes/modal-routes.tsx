import { RouteObject } from 'react-router-dom';

import { AddJobModal } from '@/features/job';
import { JobModal } from '@/features/job';
import { AddActivityModal } from '@/features/activities';
import { AddContactModal } from '@/features/contacts';

export const modalRoutes: RouteObject[] = [
	{
		path: '/add-job/:boardId/:listId',
		element: <AddJobModal />,
	},
	{
		path: '/job/:jobId',
		element: <JobModal />,
	},
	{
		path: '/add-activity/:boardId',
		element: <AddActivityModal />,
	},
	{
		path: '/add-contact',
		element: <AddContactModal />,
	},
	{
		path: '/edit-contact/:contactId',
		element: <AddContactModal editing={true} />,
	},
];
