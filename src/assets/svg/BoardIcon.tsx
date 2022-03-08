import { createStyles } from '@mantine/core';

import { BOARD_ICON_COLORS, Color } from './board-icon-colors';

interface BoardIconProps {
	color?: Color;
}

const useStyles = createStyles((theme) => {
	return {
		wrapper: {
			width: 48,
			height: 48,
			borderRadius: 12,
			boxShadow: 'inset 0 -2px rgb(0 0 0 / 5%)',
			alignItems: 'center',
			colorAdjust: 'exact',
			display: 'flex',
			fill: '#fff',
			flex: '0 0 auto',
			flexDirection: 'column',
			justifyContent: 'center',
		},
		iconMedium: {
			height: '24px',
			width: '24px',
			clipRule: 'evenodd',
			fillRule: 'evenodd',
		},
		fadedBlack: {
			fill: 'rgba(30, 31, 33, 0.75)',
		},
		white: {
			fill: '#fff',
		},
	};
});

export const getRandomColor = (colors: Color[]): Color => {
	return colors[Math.floor(Math.random() * colors.length)];
};

export const BoardIcon = ({ color }: BoardIconProps) => {
	const { classes } = useStyles();
	const assignedColor = color ? color : BOARD_ICON_COLORS[0];

	return (
		<div
			className={classes.wrapper}
			style={{ backgroundColor: assignedColor.hex }}
		>
			<svg className={classes.iconMedium} viewBox='0 0 24 24'>
				<path
					className={classes.fadedBlack}
					d='M5,21H1c-0.6,0-1-0.4-1-0.9v-7.2C0,12.4,0.4,12,1,12h4c0.6,0,1,0.4,1,0.9v7.2C6,20.6,5.6,21,5,21z'
				></path>
				<path
					className={classes.white}
					d='M5,9H1C0.4,9,0,8.6,0,8V4c0-0.5,0.4-1,1-1h4c0.6,0,1,0.5,1,1v4C6,8.6,5.6,9,5,9z M14,3h-4C9.4,3,9,3.5,9,4v12  c0,0.5,0.4,1,1,1h4c0.6,0,1-0.5,1-1V4C15,3.5,14.6,3,14,3z M23,3h-4c-0.5,0-1,0.5-1,1v4c0,0.6,0.5,1,1,1h4c0.5,0,1-0.4,1-1V4  C24,3.5,23.5,3,23,3z'
				></path>
			</svg>
		</div>
	);
};
