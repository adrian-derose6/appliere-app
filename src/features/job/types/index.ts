import { BaseEntity } from '@/types';

export interface Job extends BaseEntity {
	title: string;
	employer: string;
	boardId: string;
	listId: string;
	pos: number;
	createdBy: string;
}
