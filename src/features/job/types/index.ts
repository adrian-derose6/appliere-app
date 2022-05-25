import { BaseEntity } from '@/types';

export enum JobType {
	FULL_TIME = 'FULL_TIME',
	PART_TIME = 'PART_TIME',
	CONTRACTOR = 'CONTRACTOR',
	INTERNSHIP = 'INTERNSHIP',
}

export enum Setting {
	OFFICE = 'OFFICE',
	REMOTE = 'REMOTE',
}

export interface Job extends BaseEntity {
	title: string;
	employer: string;
	salary?: number;
	location?: string;
	htmlDescription?: string;
	postURL?: string;
	jobType?: JobType;
	setting?: Setting;
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
	setting?: Setting;
	jobType?: JobType;
	htmlDescription?: string;
	postURL?: string;
	color?: string;
}
