import { BaseEntity } from '@/types';

export type JobType = 'FULL_TIME' | 'PART_TIME' | 'CONTRACTOR' | 'INTERNSHIP';

export interface Job extends BaseEntity {
	title: string;
	employer: string;
	salary?: number;
	location?: string;
	htmlDescription?: string;
	postURL?: string;
	jobType?: JobType;
	color?: string;
	boardId: string;
	listId: string;
	pos: number;
	createdBy: string;
}

export interface JobUpdateData {
	title?: string;
	employer?: string;
	salary?: number;
	location?: string;
	jobType?: JobType;
	htmlDescription?: string;
	postURL?: string;
	color?: string;
}
