import { MantineTheme } from '@mantine/core';

export const useGlobalStyles = (theme: MantineTheme) => ({
	body: {
		margin: 0,
		fontFamily:
			'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
	},
	ul: {
		padding: 0,
		marginBlockStart: 0,
		marginBlockEnd: 0,
	},
	li: {
		textDecoration: 'none',
		listStyle: 'none',
	},
	a: {
		textDecoration: 'none',
		color: 'inherit',
	},
	h4: {
		fontSize: '20px',
		lineHeight: '28px',
		fontWeight: 500,
		color: '#1e1f21',
	},
});
