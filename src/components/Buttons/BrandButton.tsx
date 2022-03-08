import {
	Button,
	createStyles,
	MantineTheme,
	useMantineTheme,
	ButtonProps,
} from '@mantine/core';

type Props = ButtonProps<any> & {
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

export const BrandButton = ({ children, ...props }: Props) => {
	const theme = useMantineTheme();
	const { classes } = useStyles();

	return (
		<Button classNames={{ root: classes.buttonRoot }} {...props}>
			{children}
		</Button>
	);
};
