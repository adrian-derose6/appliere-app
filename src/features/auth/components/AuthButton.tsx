import { createStyles, useMantineTheme } from '@mantine/core';
import { Button, ButtonProps } from '@mantine/core';

interface AuthButtonProps extends ButtonProps<'button'> {
	children: React.ReactNode;
}

const useStyles = createStyles((theme) => {
	return {
		root: {
			backgroundColor: theme.other.brandPrimaryColor,
			transition: theme.other.transition1,

			'&:hover': {
				backgroundColor: theme.other.brandPrimaryColor,
				filter: 'brightness(85%)',
			},
		},
		label: {},
	};
});

export const AuthButton = ({ children, ...props }: AuthButtonProps) => {
	const { classes } = useStyles();

	return (
		<Button
			fullWidth
			classNames={{ root: classes.root, label: classes.label }}
			{...props}
		>
			{children}
		</Button>
	);
};
