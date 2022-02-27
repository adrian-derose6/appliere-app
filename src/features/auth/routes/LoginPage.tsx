import { Link } from 'react-router-dom';

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
			<Link to='signup'>
				<button>Sign Up</button>
			</Link>
		</div>
	);
};

export default LoginPage;
