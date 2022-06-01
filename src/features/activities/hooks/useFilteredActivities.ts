import dayjs from '@/lib/dayjs';

import { ActivityType } from '../types';

interface Props {
	type: string;
	activityCategory?: any;
	list: any;
}

export const useFilteredActivities = ({
	type,
	list,
	activityCategory,
}: Props) => {
	let completed;
	let pending;

	if (!list || list.length === 0) {
		return {
			completed: [],
			pending: [],
		};
	}

	let filteredList = [];
	switch (type) {
		case ActivityType.all: {
			filteredList = [...list];
			break;
		}
		case ActivityType.dueToday: {
			filteredList = list.filter((item: any) => {
				return dayjs(item.endAt).isToday();
			});
			break;
		}
		case ActivityType.pastDue: {
			filteredList = list.filter((item: any) => {
				return dayjs(item.endAt).isBefore(dayjs());
			});
			break;
		}
		case ActivityType.pending: {
			filteredList = list.filter((item: any) => {
				return dayjs(item.endAt).isAfter(dayjs());
			});
			break;
		}
		case ActivityType.completed: {
			filteredList = list.filter((item: any) => {
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
