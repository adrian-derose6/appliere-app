import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		gridButton: {
			height: '64px',
			width: '100%',
			borderRadius: '7px',
			paddingLeft: '8px',
			position: 'relative',

			'&:hover': {
				backgroundColor: '#eceeef',
			},
		},
		hoverWrapper: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			minHeight: '100%',
			minWidth: '100%',
		},
		buttonLabel: {
			fontSize: '14px',
			lineHeight: '22px',
			overflow: 'hidden',
			textOverflow: 'ellipsis',
			whiteSpace: 'nowrap',
			color: '#1e1f21',
			fontWeight: 500,
		},
	};
});
