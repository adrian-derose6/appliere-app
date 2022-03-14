import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		dashboardWrapper: {
			marginTop: '18px',
			width: '100%',
		},
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
