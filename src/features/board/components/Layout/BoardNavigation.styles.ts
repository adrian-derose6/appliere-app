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
		},
		headerLayout: {
			width: '100%',
		},
		tabsRoot: {
			maxHeight: '100%',
		},
		buttonsWrapper: {},
	};
});
