import { Container } from '@mantine/core';
import { useStyles } from './HomeLayout.styles';

interface HomeLayoutProps {
	children?: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
	const { classes } = useStyles();

	return (
		<Container fluid className={classes.pageWrapper}>
			<Container fluid className={classes.contentWrapper}>
				<Container fluid className={classes.content}>
					{children}
				</Container>
			</Container>
		</Container>
	);
};
