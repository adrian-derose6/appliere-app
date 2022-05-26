import { Outlet } from 'react-router-dom';
import { createStyles } from '@mantine/core';

import { ActivitiesNavigation } from './ActivitiesNavigation.component';

export function ActivitiesLayout() {
	const { classes } = useStyles();
	return (
		<>
			<ActivitiesNavigation />
			<section className={classes.section}>
				<Outlet />
			</section>
		</>
	);
}

const useStyles = createStyles((theme) => ({
	section: {
		minWidth: '100%',
		height: '100vh',
		boxSizing: 'border-box',
		paddingTop: 70,
		paddingLeft: 60,
		backgroundColor: theme.other.mainBackgroundColor,
	},
}));
