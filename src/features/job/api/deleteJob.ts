import { useMutation } from 'react-query';

import { authFetch } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';

interface deleteJobDTO {
	jobId: string;
	boardId: string;
}

export const deleteJob = ({ jobId }: deleteJobDTO) => {
	return authFetch.delete(`/jobs/${jobId}`);
};

type UseDeleteJobOptions = {
	config?: MutationConfig<typeof deleteJob>;
};

export const useDeleteJob = ({ config }: UseDeleteJobOptions = {}) => {
	return useMutation({
		onError: (_, __, context: any) => {},
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries(['board', variables.boardId, 'lists']);
		},
		...config,
		mutationFn: deleteJob,
	});
};
