import { createStyles } from '@mantine/core';

interface styleProps {
	expand: boolean;
}

export const useStyles = createStyles((theme, { expand }: styleProps) => {
	return {
		userTab: {
			position: 'relative',
			backgroundColor: '#495057',
			maxWidth: '100%',
			height: 42,
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			cursor: 'pointer',
			padding: '7px',
		},
		avatarOverlay: {
			position: 'absolute',
			left: 0,
			top: 0,
			bottom: 0,
			margin: 'auto',
			zIndex: 100,
			height: 17,
			width: 39,
			backgroundColor: '#495057',
		},
		avatar: {
			zIndex: 200,
		},
		nameText: {
			fontFamily: theme.other.textFontFamily,
			position: 'relative',
			color: 'white',
			fontSize: 15,
			lineHeight: '15px',
			display: expand ? 'inline' : 'none',
			opacity: expand ? 1 : 0,
			overflow: 'hidden',
			whiteSpace: 'nowrap',
			transition: 'all 1ms',
			transitionProperty: 'visibility, opacity',
			marginLeft: '-30px',
			zIndex: 50,
		},
		settingsIcon: {
			display: 'flex',
			justifyContent: 'flex-end',
			alignItems: 'center',
			visibility: expand ? 'visible' : 'hidden',
			opacity: expand ? 1 : 0,
			transition: 'all 0.1s',
			transitionProperty: 'visibility, opacity',
		},
	};
});
