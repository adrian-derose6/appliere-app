import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		wrapper: {
			marginBottom: '12px',
		},
		dateText: {
			fontSize: '16px',
			lineHeight: '16px',
			fontWeight: 500,
		},
		greetingText: {
			fontSize: '32px',
			lineHeight: '32px',
		},
		achievementsWidgetPaper: {
			display: 'inline-flex',
			alignItems: 'center',
			borderRadius: '60px',
			height: '48px',
			transition: 'background 200ms ease-in-out',
			color: '#6d6e6f',
		},
		menuRoot: {},
		statisticWrapper: {
			padding: '0 16px',
		},
		icon: {
			color: '#868e96',
			marginRight: '5px',
		},
		number: {
			fontSize: '22px',
			fontWeight: 500,
		},
		activity: {
			fontSize: '12px',
			marginLeft: '5px',
		},
	};
});
