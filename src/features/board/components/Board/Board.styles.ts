import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		boardWrapper: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'start',
			width: '100%',
			height: 'calc(100vh - 50px)',
			padding: '0 12px',
			flexWrap: 'nowrap',
			backgroundColor: '#f9f8f8',
		},
		addButton: { fontSize: '16px', marginTop: 25, marginLeft: 10 },
	};
});
