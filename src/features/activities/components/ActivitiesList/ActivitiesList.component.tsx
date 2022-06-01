import { ScrollArea, LoadingOverlay } from '@mantine/core';

import { ActivityItem } from '../ActivityItem';
import { useStyles } from './ActivitiesList.styles';

interface ActivitiesListProps {
	completed: any;
	pending: any;
	isLoading: boolean;
}

export const ActivitiesList = ({
	completed,
	pending,
	isLoading,
}: ActivitiesListProps) => {
	const { classes } = useStyles();

	return (
		<ScrollArea className={classes.listContainer}>
			<LoadingOverlay visible={isLoading} />
			{pending.map((item: any) => {
				return (
					<ActivityItem
						key={item.id}
						id={item.id}
						title={item.title}
						note={item.note}
						completed={item.completed}
						job={item.job}
						activityCategory={item.activityCategory}
						startAt={item.startAt}
						endAt={item.endAt}
					/>
				);
			})}
			{completed.map((item: any) => {
				return (
					<ActivityItem
						key={item.id}
						id={item.id}
						title={item.title}
						note={item.note}
						completed={item.completed}
						job={item.job}
						activityCategory={item.activityCategory}
						startAt={item.startAt}
						endAt={item.endAt}
					/>
				);
			})}
		</ScrollArea>
	);
};
