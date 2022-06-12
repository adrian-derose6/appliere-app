import { BaseEntity } from '@/types';

export type ContactMethod = {
	value: string;
	category: 'Personal' | 'Work';
};

export interface Contact extends BaseEntity {
	firstName: string;
	lastName: string;
	jobTitle: string;
	companies: string[];
	location: string;
	emails: ContactMethod[];
	phones: ContactMethod[];
	jobs: any[];
	boardId: any;
	createdBy: any;
}
