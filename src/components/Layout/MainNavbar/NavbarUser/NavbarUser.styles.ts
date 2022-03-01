import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		wrapper: {
			backgroundColor: 'rgba(255,255,255,.16)',
			height: 40,
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			cursor: 'pointer',
			padding: '0 7px',
		},
		userWrapper: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
		nameText: {
			fontFamily: theme.other.textFontFamily,
			color: 'white',
			padding: 10,
		},
		settingsIcon: {
			display: 'flex',
			justifyContent: 'flex-end',
			alignItems: 'center',
		},
	};
});
