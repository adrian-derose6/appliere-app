import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => {
	return {
		boardWrapper: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'start',
			width: '100%',
			height: '100%',
			padding: '0 12px',
			flexWrap: 'nowrap',
		},
	};
});
