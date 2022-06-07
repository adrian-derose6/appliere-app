import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	gridContainer: {
		paddingTop: '25px',
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fill, 300px)',
		gap: '15px',
	},
}));
