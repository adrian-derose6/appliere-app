import { Grid, Container } from '@mantine/core';

import { BoardsOverview } from '@/features/home/components/BoardsOverview/BoardsOverview.component';
import { ActivitiesOverview } from '../ActivitiesOverview/ActivitiesOverview.component';
import { ContactsOverview } from '../ContactsOverview/ContactsOverview.component';
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
