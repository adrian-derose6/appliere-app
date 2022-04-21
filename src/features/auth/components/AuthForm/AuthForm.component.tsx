import { useState, useEffect, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
	Center,
	Image,
	Title,
	Text,
	TextInput,
	Anchor,
	PasswordInput,
	SimpleGrid,
	Checkbox,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';

import { AuthContext } from '@/stores/contexts/auth-context';
import { useContext } from 'react';
import { AuthButton } from '../AuthButton';
import { useStyles } from './AuthForm.styles';

const logoIcon = require('@/assets/png/logo.png');

interface AuthFormProps {
	isMember?: boolean;
}

interface FormValues {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const authSchema = z.object({
	firstName: z
		.string()
		.min(2, { message: 'Name should have at least 2 letters' }),
	email: z.string().email({ message: 'Invalid email' }),
});

export const AuthForm = (props: AuthFormProps) => {
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();
	const { classes } = useStyles();

	const form = useForm<FormValues>({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		schema: zodResolver(authSchema),

		validate: {
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
			confirmPassword: (value, values) =>
				value !== values.password ? 'Passwords did not match' : null,
		},
	});

	const handleSubmit = (values: FormValues) => {
		console.log(values);
		form.reset();
	};

	return (
		<form className={classes.form} onSubmit={form.onSubmit(handleSubmit)}>
			<Center className={classes.logoContainer}>
				<Image height={35} src={logoIcon} fit='contain' />
				<Title className={classes.logoText}>appliere</Title>
			</Center>
			{!props.isMember && (
				<SimpleGrid cols={2}>
					<TextInput
						label='First Name'
						type='text'
						placeholder='e.g. Michael'
						mb='md'
						required
						{...form.getInputProps('firstName')}
					/>
					<TextInput
						label='Last Name'
						type='text'
						placeholder='e.g. Smith'
						mb='md'
						{...form.getInputProps('lastName')}
					/>
				</SimpleGrid>
			)}
			<TextInput
				label='Email Address'
				type='email'
				placeholder='e.g. name@company.com'
				mb='md'
				required
				{...form.getInputProps('email')}
			/>
			<PasswordInput
				label='Password'
				type='password'
				placeholder='e.g. ••••••'
				mb='md'
				required
				{...form.getInputProps('password')}
			/>
			{!props.isMember && (
				<>
					<PasswordInput
						label='Confirm Password'
						type='password'
						placeholder='e.g. ••••••'
						mb='md'
						required
						{...form.getInputProps('confirmPassword')}
					/>
					<Checkbox label='I agree to the terms of service and privacy policy.' />
				</>
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
