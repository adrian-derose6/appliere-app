import { useQuery } from 'react-query';

import { authFetch } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

export const getLists = ({ boardId }: { boardId: string }): Promise<any> => {
	return authFetch.get(`/boards/${boardId}/lists`);
};

type QueryFnType = typeof getLists;

type UseGetListsOptions = {
	boardId: string;
	config?: QueryConfig<QueryFnType>;
};

export const useGetLists = ({ boardId, config }: UseGetListsOptions) => {
	return useQuery<ExtractFnReturnType<QueryFnType>>({
		queryKey: ['board', boardId, 'lists'],
		queryFn: () => getLists({ boardId }),
		...config,
	});
};
