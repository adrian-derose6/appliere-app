import { Center, createStyles } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { BsPlusLg } from 'react-icons/bs';
import { IconContext } from 'react-icons';

type Props = {
	color?: string;
	size?: string;
	hoverable?: boolean;
};

type StylesProps = { hovered: boolean };

const useStyles = createStyles((theme, { hovered }: StylesProps) => {
	return {
		root: {
			height: '28px',
			width: '28px',
			borderRadius: '6px',
			backgroundColor: hovered ? '#e7e9fc' : 'transparent',
			color: hovered ? theme.other.brandColorDark : '#6d6e6f',
		},
	};
});

export const PlusIcon = ({ size }: Props) => {
	const { hovered, ref } = useHover();
	const { classes } = useStyles({ hovered });

	return (
		<Center ref={ref} className={classes.root}>
			<IconContext.Provider
				value={{ size, style: { transition: 'all 0.2s ease' } }}
			>
				<BsPlusLg />
			</IconContext.Provider>
		</Center>
	);
};
