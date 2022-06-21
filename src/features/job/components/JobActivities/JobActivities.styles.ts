import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	pageWrapper: {
		margin: 0,
		width: '100%',
		height: '100%',
		boxSizing: 'border-box',
		padding: '0 25px',
	},
	header: {
		height: '60px',
		marginBottom: '5px',
		borderBottom: '1px solid #e9ecef',
	},
	headingMain: {
		fontSize: '20px',
		fontWeight: 500,
		color: theme.other.brandDarkColor,
	},
	headingSub: {
		fontSize: '20px',
		fontWeight: 400,
		color: theme.colors.gray[6],
	},
	emptyContainer: {
		height: '100%',
		flexDirection: 'column',
		marginTop: '150px',
	},
	emptyText: {
		fontSize: '20px',
		color: theme.colors.gray[6],
	},
}));
