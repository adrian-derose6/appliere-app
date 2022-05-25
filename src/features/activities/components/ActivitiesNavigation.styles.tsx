import { createStyles, MantineTheme } from '@mantine/core';

interface styleProps {}

export const useStyles = createStyles((theme: MantineTheme) => {
	return {
		// Navbar Styles
		navbar: {
			backgroundColor: 'white',
			color: 'black',
			width: '200px',
			height: '100vh !important',
			zIndex: 100,
		},

		//Tabs
		tabsRoot: {
			minHeight: '100vh',
		},
		tabsListWrapper: {
			width: '110px',
			paddingTop: '20px',
			borderRight: 'none !important',
		},
		tabsList: {
			border: 'none',
		},
		tabControl: {
			margin: '5px 0',
		},
		tabInner: {
			justifyContent: 'flex-end',
		},
		tabsBody: {},
		dividerTab: {
			cursor: 'default !important',
			margin: 0,
		},
	};
});
