import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '@/stores/contexts/auth-context';
import { useContext } from 'react';

export const LoginPage = () => {
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();

	return (
		<div>
			<h1>Login Page</h1>
			<button onClick={() => login()}>Login</button>
			<button onClick={() => navigate('/signup')}>Sign Up</button>
		</div>
	);
};
