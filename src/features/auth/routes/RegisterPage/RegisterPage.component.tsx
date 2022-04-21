import { AuthContext } from '@/stores/contexts/auth-context';
import { Center } from '@mantine/core';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../../components/AuthForm/AuthForm.component';
import { useStyles } from './RegisterPage.styles';

export const RegisterPage = () => {
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();
	const { classes } = useStyles();

	return (
		<Center className={classes.wrapper}>
			<AuthForm />
		</Center>
	);
};
