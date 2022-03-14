import { Card, Title } from '@mantine/core';

import { useStyles } from './ContactsOverview.styles';

export const ContactsOverview = () => {
	const { classes } = useStyles();

	return (
		<Card
			padding='lg'
			shadow='none'
			withBorder={true}
			radius='md'
			className={classes.summaryCard}
		>
			<Title order={3}>People</Title>
		</Card>
	);
};
