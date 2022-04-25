import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles(
	(theme: MantineTheme, { visible }: { visible: boolean }) => ({
		menuRoot: {
			backgroundColor: 'transparent',
			opacity: visible ? 1 : 0,
			'&:hovered': {
				backgroundColor: 'white',
			},
			zIndex: 500,
		},
	})
);
