import dayjs from '@/lib/dayjs';

import { ActivityType } from '../types';

interface Props {
	type: string;
	activityCategory?: any;
	list: any;
	jobId?: string;
}

export const useFilteredActivities = ({
	type,
	list,
	activityCategory,
	jobId,
}: Props) => {
	let filteredList = [...list];
	let completed;
	let pending;

	if (!list || list.length === 0) {
		return {
			completed: [],
			pending: [],
		};
	}

	if (jobId) {
		filteredList = filteredList.filter((item: any) => item.job.id === jobId);
	}

	switch (type) {
		case ActivityType.all: {
			break;
		}
		case ActivityType.dueToday: {
			filteredList = filteredList.filter((item: any) => {
				return dayjs(item.endAt).isToday();
			});
			break;
		}
		case ActivityType.pastDue: {
			filteredList = filteredList.filter((item: any) => {
				return dayjs(item.endAt).isBefore(dayjs());
			});
			break;
		}
		case ActivityType.pending: {
			filteredList = filteredList.filter((item: any) => {
				return dayjs(item.endAt).isAfter(dayjs());
			});
			break;
		}
		case ActivityType.completed: {
			filteredList = filteredList.filter((item: any) => {
				return item.completed === true;
			});
			break;
		}
		default: {
			break;
		}
	}

	completed = filteredList.filter((item: any) => item.completed === true);
	pending = filteredList.filter((item: any) => item.completed === false);

	return {
		completed,
		pending,
	};
};
