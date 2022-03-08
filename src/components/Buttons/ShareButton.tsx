import {
	Button,
	createStyles,
	MantineTheme,
	useMantineTheme,
	ButtonProps,
} from '@mantine/core';
import { BsShare } from 'react-icons/bs';

type Props = ButtonProps<any> & {
	children: React.ReactNode;
};

const useStyles = createStyles((theme: MantineTheme) => {
	return {
		buttonRoot: {},
	};
});

export const ShareButton = ({ children, ...props }: Props) => {
	const { classes } = useStyles();

	return (
		<Button
			classNames={{ root: classes.buttonRoot }}
			{...props}
			leftIcon={<BsShare />}
		>
			{children}
		</Button>
	);
};
