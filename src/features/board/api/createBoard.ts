import { useMutation } from 'react-query';

import { authFetch } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';

import { Board, BoardsResponse } from '../types';

export type CreateBoardDTO = {
	data: {
		name: string;
	};
};

export const createBoard = ({ data }: CreateBoardDTO): Promise<Board> => {
	return authFetch.post(`/boards`, data);
};

type UseCreateBoardOptions = {
	config?: MutationConfig<typeof createBoard>;
};

export const useCreateBoard = ({ config }: UseCreateBoardOptions = {}) => {
	return useMutation({
		onMutate: async (newBoard) => {
			await queryClient.cancelQueries('boards');

			const previousBoards = queryClient.getQueryData<BoardsResponse>('boards');

			queryClient.setQueryData('boards', {
				...(previousBoards || {}),
				newBoard,
			});
		},
		onError: (_, __, context: any) => {
			if (context?.previousBoards) {
				queryClient.setQueryData('boards', context.previousBoards);
			}
		},
		onSuccess: () => {
			queryClient.invalidateQueries('boards');
		},
		...config,
		mutationFn: createBoard,
	});
};
