import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		wrapper: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		dateText: {
			fontSize: '16px',
			lineHeight: '22px',
			fontWeight: 500,
		},
		greetingText: {
			fontSize: '32px',
			lineHeight: '44px',
		},
		achievementsWidgetWrapper: {
			display: 'grid',
			marginBottom: '12px',
			marginTop: '16px',
		},
		achievementsWidgetPaper: {
			alignItems: 'center',
			borderRadius: '60px',
			display: 'inline-flex',
			justifyContent: 'space-between',
			height: '48px',
			transition: 'background 200ms ease-in-out',
			color: '#6d6e6f',
		},
		menuRoot: {},
		statisticWrapper: {
			padding: '0 16px',
			alignItems: 'center',
			display: 'flex',
		},
		icon: {
			color: '#868e96',
			marginRight: '5px',
		},
		number: {
			fontSize: '26px',
			fontWeight: 500,
		},
		activity: {
			fontSize: '12px',
			marginLeft: '5px',
		},
	};
});
