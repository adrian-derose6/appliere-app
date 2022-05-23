import { useMutation } from 'react-query';

import { authFetch } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';

import { Job, JobUpdateData } from '@/features/job/types';

export type UpdateJobDTO = {
	data: JobUpdateData;
	jobId: string;
};

export const updateJob = async ({
	data,
	jobId,
}: UpdateJobDTO): Promise<Job> => {
	const res = await authFetch.patch(`/jobs/${jobId}`, { data });
	return res.data.updatedJob;
};

type UseUpdateJobOptions = {
	config?: MutationConfig<typeof updateJob>;
};

export const useUpdateJob = ({ config }: UseUpdateJobOptions = {}) => {
	return useMutation({
		onSettled: (data, err, variables) => {
			queryClient.invalidateQueries(['job', variables.jobId]);
			if (variables.data.title || variables.data.employer) {
				queryClient.invalidateQueries(['board', data?.boardId, 'lists']);
			}
		},
		...config,
		mutationFn: updateJob,
	});
};
