import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => {
	return {
		summaryCard: {
			height: '400px',
		},
		cardHeader: {
			alignItems: 'center',
			display: 'flex',
			height: '28px',
			justifyContent: 'space-between',
		},
	};
});
