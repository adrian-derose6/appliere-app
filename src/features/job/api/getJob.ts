import { useQuery } from 'react-query';

import { authFetch } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

export const getJob = async ({ jobId }: { jobId: string }): Promise<any> => {
	const res = await authFetch.get(`/jobs/${jobId}`);
	return res.data;
};

type QueryFnType = typeof getJob;

type UseGetJobOptions = {
	jobId: string;
	config?: QueryConfig<QueryFnType>;
};

export const useGetJob = ({ jobId, config }: UseGetJobOptions) => {
	return useQuery<ExtractFnReturnType<QueryFnType>>({
		...config,
		queryKey: ['job', jobId],
		queryFn: () => getJob({ jobId }),
	});
};
