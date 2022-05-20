import { BaseEntity } from '@/types';

export interface Job extends BaseEntity {
	title: string;
	employer: string;
	salary: string;
	boardId: string;
	listId: string;
	pos: number;
	createdBy: string;
}
