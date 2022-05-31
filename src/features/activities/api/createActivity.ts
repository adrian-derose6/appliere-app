import { useMutation } from 'react-query';

import { authFetch } from '@/lib/axios';
import { MutationConfig, queryClient } from '@/lib/react-query';

export type CreateActivityDTO = {
	data: {
		title: string;
		activityCategory: {
			label: string;
			value: string;
		};
		boardId: string;
		jobId: string;
		startAt: string;
		endAt: string;
		note?: string;
		completed?: boolean;
	};
};

export const createActivity = async ({
	data,
}: CreateActivityDTO): Promise<any> => {
	const res = await authFetch.post(`/activities`, data);
	return res.data.activity;
};

type UseCreateActivityOptions = {
	config?: MutationConfig<typeof createActivity>;
};

export const useCreateActivity = ({
	config,
}: UseCreateActivityOptions = {}) => {
	return useMutation({
		onSettled: async (data, err, variables) => {
			if (data.activity) {
				queryClient.invalidateQueries(['activities', data.activity.boardId]);
			}
		},
		...config,
		mutationFn: createActivity,
	});
};
