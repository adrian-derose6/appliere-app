import { ScrollArea } from '@mantine/core';

import { ActivityItem } from '../ActivityItem';
import { useStyles } from './ActivitiesList.styles';

interface ActivitiesListProps {
	list: any;
}

export const ActivitiesList = ({ list }: ActivitiesListProps) => {
	const { classes } = useStyles();

	return (
		<ScrollArea className={classes.listContainer}>
			{list.map((item: any) => {
				return <ActivityItem item={item} />;
			})}
		</ScrollArea>
	);
};
