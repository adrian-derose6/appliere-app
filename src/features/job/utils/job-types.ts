import { JobType } from '../types';

const JOB_TYPES = [
	{
		label: 'Full-time',
		value: 'FULL_TIME',
	},
	{
		label: 'Part-time',
		value: 'PART_TIME',
	},
	{
		label: 'Contractor',
		value: 'CONTRACTOR',
	},
	{
		label: 'Internship',
		value: 'INTERNSHIP',
	},
];

export const formatJobType = (jobType: JobType): string => {
	return (jobType.charAt(0) + jobType.substring(1).toLowerCase()).replace(
		'_',
		'-'
	);
};

export default JOB_TYPES;
