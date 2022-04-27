import { useQuery } from 'react-query';

import { authFetch } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

export const getBoard = ({ boardId }: { boardId: string }): Promise<any> => {
	return authFetch.get(`/boards/${boardId}`);
};

type QueryFnType = typeof getBoard;

type UseGetBoardOptions = {
	boardId: string;
	config?: QueryConfig<QueryFnType>;
};

export const useGetBoard = ({ boardId, config }: UseGetBoardOptions) => {
	return useQuery<ExtractFnReturnType<QueryFnType>>({
		...config,
		queryKey: ['board', boardId],
		queryFn: () => getBoard({ boardId }),
	});
};
