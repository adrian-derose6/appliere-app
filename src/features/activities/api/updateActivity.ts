import { useMutation } from 'react-query';

import { authFetch } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';

export type UpdateActivityDTO = {
	data: {
		title?: string;
		note?: string;
		completed?: boolean;
		startAt?: string;
		endAt?: string;
		activityCategory?: any;
		jobId?: string;
	};
	activityId: string;
};

export const updateActivity = async ({
	data,
	activityId,
}: UpdateActivityDTO): Promise<any> => {
	const res = await authFetch.patch(`/activities/${activityId}`, data);
	return res.data.updatedActivity;
};

type UseUpdateActivityOptions = {
	config?: MutationConfig<typeof updateActivity>;
};

export const useUpdateActivity = ({
	config,
}: UseUpdateActivityOptions = {}) => {
	return useMutation({
		onSettled: (data, err, variables) => {
			console.log(data);
			queryClient.invalidateQueries(['activities', data.boardId]);
		},
		...config,
		mutationFn: updateActivity,
	});
};
