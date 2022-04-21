import { useState, useEffect, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Center,
	Container,
	Image,
	Group,
	Title,
	TextInput,
	Box,
} from '@mantine/core';

import { AuthContext } from '@/stores/contexts/auth-context';
import { useContext } from 'react';
import { FormPaper } from '@/components/Forms/FormPaper.component';
import { Logo } from '@/components/Logo';
import { useStyles } from './LoginPage.styles';

const logoIcon = require('@/assets/png/logo.png');

export const LoginPage = () => {
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();
	const { classes } = useStyles();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		console.log('submitted');
	};

	return (
		<Center className={classes.wrapper}>
			<form className={classes.form} onSubmit={handleSubmit}>
				<Center className={classes.logoContainer}>
					<Image height={40} src={logoIcon} fit='contain' />
					<Title className={classes.logoText}>appliere</Title>
				</Center>
				<TextInput
					label='Email Address'
					placeholder='name@company.com'
					mt='lg'
				/>
				<TextInput label='Password' placeholder='Job Title' mt='lg' />
				<button type='submit' onClick={() => login()}>
					Login
				</button>
				<button onClick={() => navigate('/create-account')}>Sign Up</button>
			</form>
		</Center>
	);
};
