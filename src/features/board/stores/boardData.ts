import { BoardState } from '../types';

export const initialBoardState: BoardState = {
	jobs: {
		'job-1': {
			id: 'job-1',
			title: 'Software Developer',
			company: 'Facebook',
			imageSrc:
				'https://huntr-app.s3.amazonaws.com/5ca045fa6de9e0002ee83078_square',
			companyColor: 'rgba(76, 106, 164, 0.85)',
		},
		'job-2': {
			id: 'job-2',
			title: 'ReactJS Developer',
			company: 'Amazon',
			imageSrc: 'https://logo.clearbit.com/amazon.com',
			companyColor: 'rgba(28, 172, 228, 0.85)',
		},
		'job-3': {
			id: 'job-3',
			title: 'NodeJS Developer',
			company: 'Netflix',
			imageSrc: 'https://logo.clearbit.com/netflix.com',
			companyColor: 'rgba(227, 12, 20, 0.85)',
		},
		'job-4': {
			id: 'job-4',
			title: 'Front-End Developer',
			company: 'Google',
			imageSrc: 'https://logo.clearbit.com/google.com',
			companyColor: 'rgba(10, 180, 87, 0.85)',
		},
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
