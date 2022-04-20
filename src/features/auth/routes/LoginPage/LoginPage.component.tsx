import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Center } from '@mantine/core';

import { AuthContext } from '@/stores/contexts/auth-context';
import { useContext } from 'react';
import { useStyles } from './LoginPage.styles';

export const LoginPage = () => {
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();
	const { classes } = useStyles();

	return (
		<Center>
			<form className={classes.form}>
				<button onClick={() => login()}>Login</button>
				<button onClick={() => navigate('/create-account')}>Sign Up</button>
			</form>
		</Center>
	);
};
