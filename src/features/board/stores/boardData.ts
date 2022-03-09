import { BoardState } from '../types/board-types';

export const initialBoardState: BoardState = {
	jobs: {
		'job-1': { id: 'job-1', company: 'Facebook' },
		'job-2': { id: 'job-2', company: 'Amazon' },
		'job-3': { id: 'job-3', company: 'Netflix' },
		'job-4': { id: 'job-4', company: 'Microsoft' },
	},
	collections: {
		wishlist: {
			id: 'wishlist',
			title: 'Wishlist',
			jobIds: ['job-1', 'job-2', 'job-3', 'job-4'],
		},
		applied: {
			id: 'applied',
			title: 'Applied',
			jobIds: [],
		},
		interview: {
			id: 'interview',
			title: 'Interview',
			jobIds: [],
		},
		offer: {
			id: 'offer',
			title: 'Offer',
			jobIds: [],
		},
		rejected: {
			id: 'rejected',
			title: 'Rejected',
			jobIds: [],
		},
	},
	// Facilitate reordering of the columns
	collectionOrder: ['wishlist', 'applied', 'interview', 'offer', 'rejected'],
};
