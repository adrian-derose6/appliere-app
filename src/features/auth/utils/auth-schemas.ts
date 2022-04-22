import { z } from 'zod';

export const registerSchema = z
	.object({
		firstName: z
			.string()
			.min(2, { message: 'Name should have at least 2 letters' }),
		lastName: z.string(),
		email: z.string().email({ message: 'Invalid email' }),
		password: z.string().min(8, { message: 'Password is too short' }),
		confirmPassword: z.string(),
	})
	.refine(
		(value) =>
			value &&
			value.password &&
			value.confirmPassword &&
			value.password === value.confirmPassword
				? true
				: false,
		{ message: 'Passwords did not match' }
	);

export const loginSchema = z.object({
	email: z.string().email({ message: 'Invalid email' }),
	password: z.string().min(8, { message: 'Password is too short' }),
});
