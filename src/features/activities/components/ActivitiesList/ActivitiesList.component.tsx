import { ScrollArea, LoadingOverlay } from '@mantine/core';

import { ActivityItem } from '../ActivityItem';
import { useStyles } from './ActivitiesList.styles';

interface ActivitiesListProps {
	list: any;
	isLoading: boolean;
}

export const ActivitiesList = ({ list, isLoading }: ActivitiesListProps) => {
	const { classes } = useStyles();

	return (
		<ScrollArea className={classes.listContainer}>
			<LoadingOverlay visible={isLoading} />
			{list.map((item: any) => {
				return (
					<ActivityItem
						key={item.id}
						id={item.id}
						title={item.title}
						note={item.note}
						completed={item.completed}
						job={item.job}
						activityCategory={item.activityCategory}
						endAt={item.endAt}
					/>
				);
			})}
		</ScrollArea>
	);
};
