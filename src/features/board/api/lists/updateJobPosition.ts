import { useMutation } from 'react-query';

import { authFetch } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';

import { Board } from '@/features/board/types';

export type UpdateJobPositionDTO = {
	data: {
		listId?: string;
		pos: number;
	};
	jobId: string;
	boardId: string;
	lists: any;
};

export const updateJobPosition = async ({
	data,
	jobId,
}: UpdateJobPositionDTO): Promise<any> => {
	const res = await authFetch.patch(`/jobs/${jobId}/position`, data);
	return res.data;
};

type UseUpdateJobPositionOptions = {
	config?: MutationConfig<typeof updateJobPosition>;
};

export const useUpdateJobPosition = ({
	config,
}: UseUpdateJobPositionOptions = {}) => {
	return useMutation({
		onMutate: async (updatingJob: any) => {
			// Cancel queries
			await queryClient.cancelQueries(['board', updatingJob?.boardId, 'lists']);

			// Snapshot of previous query data
			const previousLists = queryClient.getQueryData<any>([
				'board',
				updatingJob?.boardId,
				'lists',
			]);

			// Set anticipated query data
			queryClient.setQueryData(['board', updatingJob?.boardId, 'lists'], {
				...previousLists,
				lists: updatingJob.lists,
			});

			// Return snapshot
			return { previousLists };
		},
		onError: (_, variables, context: any) => {
			if (context?.previousLists) {
				queryClient.setQueryData(
					['board', variables.boardId, 'lists'],
					context.previousLists
				);
			}
		},
		onSettled: (data, err, variables) => {
			console.log('On Update Settled: ', data);
			queryClient.invalidateQueries(['board', variables.boardId, 'lists']);
		},
		...config,
		mutationFn: (vars) => updateJobPosition(vars),
	});
};
