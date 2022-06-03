import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	container: {
		boxShadow: 'rgb(25 4 69 / 5%) 0px 2px 7px',
		border: '1px solid rgba(25, 4, 69, 0.1)',
		borderRadius: '4px',
		transition: 'all .2s ease',
		minHeight: '40px',
		boxSizing: 'border-box',
	},
	inputGroup: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-apart',
		height: 40,
	},
	inputLabel: {
		color: theme.other.brandDarkColor,
		fontSize: '14px',
		fontWeight: 500,
		marginBottom: '4px',
	},
	input: {
		width: '100%',
		border: 'none',
		boxShadow: 'none',
		minHeight: '100%',
	},
	selectInput: {
		height: '22px !important',
		fontWeight: 400,
		color: theme.colors.gray[6],
	},
	cancelIcon: {
		color: theme.colors.gray[5],
	},
}));
