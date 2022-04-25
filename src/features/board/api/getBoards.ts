import { authFetch } from '@/lib/axios';
import { Boards } from '../types';
import { QueryConfig, ExtractFnReturnType } from '@/lib/react-query';
import { useQuery } from 'react-query';

export const getBoards = async (): Promise<Boards> => {
	const res = await authFetch.get('/boards');
	return res.data;
};

type QueryFnType = typeof getBoards;

type UseBoardsOptions = {
	config?: QueryConfig<QueryFnType>;
};

export const useBoards = ({ config }: UseBoardsOptions = {}) => {
	return useQuery<ExtractFnReturnType<QueryFnType>>({
		...config,
		queryKey: ['boards'],
		queryFn: getBoards,
	});
};
