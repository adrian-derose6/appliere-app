import { useMutation } from 'react-query';

import { authFetch } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';

interface DeleteActivityDTO {
	activityId: string;
	boardId: string;
}

export const deleteActivity = ({ activityId }: DeleteActivityDTO) => {
	return authFetch.delete(`/activities/${activityId}`);
};

type UseDeleteActivityOptions = {
	config?: MutationConfig<typeof deleteActivity>;
};

export const useDeleteActivity = ({
	config,
}: UseDeleteActivityOptions = {}) => {
	return useMutation({
		onError: (_, __, context: any) => {},
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries(['activities', variables.boardId]);
		},
		...config,
		mutationFn: deleteActivity,
	});
};
