import { Grid, Container, Card, Title } from '@mantine/core';

import { BoardsOverview } from '@/features/home/components/3-Groups/BoardsOverview/BoardsOverview';
import { ActivitiesOverview } from '../../3-Groups/ActivitiesOverview/ActivitiesOverview';
import { ContactsOverview } from '../../3-Groups/ContactsOverview/ContactsOverview';

import { useStyles } from './HomeDashboard.styles';

export const HomeDashboard = () => {
	const { classes } = useStyles();

	return (
		<Container fluid className={classes.dashboardWrapper}>
			<Grid align='stretch'>
				<Grid.Col span={6}>
					<BoardsOverview />
				</Grid.Col>
				<Grid.Col span={6}>
					<ActivitiesOverview />
				</Grid.Col>
				<Grid.Col span={12}>
					<ContactsOverview />
				</Grid.Col>
			</Grid>
		</Container>
	);
};
