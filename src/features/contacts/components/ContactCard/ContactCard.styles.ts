import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	container: {
		height: 222,
		margin: 'auto',
		borderRadius: '4px',
		border: '1px solid rgba(25, 4, 69, 0.1)',
		boxShadow: 'rgb(25 4 69 / 5%) 0px 3px 7px -1px',
		boxSizing: 'border-box',
		backgroundColor: theme.colors.white,
	},
}));
