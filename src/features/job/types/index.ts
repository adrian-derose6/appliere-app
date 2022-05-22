import { BaseEntity } from '@/types';

export interface Job extends BaseEntity {
	title: string;
	employer: string;
	salary?: number;
	htmlDescription?: string;
	url?: string;
	color?: string;
	boardId: string;
	listId: string;
	pos: number;
	createdBy: string;
}
