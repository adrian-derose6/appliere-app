import { createStyles, MantineTheme } from '@mantine/core';

interface styleProps {}

export const useStyles = createStyles((theme: MantineTheme) => {
	return {
		//Tabs
		tabsRoot: {
			minHeight: '100vh',
		},
		tabsListWrapper: {
			width: '110px',
			paddingTop: '45px',
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
		tabsBody: {
			minWidth: '100%',
			height: '100vh',
			boxSizing: 'border-box',
		},
		dividerTab: {
			cursor: 'default !important',
			margin: 0,
		},
	};
});
