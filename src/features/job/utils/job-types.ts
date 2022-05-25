import { JobType } from '../types';

const JOB_TYPES = [
	{
		label: 'Full-time',
		value: JobType.FULL_TIME,
	},
	{
		label: 'Part-time',
		value: JobType.PART_TIME,
	},
	{
		label: 'Contractor',
		value: JobType.CONTRACTOR,
	},
	{
		label: 'Internship',
		value: JobType.CONTRACTOR,
	},
];

export const formatJobType = (jobType: JobType): string => {
	return (jobType.charAt(0) + jobType.substring(1).toLowerCase()).replace(
		'_',
		'-'
	);
};

export default JOB_TYPES;
