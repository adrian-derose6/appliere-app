import { createStyles, MantineTheme } from '@mantine/core';

interface styleProps {
	expand: boolean;
}

export const useStyles = createStyles(
	(theme: MantineTheme, { expand }: styleProps) => {
		return {
			// Navbar Styles
			navbar: {
				backgroundColor: '#1e1f21',
				color: 'white',
				transition: 'all 0.1s',
				transform: 'translateZ(0px)',
				border: 'none',
				boxShadow: 'none',
				width: '60px',
				zIndex: 200,
				'&:hover': {
					width: '240px',
					boxShadow: '0 0 50px 0 rgba(0, 0, 0, 0.6)',
				},
			},
			// Nav Logo Styles
			logoLink: {
				position: 'relative',
				maxWidth: '100%',
				padding: '10px 0 10px 50px',
				color: '#deebff',
				transition: 'color 0.1s',
				cursor: 'pointer',
				display: 'flex',
				alignItems: 'center',
			},
			logoIcon: {
				position: 'absolute',
				left: '12px',
				top: '30%',
				bottom: 0,
				margin: 'auto',
			},
			logoText: {
				fontStyle: 'normal',
				fontWeight: 'normal',
				fontSize: 25,
				lineHeight: 1,
				fontFamily: theme.other.brandFontFamily,
				textAlign: 'center',
				textAnchor: 'middle',
				cursor: 'pointer',
				//right: expand ? '0px' : '6px',
				visibility: expand ? 'visible' : 'hidden',
				opacity: expand ? 1 : 0,
				transition: 'all 0.1s',
				transitionProperty: 'visibility, opacity',
			},
			divider: {
				maxWidth: '100%',
				margin: '0 5px',
				transition: 'all 0.1s',
				transitionProperty: 'margin',
			},
			bottom: {
				padding: '10px',
			},
		};
	}
);
