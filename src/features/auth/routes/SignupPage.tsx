import { AuthContext } from '@/stores/contexts/auth-context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignupPage = () => {
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();

	return (
		<div>
			<h1>Signup Page</h1>
			<button onClick={() => login()}>Sign Up</button>
			<button onClick={() => navigate('login')}>Login</button>
		</div>
	);
};
