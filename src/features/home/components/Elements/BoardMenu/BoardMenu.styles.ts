import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
	menuRoot: {
		backgroundColor: 'transparent',

		'&:hovered': {
			backgroundColor: 'white',
		},
		zIndex: 500,
	},
}));
