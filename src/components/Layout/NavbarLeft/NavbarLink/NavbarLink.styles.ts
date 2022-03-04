import { createStyles } from '@mantine/core';

interface styleProps {
	expand: boolean;
}

export const useStyles = createStyles((theme, { expand }: styleProps) => {
	return {
		navLink: {
			position: 'relative',
			maxWidth: '100%',
			height: '42px',
			lineHeight: '42px',
			paddingLeft: '52px',
			color: '#deebff',
			transition: 'color 0.1s',
			cursor: 'pointer',
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',

			'&:hover': {
				backgroundColor: 'rgba(255,255,255,.08)',
			},
		},
		navLinkIcon: {
			position: 'absolute',
			left: '20px',
			top: 0,
			bottom: 0,
			margin: 'auto',
		},
		navLinkLabel: {
			fontSize: 15,
			fontFamily: theme.other.textFontFamily,
			fontWeight: 'normal',
			maxHeight: '100%',
			//right: expand ? '0px' : '12px',
			visibility: expand ? 'visible' : 'hidden',
			opacity: expand ? 1 : 0,
			position: 'relative',
			margin: 0,
			transition: 'all 0.1s',
			transitionProperty: 'visibility, opacity',
			overflow: 'hidden',
		},
		innerLink: {
			'&:hover': {
				textDecoration: 'underline',
			},
		},
		chevron: {
			marginRight: '18px',
		},
	};
});
