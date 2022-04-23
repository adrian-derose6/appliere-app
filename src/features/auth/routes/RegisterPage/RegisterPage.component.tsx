import { useAuth } from '@/stores/auth/AuthProvider';
import { Center } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../../components/AuthForm/AuthForm.component';
import { useStyles } from './RegisterPage.styles';

export const RegisterPage = () => {
	const { login } = useAuth();
	const navigate = useNavigate();
	const { classes } = useStyles();

	return (
		<Center className={classes.wrapper}>
			<AuthForm />
		</Center>
	);
};
