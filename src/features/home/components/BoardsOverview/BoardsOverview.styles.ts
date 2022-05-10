import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		summaryCard: {
			height: '400px',
		},
		loaderWrapper: {
			height: '100%',
			width: '100%',
		},
		cardHeader: {
			alignItems: 'center',
			display: 'flex',
			height: '28px',
			justifyContent: 'space-between',
		},
		gridContainer: {
			paddingTop: '15px',
		},
		gridColumn: {
			marginBottom: '6px',
		},
	};
});
