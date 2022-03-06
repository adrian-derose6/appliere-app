import { Container } from '@mantine/core';
import { useStyles } from './HomeLayout.styles';

interface HomeLayoutProps {
	children?: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
	const { classes } = useStyles();

	return (
		<Container fluid padding={0} className={classes.pageWrapper}>
			<Container fluid className={classes.contentWrapper}>
				<Container fluid padding={0} className={classes.content}>
					{children}
				</Container>
			</Container>
		</Container>
	);
};
