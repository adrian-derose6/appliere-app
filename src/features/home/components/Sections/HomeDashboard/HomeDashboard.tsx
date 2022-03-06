import { Grid, Container, Card, Title } from '@mantine/core';

import { BoardsOverview } from '@/features/home/components/Groups/BoardsOverview/BoardsOverview';

import { useStyles } from './HomeDashboard.styles';

export const HomeDashboard = () => {
	const { classes } = useStyles();

	return (
		<Container fluid padding={0} className={classes.dashboardWrapper}>
			<Grid align='stretch'>
				<Grid.Col span={6}>
					<BoardsOverview />
				</Grid.Col>
				<Grid.Col span={6}>
					<Card
						padding='lg'
						shadow='none'
						withBorder={true}
						radius='md'
						className={classes.summaryCard}
					>
						<Title order={3}>My Activities</Title>
						<Grid>
							<Grid.Col span={6}></Grid.Col>
							<Grid.Col span={6}></Grid.Col>
							<Grid.Col span={6}></Grid.Col>
							<Grid.Col span={6}></Grid.Col>
						</Grid>
					</Card>
				</Grid.Col>
				<Grid.Col span={12}>
					<Card
						padding='lg'
						shadow='none'
						withBorder={true}
						radius='md'
						className={classes.summaryCard}
					>
						<Title order={3}>People</Title>
						<Grid>
							<Grid.Col span={6}></Grid.Col>
							<Grid.Col span={6}></Grid.Col>
							<Grid.Col span={6}></Grid.Col>
							<Grid.Col span={6}></Grid.Col>
						</Grid>
					</Card>
				</Grid.Col>
			</Grid>
		</Container>
	);
};
