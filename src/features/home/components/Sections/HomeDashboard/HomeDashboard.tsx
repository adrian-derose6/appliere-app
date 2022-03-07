import { Grid, Container, Card, Title } from '@mantine/core';

import { BoardsOverview } from '@/features/home/components/Groups/BoardsOverview/BoardsOverview';
import { ActivitiesOverview } from '../../Groups/ActivitiesOverview/ActivitiesOverview';
import { ContactsOverview } from '../../Groups/ContactsOverview/ContactsOverview';

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
					<ActivitiesOverview />
				</Grid.Col>
				<Grid.Col span={12}>
					<ContactsOverview />
				</Grid.Col>
			</Grid>
		</Container>
	);
};
