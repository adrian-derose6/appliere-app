export type Collection = {
	id: string;
	title: string;
	jobIds: string[];
};

export type Job = {
	id: string;
	title: string;
	company: string;
	imageSrc?: string;
	companyColor?: string;
};

export interface BoardState {
	jobs: { [k: string]: Job };
	collections: { [k: string]: Collection };
	collectionOrder: string[];
}

export type JobType = {
	company: string;
	position: string;
};

export interface Board {
	_id: string;
	name: string;
	createdBy: string;
	lists: [
		{
			_id: string;
			title: string;
			jobs: JobType[];
		}
	];
}

export type BoardsResponse = {
	boards: Board[];
};
