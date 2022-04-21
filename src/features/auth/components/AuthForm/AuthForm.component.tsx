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
	SimpleGrid,
} from '@mantine/core';

import { AuthContext } from '@/stores/contexts/auth-context';
import { useContext } from 'react';
import { FormPaper } from '@/components/Forms/FormPaper.component';
import { Logo } from '@/components/Logo';
import { AuthButton } from '../AuthButton';
import { useStyles } from './AuthForm.styles';

const logoIcon = require('@/assets/png/logo.png');

interface AuthFormProps {
	isMember?: boolean;
}

export const AuthForm = (props: AuthFormProps) => {
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();
	const { classes } = useStyles();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log('Submitted');
		login();
	};

	return (
		<form className={classes.form} onSubmit={handleSubmit}>
			<Center className={classes.logoContainer}>
				<Image height={35} src={logoIcon} fit='contain' />
				<Title className={classes.logoText}>appliere</Title>
			</Center>
			{!props.isMember && (
				<>
					<TextInput
						label='First Name'
						type='text'
						placeholder='e.g. Michael'
						mb='md'
						description='Required'
					/>
					<TextInput
						label='Last Name'
						type='text'
						placeholder='e.g. Smith'
						mb='md'
					/>
				</>
			)}
			<TextInput
				label='Email Address'
				type='email'
				placeholder='e.g. name@company.com'
				mb='md'
				description={props.isMember ? '' : 'Required'}
			/>
			<TextInput
				label='Password'
				type='password'
				placeholder='e.g. ••••••'
				mb='md'
				description={props.isMember ? '' : 'Required'}
			/>
			{!props.isMember && (
				<TextInput
					label='Confirm Password'
					type='password'
					placeholder='e.g. ••••••'
					mb='md'
					description='Required'
				/>
			)}
			<AuthButton mt='xl' type='submit'>
				{props.isMember ? 'Login' : 'Create Account'}
			</AuthButton>
			<Text className={classes.hasAccountText} mt='lg'>
				{props.isMember ? "Don't have an account?" : 'Aleady have an account?'}
				<Anchor<typeof Link>
					component={Link}
					to={props.isMember ? '/create-account' : '/login'}
				>
					{props.isMember ? 'Sign Up' : 'Login'}
				</Anchor>
			</Text>
		</form>
	);
};
