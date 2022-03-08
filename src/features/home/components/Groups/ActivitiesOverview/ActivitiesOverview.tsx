import { Card, Container, Tabs, Title } from '@mantine/core';

import { useStyles } from './AcitivitiesOverview.styles';

export const ActivitiesOverview = () => {
	const { classes } = useStyles();

	return (
		<Card
			padding={24}
			shadow='none'
			withBorder={true}
			radius='md'
			className={classes.summaryCard}
		>
			<Container fluid padding={0} className={classes.cardHeader}>
				<Title order={3}>Activities</Title>
			</Container>
			<Tabs
				color='gray'
				tabPadding='md'
				classNames={{ tabLabel: classes.tabLabel }}
			>
				<Tabs.Tab label='Upcoming'>Upcoming tab content</Tabs.Tab>
				<Tabs.Tab label='Overdue'>Overdue tab content</Tabs.Tab>
				<Tabs.Tab label='Completed'>Completed tab content</Tabs.Tab>
			</Tabs>
		</Card>
	);
};
