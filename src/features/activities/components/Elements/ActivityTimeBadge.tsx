import { Badge, createStyles } from '@mantine/core';
import dayjs from '@/lib/dayjs';

const timeColors = {
	urgent: 'red',
	future: 'green',
	completed: 'gray',
};

interface Props {
	time: string;
	completed?: boolean;
}

export const ActivityTimeBadge = ({ time, completed }: Props) => {
	const { classes } = useStyles();
	const timeObj = dayjs(time);
	const color = getTimeColor(timeObj, completed);
	const timeString = timeObj.fromNow();

	return (
		<Badge radius='sm' color={color} classNames={{ inner: classes.inner }}>
			{timeString}
		</Badge>
	);
};

const useStyles = createStyles((theme) => ({
	inner: {
		textTransform: 'capitalize',
	},
}));

function getTimeColor(timeObj: dayjs.Dayjs, completed?: boolean) {
	const today = dayjs();
	if (timeObj.isTomorrow() || timeObj.isBefore(today)) {
		return timeColors.urgent;
	}
	if (timeObj.isAfter(today)) {
		return timeColors.future;
	}
	if (completed) {
		return timeColors.completed;
	}
	return timeColors.completed;
}
