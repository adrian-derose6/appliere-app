import { useStyles } from './FormPaper.styles';

type FormPaperProps = {
	children: React.ReactNode;
};
export const FormPaper = ({ children }: FormPaperProps) => {
	const { classes } = useStyles();

	return <section className={classes.formWrapper}>{children}</section>;
};
