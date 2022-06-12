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
	contactSelectInput: {
		minHeight: '30px !important',
		height: '30px !important',
		width: '120px !important',
		paddingRight: '12px',
	},
	contactSelectRight: {
		display: 'none',
	},
	emptyContactsMenu: {
		marginLeft: '10px',
		fontSize: '16px',
		fontWeight: 500,
		color: theme.colors.gray[5],
	},
	emptyContainer: {
		height: '100%',
		flexDirection: 'column',
	},
	emptyText: {
		fontSize: '20px',
		color: theme.colors.gray[6],
	},
}));
