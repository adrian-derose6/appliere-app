import { Button, ButtonProps, createStyles } from '@mantine/core';
import { BsPlusLg } from 'react-icons/bs';

interface Props extends ButtonProps<'button'> {
	label: string;
	style?: {};
	iconSize?: string;
	onClick?: () => {};
}

const useStyles = createStyles((theme) => {
	return {
		addButton: {
			color: '#6d6e6f',
			fill: '#6d6e6f',
			boxSizing: 'border-box',
			transition: 'all 0.2s ease',

			'&:hover': {
				backgroundColor: '#e7e9fc',
				color: theme.other.brandDarkColor,
			},
		},
	};
});

export const AddButton = ({ label, style, iconSize }: Props) => {
	const { classes } = useStyles();

	return (
		<Button
			variant='subtle'
			color='lightgray'
			leftIcon={<BsPlusLg />}
			className={classes.addButton}
			style={style}
			styles={{ icon: { height: iconSize, width: iconSize } }}
		>
			{label}
		</Button>
	);
};
