import { authFetch } from '@/lib/axios';
import { BoardsResponse } from '@/features/board/types';
import { QueryConfig, ExtractFnReturnType } from '@/lib/react-query';
import { useQuery } from 'react-query';

export const getActivities = async ({
	boardId,
}: {
	boardId: string;
}): Promise<any> => {
	const res = await authFetch.get('/activities', { params: { boardId } });
	return res.data;
};

type QueryFnType = typeof getActivities;

type UseActivitiesOptions = {
	config?: QueryConfig<QueryFnType>;
	boardId: string;
};

export const useGetActivities = ({ boardId, config }: UseActivitiesOptions) => {
	return useQuery<ExtractFnReturnType<QueryFnType>>({
		...config,
		queryKey: ['activities', boardId],
		queryFn: () => getActivities({ boardId }),
	});
};
