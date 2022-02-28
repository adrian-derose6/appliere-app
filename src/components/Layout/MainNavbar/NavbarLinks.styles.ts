import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		linkSection: {
			textDecoration: 'none',
			margin: 0,
			paddinTop: 0,
		},
		link: {
			display: 'flex',
			alignItems: 'center',
			maxWidth: '100%',
			textDecoration: 'none',
			cursor: 'pointer',
			height: 44,
			padding: '0 12px',

			fontSize: 15,
			fontFamily: theme.other.textFontFamily,
			fontWeight: 'normal',
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
