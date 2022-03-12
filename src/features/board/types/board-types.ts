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
