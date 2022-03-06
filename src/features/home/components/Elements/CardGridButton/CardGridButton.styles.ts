import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		gridButton: {
			height: '64px',
			width: '100%',
			borderRadius: '7px',
			paddingLeft: '8px',

			'&:hover': {
				backgroundColor: '#eceeef',
			},
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
