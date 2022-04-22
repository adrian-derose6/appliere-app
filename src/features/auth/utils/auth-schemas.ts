import { z } from 'zod';

export const firstNameSchema = z
	.string({ required_error: 'The name field is required' })
	.min(2, { message: 'Name should have at least 2 letters' });

export const emailSchema = z.string().email({ message: 'Invalid email' });

export const passwordSchema = z
	.string()
	.min(8, { message: 'Password is too short' });

export const registerSchema = z
	.object({
		firstName: firstNameSchema,
		lastName: z.string(),
		email: emailSchema,
		password: passwordSchema,
		confirmPassword: z.string(),
		termsAgreement: z
			.boolean()
			.refine((value) => value === true, 'Must check box'),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	});

export const loginSchema = z.object({
	email: z.string().email({ message: 'Invalid email' }),
	password: z.string().min(8, { message: 'Password is too short' }),
});
