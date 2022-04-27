import { useMutation } from 'react-query';

import { authFetch } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';

import { Board } from '@/features/board/types';

export type UpdateBoardDTO = {
	data: {
		name?: string;
		archived?: boolean;
	};
	boardId: string;
};

export const updateBoard = ({
	data,
	boardId,
}: UpdateBoardDTO): Promise<any> => {
	return authFetch.patch(`/boards/${boardId}`, data);
};

type UseUpdateBoardOptions = {
	config?: MutationConfig<typeof updateBoard>;
	params: {
		updateAll?: boolean;
	};
};

export const useUpdateBoard = (
	{ config, params }: UseUpdateBoardOptions = { params: { updateAll: false } }
) => {
	const rootKey = params.updateAll === true ? 'boards' : 'board';

	return useMutation({
		onMutate: async (updatingBoard: any) => {
			await queryClient.cancelQueries([rootKey, updatingBoard?.boardId]);

			const previousBoard = queryClient.getQueryData<any>([
				rootKey,
				updatingBoard?.boardId,
			]);

			queryClient.setQueryData([rootKey, updatingBoard?.boardId], {
				...previousBoard,
				...updatingBoard.data,
				id: updatingBoard.boardId,
			});

			return { previousBoard };
		},
		onError: (_, __, context: any) => {
			if (context?.previousBoard) {
				queryClient.setQueryData(
					[rootKey, context.previousBoard.id],
					context.previousBoard
				);
			}
		},
		onSuccess: (data) => {
			queryClient.invalidateQueries([rootKey]);
			queryClient.invalidateQueries([rootKey, data.updatedBoard._id]);
		},
		...config,
		mutationFn: updateBoard,
	});
};
