import { MantineTheme } from '@mantine/core';

const useGlobalStyles = (theme: MantineTheme) => ({
	ul: {
		padding: 0,
	},
	li: {
		textDecoration: 'none',
		listStyle: 'none',
	},
	a: {
		textDecoration: 'none',
		color: 'inherit',
	},
});

export default useGlobalStyles;
