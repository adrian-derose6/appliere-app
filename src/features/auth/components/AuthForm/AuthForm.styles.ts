import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		form: {
			width: '400px',
			boxSizing: 'border-box',
			backgroundColor: 'white',
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
			fontWeight: 500,
			fontSize: 30,
			marginLeft: 5,
			color: theme.other.brandPrimaryColor,
			lineHeight: 1,
			fontFamily: theme.other.brandFontFamily,
			textAlign: 'center',
			textAnchor: 'middle',
		},
		hasAccountText: {
			margin: 0,
			marginTop: '1rem',
			textAlign: 'center',
			color: 'gray',
			fontSize: '0.9rem',

			a: {
				marginLeft: '10px',
				color: theme.other.brandPrimaryColor,
				cursor: 'pointer',
				fontSize: '0.9rem',

				'&:hover': {
					textDecoration: 'underline',
				},
			},
		},
		errorText: {
			color: theme.other.brandPrimaryColor,
		},
		loginForm: {},
	};
});
