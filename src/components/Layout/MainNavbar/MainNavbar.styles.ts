import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		navbar: {
			backgroundColor: '#1e1f21',
		},
		linkSection: {
			textDecoration: 'none',
			margin: 0,
		},
		link: {
			display: 'flex',
			alignItems: 'center',
			maxWidth: '100%',
			textDecoration: 'none',
			cursor: 'pointer',
			height: 44,
			padding: '0 24px',

			fontSize: 16,
			fontFamily: theme.other.textFontFamily,
			color: /*'#D3555E'*/ 'white',
			'&:hover': {
				backgroundColor: 'rgba(255,255,255,.08);',
			},
		},
		navIcon: {
			marginRight: 10,
		},
	};
});
