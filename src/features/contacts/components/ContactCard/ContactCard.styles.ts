import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	container: {
		width: '100%',
		height: 222,
		margin: 'auto',
		borderRadius: '4px',
		border: '1px solid rgba(25, 4, 69, 0.1)',
		//boxShadow: 'rgb(25 4 69 / 5%) 0px 3px 7px -1px',
		boxShadow: theme.shadows.sm,
		boxSizing: 'border-box',
		backgroundColor: theme.colors.white,
		display: 'flex',
		flexDirection: 'column',
		cursor: 'pointer',
	},
	hoverWrapper: {
		height: '100%',
		width: '100%',
		position: 'absolute',
		zIndex: 200,
		opacity: 0,
		cursor: 'pointer',
		transition: 'all 0.2s ease',

		'&:hover': {
			opacity: 1,
		},
	},
	trashIconRoot: {
		position: 'absolute',
		right: 15,
		top: 15,
		color: theme.colors.gray[6],
		border: '1px solid rgba(25, 4, 69, 0.1)',
		zIndex: 250,
		boxShadow: 'rgb(25 4 69 / 3%) 0px 1px 3px',

		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	topSection: {
		padding: '15px 15px 17px',
		boxSizing: 'border-box',
		height: '87px',
		borderBottom: '1px solid rgba(25, 4, 69, 0.1)',
		backgroundColor: theme.other.mainBackgroundColor,
	},
	nameText: {
		fontSize: '16px',
		fontWeight: 500,
		color: theme.other.brandDarkColor,
	},
	companyText: {
		fontSize: '13px',
		color: theme.colors.gray[6],
	},
	contactAvatar: {
		border: '1px solid rgba(25, 4, 69, 0.1)',
		boxShadow: 'rgb(25 4 69 / 5%) 0px 3px 7px -1px',
	},
	middleSection: {
		padding: '15px',
	},
	infoGroup: {
		color: theme.colors.gray[5],
	},
	infoText: {
		fontSize: '13px',
		lineHeight: '18px',
		textOverflow: 'ellipsis',
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		textAlign: 'left',
		fontWeight: 400,
		letterSpacing: '0px',
	},
	bottomSection: {
		padding: '4px 10px',
		borderTop: '1px solid rgba(25, 4, 69, 0.1)',
	},
	createdByText: {
		fontSize: '10px',
		color: theme.colors.gray[5],
		height: '100%',
	},
}));
