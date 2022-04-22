import { useState, useEffect, FormEvent, useContext } from 'react';
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

import { AuthContext } from '@/stores/contexts/auth-context';
import {
	registerSchema,
	loginSchema,
} from '@/features/auth/utils/auth-schemas';
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

	const schema = props.isMember ? loginSchema : registerSchema;

	const form = useForm({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		validate: {
			confirmPassword: (value, values) =>
				value !== values.password ? 'Passwords did not match' : null,
		},
		schema: zodResolver(schema),
	});

	type FormValues = typeof form.values;

	const handleSubmit = (values: FormValues) => {
		console.log(values);
		form.reset();
		login();
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
