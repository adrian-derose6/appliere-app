import { RouteObject } from 'react-router-dom';

import { JobModal } from './JobModal/JobModal.component';

export const jobRoutes: RouteObject[] = [
	{
		path: ':jobId',
		element: <JobModal />,
		children: [
			{
				path: 'job-info',
				element: <h1>Job Info</h1>,
			},
			{
				path: 'job-activities',
				element: <h1>Job Activities</h1>,
			},
			{
				path: 'job-notes',
				element: <h1>Job Notes</h1>,
			},
			{
				path: 'job-contacts',
				element: <h1>Job Contacts</h1>,
			},
			{
				path: 'job-company',
				element: <h1>Job Company</h1>,
			},
		],
	},
];
