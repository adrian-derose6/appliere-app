import { useMutation } from 'react-query';

import { authFetch } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';

import { Board } from '../types';

export const deleteBoard = ({ boardId }: { boardId: string }) => {
	return authFetch.delete(`/boards/${boardId}`);
};

type UseDeleteBoardOptions = {
	config?: MutationConfig<typeof deleteBoard>;
};

export const useDeleteBoard = ({ config }: UseDeleteBoardOptions = {}) => {
	return useMutation({
		onError: (_, __, context: any) => {},
		onSuccess: () => {
			queryClient.invalidateQueries('boards');
		},
		...config,
		mutationFn: deleteBoard,
	});
};
