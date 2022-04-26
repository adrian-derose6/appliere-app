import {
	Button,
	createStyles,
	MantineTheme,
	useMantineTheme,
	ButtonProps,
} from '@mantine/core';

type Props = ButtonProps<'button'> & {
	children: React.ReactNode;
};

const useStyles = createStyles((theme: MantineTheme) => {
	return {
		buttonRoot: {
			backgroundColor: theme.other.brandPrimaryColor,
			color: 'white',
			'&:hover': {
				backgroundColor: '#b44951',
			},
		},
	};
});

export const BrandButton = ({ children, ...buttonProps }: Props) => {
	const theme = useMantineTheme();
	const { classes } = useStyles();

	return (
		<Button classNames={{ root: classes.buttonRoot }} {...buttonProps}>
			{children}
		</Button>
	);
};
