import { Grid } from '@mantine/core';

import { useStyles } from './HomeDashboard.styles';

export const HomeDashboard = () => {
	const { classes } = useStyles();

	return (
		<Grid>
			<Grid.Col span={6}></Grid.Col>
			<Grid.Col span={6}></Grid.Col>
			<Grid.Col span={12}></Grid.Col>
		</Grid>
	);
};
