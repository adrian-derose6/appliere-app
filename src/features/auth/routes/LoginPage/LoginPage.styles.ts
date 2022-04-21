import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		wrapper: {
			minHeight: '100vh',
			backgroundColor: '#f9f8f8',
		},
		form: {
			width: '400px',
			boxSizing: 'border-box',
			background: theme.colors.white,
			borderRadius: theme.other.borderRadius,
			boxShadow: theme.other.shadow2,
			borderTop: `5px solid ${theme.other.brandPrimaryColor}`,
			padding: '2rem 2.5rem',
			margin: '3rem auto',
			transition: theme.other.transition1,

			'&:hover': {
				boxShadow: theme.other.shadow4,
			},
		},
		logoContainer: {
			margin: '0 auto 1.38rem',
			display: 'flex',
			flexDirection: 'row',
		},
		logoText: {
			fontStyle: 'normal',
			fontWeight: 'normal',
			fontSize: 35,
			color: theme.other.brandPrimaryColor,
			lineHeight: 1,
			fontFamily: theme.other.brandFontFamily,
			textAlign: 'center',
			textAnchor: 'middle',
		},
		loginForm: {},
	};
});
