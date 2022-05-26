import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		itemContainer: {
			minHeight: '42px',
			width: '100%',
			borderRadius: '8px',
			boxSizing: 'border-box',
			transition: 'all 0.4s ease-out 0s',
			cursor: 'pointer',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			padding: '0 10px',

			'&:hover': {
				backgroundColor: theme.colors.gray[2],
			},
		},
		control: {},
		titleInput: {
			paddingLeft: '0px',
			border: 'none',
			boxShadow: 'none',
			margin: '0px',
			height: '30px',
			fontWeight: 'normal',
			fontSize: '14px',
			color: theme.other.brandDarkColor,
			textAlign: 'left',
		},
	};
});
