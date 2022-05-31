import { useQuery } from 'react-query';

import { authFetch } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

export const getJobs = async ({
	boardId,
}: {
	boardId: string;
}): Promise<any> => {
	const res = await authFetch.get(`/jobs`, { params: { boardId } });
	return res.data;
};

type QueryFnType = typeof getJobs;

type UseGetJobsOptions = {
	boardId: string;
	config?: QueryConfig<QueryFnType>;
};

export const useGetJobs = ({ boardId, config }: UseGetJobsOptions) => {
	return useQuery<ExtractFnReturnType<QueryFnType>>({
		queryKey: ['board', boardId, 'jobs'],
		queryFn: () => getJobs({ boardId }),
		...config,
	});
};
