import { Outlet } from 'react-router-dom';
import { createStyles } from '@mantine/core';

import { BoardNavigation } from './BoardNavigation.components';

export function BoardLayout() {
	const { classes } = useStyles();
	return (
		<>
			<BoardNavigation />
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
		paddingTop: 50,
	},
}));
