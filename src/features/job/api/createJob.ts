import { useMutation } from 'react-query';

import { authFetch } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';
import { BoardsResponse } from '@/features/board/types';
import { Job } from '../types';

export type CreateJobDTO = {
	data: {
		title: string;
		employer: string;
		boardId: string;
		listId: string;
	};
};

export const createJob = async ({ data }: CreateJobDTO): Promise<Job> => {
	const res = await authFetch.post(`/jobs`, { data });
	return res.data.job;
};

type UseCreateJobOptions = {
	config?: MutationConfig<typeof createJob>;
};

export const useCreateJob = ({ config }: UseCreateJobOptions = {}) => {
	return useMutation({
		onSettled: (data, err, variables) => {
			queryClient.invalidateQueries(['board', variables.data.boardId, 'lists']);
		},
		...config,
		mutationFn: createJob,
	});
};
