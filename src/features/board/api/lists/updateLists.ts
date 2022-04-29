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

export const updateLists = ({
	data,
	boardId,
}: UpdateListsDTO): Promise<any> => {
	return authFetch.patch(`/boards/${boardId}/lists`, data);
};

type UseUpdateListsOptions = {
	config?: MutationConfig<typeof updateLists>;
};

export const useUpdateLists = ({ config }: UseUpdateListsOptions = {}) => {
	return useMutation({
		onMutate: async (updatingLists: any) => {
			await queryClient.cancelQueries(['board', updatingLists?.boardId]);

			const previousLists = queryClient.getQueryData<any>([
				'board',
				updatingLists?.boardId,
				'lists',
			]);

			queryClient.setQueryData(['board', updatingLists?.boardId, 'lists'], {
				...previousLists,
				data: {
					...updatingLists.data,
					id: updatingLists.boardId,
				},
			});

			return { previousLists };
		},
		onError: (_, __, context: any) => {
			if (context?.previousLists) {
				queryClient.setQueryData(
					['board', context.previousBoard.id, 'lists'],
					context.previousLists
				);
			}
		},
		onSuccess: (data) => {
			console.log('On Update Success: ', data);
			queryClient.invalidateQueries(['board', data.data.id, 'lists']);
		},
		...config,
		mutationFn: updateLists,
	});
};
