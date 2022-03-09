export type Collection = {
	id: string;
	title: string;
	jobIds: string[];
};

export type Job = {
	id: string;
	company: string;
};

export interface BoardState {
	jobs: { [k: string]: Job };
	collections: { [k: string]: Collection };
	collectionOrder: string[];
}
