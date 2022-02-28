import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		linkSection: {
			textDecoration: 'none',
			margin: 0,
			paddinTop: 0,
		},
		linkWrapper: {
			display: 'flex',
			alignItems: 'center',
			maxWidth: '100%',
			textDecoration: 'none',
			cursor: 'pointer',
			height: 44,
			padding: '0 12px',

			'&:hover': {
				backgroundColor: 'rgba(255,255,255,.08)',
			},
		},
		linkLabel: {
			fontSize: 15,
			fontFamily: theme.other.textFontFamily,
			fontWeight: 'normal',
			color: /*'#D3555E'*/ 'white',
		},
		accordianLinkLabel: {
			display: 'flex',
			alignItems: 'center',
		},
		navIcon: {
			marginRight: 10,
			color: 'white',
		},
	};
});
