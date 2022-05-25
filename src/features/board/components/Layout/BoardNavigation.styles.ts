import { createStyles, MantineProvider, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => {
	return {
		headerRoot: {
			display: 'flex',
			width: 'calc(100% - 60px)',
			boxSizing: 'border-box',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			padding: '0 20px 0 20px',
			zIndex: 100,
		},
		headerLayout: {
			width: '100%',
			height: '100%',
		},
		selectBoardInput: {
			boxShadow: 'none',
			border: 'none',
			transition: 'all .2s ease',
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
		label: {
			paddingLeft: 20,
			paddingRight: 20,
		},
		controlLabelActive: {
			color: `${theme.other.brandPrimaryColor} !important`,
		},
	};
});
