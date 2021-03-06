import { RouteObject } from 'react-router-dom';

import { AddJobModal } from '@/features/job';
import { JobModal } from '@/features/job';
import { AddActivityModal } from '@/features/activities';
import { ContactModal } from '@/features/contacts';

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
		element: <ContactModal />,
	},
	{
		path: '/edit-contact/:contactId',
		element: <ContactModal isEditing={true} />,
	},
];
