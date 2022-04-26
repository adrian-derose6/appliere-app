import { authFetch } from '@/lib/axios';
import { BoardsResponse } from '../types';
import { QueryConfig, ExtractFnReturnType } from '@/lib/react-query';
import { useQuery } from 'react-query';

export const getBoards = (): Promise<BoardsResponse> => {
	return authFetch.get('/boards');
};

type QueryFnType = typeof getBoards;

type UseBoardsOptions = {
	config?: QueryConfig<QueryFnType>;
	select?: string;
};

export const useGetBoards = ({ config }: UseBoardsOptions = {}) => {
	return useQuery<ExtractFnReturnType<QueryFnType>>({
		...config,
		queryKey: ['boards'],
		queryFn: () => getBoards(),
	});
};
