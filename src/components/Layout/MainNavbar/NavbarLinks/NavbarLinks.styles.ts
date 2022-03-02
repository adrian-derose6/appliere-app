import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		linkSection: {
			textDecoration: 'none',
			margin: 0,
			paddingTop: 0,
		},
		linkWrapper: {
			display: 'flex',
			alignItems: 'center',
			maxWidth: '100%',
			textDecoration: 'none',
			cursor: 'pointer',
			height: 38,
			padding: '0 12px',
			borderRadius: '6px',

			'&:hover': {
				backgroundColor: 'rgba(255,255,255,.08)',
			},
		},
		divider: {
			borderTop: '1px solid red',
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
