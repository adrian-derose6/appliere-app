import { Grid, Container, Card } from '@mantine/core';

import { useStyles } from './HomeDashboard.styles';

export const HomeDashboard = () => {
	const { classes } = useStyles();

	return (
		<Container fluid padding={8} className={classes.dashboardWrapper}>
			<Grid align='stretch'>
				<Grid.Col span={6}></Grid.Col>
				<Grid.Col span={6}></Grid.Col>
				<Grid.Col span={12}></Grid.Col>
			</Grid>
		</Container>
	);
};
