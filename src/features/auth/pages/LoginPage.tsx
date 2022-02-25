import { AuthContext } from '@/stores/contexts/auth-context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();

	return (
		<div>
			<h1>Login Page</h1>
			<button onClick={() => login()}>Login</button>
			<button onClick={() => navigate('signup', { replace: true })}>
				Sign Up
			</button>
		</div>
	);
};

export default LoginPage;
