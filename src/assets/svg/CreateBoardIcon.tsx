import { createStyles } from '@mantine/core';

interface stylesProps {
	hovered?: boolean;
}

interface CreateBoardIconProps {
	hovered?: boolean;
}

const useStyles = createStyles((theme, { hovered }: stylesProps) => {
	return {
		wrapper: {
			width: 48,
			height: 48,
			borderRadius: 12,
			display: 'flex',
			flex: '0 0 auto',
			flexDirection: 'column',
			justifyContent: 'center',
			border: hovered ? '1px dashed #1e1f21' : '1px dashed#6d6e6f',
		},
		innerIcon: {
			fill: hovered ? '#1e1f21' : '#6d6e6f',
			transition: '200ms fill,200ms stroke',
		},
	};
});

export const CreateBoardIcon = ({ hovered }: CreateBoardIconProps) => {
	const { classes } = useStyles({ hovered });

	return (
		<div className={classes.wrapper}>
			<svg className='small' focusable='false' viewBox='0 0 48 48'>
				<path
					d='M32,24c0,0.6-0.4,1-1,1h-6v6c0,0.6-0.4,1-1,1s-1-0.4-1-1v-6h-6c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1h6v-6c0-0.6,0.4-1,1-1 s1,0.4,1,1v6h6C31.6,23,32,23.4,32,24z'
					className={classes.innerIcon}
				></path>
			</svg>
		</div>
	);
};
