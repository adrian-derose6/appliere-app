import { Badge, createStyles } from '@mantine/core';

import { CATEGORY_SELECTION } from '../../constants/category-selection';

export const ActivityBadge = ({
	label,
	value,
}: {
	label: string;
	value: string;
}) => {
	const { classes } = useStyles();

	const backgroundColor = CATEGORY_SELECTION.find(
		(item) => item.value === value
	)?.color;

	return (
		<Badge
			variant='filled'
			radius='sm'
			color='green'
			classNames={{ inner: classes.badgeInner }}
			sx={{ backgroundColor }}
		>
			{label}
		</Badge>
	);
};

const useStyles = createStyles((theme) => {
	return {
		badgeInner: {
			textTransform: 'capitalize',
		},
	};
});
