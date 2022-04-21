import { useStyles } from './FormPaper.styles';

interface FormPaperProps extends React.ComponentPropsWithoutRef<'form'> {
	children: React.ReactNode;
	className?: string;
}
export const FormPaper = ({ children, ...formProps }: FormPaperProps) => {
	const { classes, cx } = useStyles();
	console.log(formProps.className);
	return (
		<form className={cx(classes.form, formProps.className)} {...formProps}>
			{children}
		</form>
	);
};
