import { createStyles, MantineProvider, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => {
	return {
		headerRoot: {
			display: 'flex',
			width: 'calc(100vw - 60px)',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			padding: '0 10px',
			zIndex: 100,
		},
		headerLayout: {
			width: '100%',
			height: '100%',
		},
		tabsRoot: {
			maxHeight: '100%',
			borderBottom: 'none !important',
		},
		tabsListWrapper: {
			border: 'none !important',
		},
		tabControl: {
			fontSize: '15px',
			minHeight: '100%',
		},
		tabActive: {
			color: `${theme.other.brandPrimaryColor} !important`,
			borderBottomColor: `${theme.other.brandPrimaryColor} !important`,
		},
		tabLabel: {},
		buttonsWrapper: {},
	};
});
