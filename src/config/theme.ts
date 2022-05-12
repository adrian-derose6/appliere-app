import { MantineTheme, MantineThemeOverride } from '@mantine/core';

export const themeConfig: MantineThemeOverride = {
	headings: {
		fontFamily: 'Segoe UI, sans-serif',
		fontWeight: 500,
	},
	primaryColor: 'red',
	other: {
		brandFontFamily: 'Comfortaa, cursive',
		textFontFamily: 'Fredoka, sans-serif' /*'Quicksand, sans-serif'*/,
		secondaryFontFamily: 'Roboto, sans-serif',
		brandPrimaryColor: '#D3555E',
		brandDarkColor: '#1e1f21',

		letterSpacing: '1px',
		/* Layout */
		fixedWidth: '500px',
		borderRadius: '0.25rem',

		/* Box Shadow */
		shadow2:
			'0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
		shadow4:
			'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',

		/* Transition */
		transition1: '0.3s ease-in-out all',
	},
};

export const libraryStyles = {
	TextInput: (theme: MantineTheme) => ({
		input: {
			boxShadow: 'rgb(25 4 69 / 5%) 0px 2px 7px',
			border: '1px solid rgba(169, 169, 169, 0.6)',
			transition: 'all .2s ease',
		},
		label: {
			color: '#6d6e6f',
		},
	}),
	PasswordInput: (theme: MantineTheme) => ({
		input: {
			boxShadow: 'rgb(25 4 69 / 5%) 0px 2px 7px',
			border: '1px solid rgba(169, 169, 169, 0.6)',
			transition: 'all .2s ease',
		},
		label: {
			color: '#6d6e6f',
		},
	}),
	Checkbox: (theme: MantineTheme) => ({
		input: {
			'&:checked': {
				backgroundColor: theme.other.brandPrimaryColor,
				borderColor: theme.other.brandPrimaryColor,
			},
		},
	}),
};
