import { useStyles } from './HomeLayout.styles';

interface HomeLayoutProps {
	children?: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
	const { classes } = useStyles();

	return (
		<div className={classes.pageWrapper}>
			<div className={classes.contentWrapper}>
				<div className={classes.content}>{children}</div>
			</div>
		</div>
	);
};

export default HomeLayout;
