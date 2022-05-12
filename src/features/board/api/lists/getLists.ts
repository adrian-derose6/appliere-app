import { useQuery } from 'react-query';

import { authFetch } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

export const getLists = async ({
	boardId,
}: {
	boardId: string;
}): Promise<any> => {
	const res = await authFetch.get(`/boards/${boardId}/lists`);
	return res.data;
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
