import { useState, useEffect, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
	Center,
	Container,
	Image,
	Group,
	Title,
	Text,
	TextInput,
	Box,
	Button,
	Anchor,
} from '@mantine/core';

import { useAuth } from '@/stores/auth/AuthProvider';
import { useContext } from 'react';
import { FormPaper } from '@/components/Forms/FormPaper.component';
import { Logo } from '@/components/Logo';
import { AuthButton } from '../../components/AuthButton';
import { AuthForm } from '../../components/AuthForm/AuthForm.component';
import { useStyles } from './LoginPage.styles';

const logoIcon = require('@/assets/png/logo.png');

export const LoginPage = () => {
	const { login } = useAuth();
	const navigate = useNavigate();
	const { classes } = useStyles();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		console.log('submitted');
	};

	return (
		<Center className={classes.wrapper}>
			<AuthForm isMember />
		</Center>
	);
};
