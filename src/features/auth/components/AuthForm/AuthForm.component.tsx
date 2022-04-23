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
import { BsPeople, BsPerson } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

import { AuthContext, useAuth } from '@/stores/auth/AuthProvider';
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
	const { login } = useAuth();
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
			termsAgreement: false,
		},
		schema: zodResolver(schema),
	});

	type FormValues = typeof form.values;

	const handleSubmit = (values: FormValues) => {
		console.log(values);
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
						type='text'
						placeholder='First Name'
						mb='md'
						icon={<BsPerson />}
						required
						{...form.getInputProps('firstName')}
					/>
					<TextInput
						type='text'
						placeholder='Last Name'
						mb='md'
						icon={<BsPeople />}
						{...form.getInputProps('lastName')}
					/>
				</SimpleGrid>
			)}
			<TextInput
				type='email'
				placeholder='Email Address'
				mb='md'
				icon={<AiOutlineMail />}
				required
				{...form.getInputProps('email')}
			/>
			<PasswordInput
				type='password'
				placeholder='Password'
				mb='md'
				icon={<RiLockPasswordLine />}
				required
				{...form.getInputProps('password')}
			/>
			{!props.isMember && (
				<>
					<PasswordInput
						type='password'
						placeholder='Confirm Password'
						mb='lg'
						icon={<RiLockPasswordLine />}
						required
						{...form.getInputProps('confirmPassword')}
					/>
					<Checkbox
						label='I agree to the Terms of Service and Privacy Policy.'
						size='xs'
						radius='xs'
						required
						{...form.getInputProps('termsAgreement', { type: 'checkbox' })}
					/>
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
