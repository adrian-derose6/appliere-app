import { pointerWithin } from '@dnd-kit/core';
import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		card: {
			height: '100px',
			maxWidth: '280px',
			border: '1px solid rgba(25, 4, 69, 0.1)',
			borderRadius: '4px',
			marginBottom: '7px',
			padding: 0,
			color: 'white',
			backgroundColor: 'rgba(10, 180, 87, 0.85)',
			boxShadow: 'rgb(25 4 69 / 3%) 0px 1px 3px',
			cursor: 'pointer',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			position: 'relative',
			zIndex: 100,
			transition: 'all 0.2s ease',

			'&:hover': {
				border: '1px solid rgba(25, 4, 69, 0.4)',
			},
		},
		hoverWrapper: {
			height: '100%',
			width: '100%',
			position: 'absolute',
			zIndex: 200,
			opacity: 0,
			cursor: 'pointer',
			transition: 'all 0.2s ease',

			'&:hover': {
				opacity: 1,
			},
		},
		trashIconRoot: {
			position: 'absolute',
			right: 10,
			top: 10,
			color: 'white',
			border: '1px solid rgba(25, 4, 69, 0.1)',
			zIndex: 250,
			boxShadow: 'rgb(25 4 69 / 3%) 0px 1px 3px',

			'&:hover': {
				backgroundColor: 'transparent',
			},
		},
		info: {
			width: '100%',
			padding: '10px 10px 7px 11px',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'start',
			textOverflow: 'ellipsis',
			overflow: 'hidden',
			whiteSpace: 'nowrap',
		},
		avatar: {
			boxShadow:
				'rgb(25 4 69 / 10%) 0px 4px 10px, rgb(25 4 69 / 20%) 0px 0px 2px',
		},
		title: {
			fontWeight: 700,
			fontSize: '14px',
		},
		company: {
			opacity: 0.7,
			fontSize: '13px',
		},
		misc: {
			padding: '5px 7px',
		},
		timeAgo: {
			fontSize: 11,
		},
	};
});
