import { useMutation } from 'react-query';

import { authFetch } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';

import { Board } from '@/features/board/types';

export type UpdateListsDTO = {
	data: {
		lists: any;
	};
	boardId: string;
};

export const updateLists = async ({
	data,
	boardId,
}: UpdateListsDTO): Promise<any> => {
	const res = await authFetch.patch(`/boards/${boardId}/lists`, data);
	return res.data;
};

type UseUpdateListsOptions = {
	config?: MutationConfig<typeof updateLists>;
};

export const useUpdateLists = ({ config }: UseUpdateListsOptions = {}) => {
	return useMutation({
		onMutate: async (updatingLists: any) => {
			// Cancel queries
			await queryClient.cancelQueries([
				'board',
				updatingLists?.boardId,
				'lists',
			]);

			// Snapshot of previous query data
			const previousLists = queryClient.getQueryData<any>([
				'board',
				updatingLists?.boardId,
				'lists',
			]);

			// Set anticipated query data
			queryClient.setQueryData(['board', updatingLists?.boardId, 'lists'], {
				...previousLists,
				lists: updatingLists.data.lists,
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
			queryClient.invalidateQueries(['board', variables.boardId, 'lists']);
		},
		...config,
		mutationFn: (vars) => updateLists(vars),
	});
};
