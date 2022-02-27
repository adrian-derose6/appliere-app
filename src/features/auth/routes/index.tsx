import { Navigate } from 'react-router-dom';

import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

const authRoutes = [
	{
		path: '*',
		element: <Navigate to='login' />,
	},
	{
		path: 'login',
		element: <LoginPage />,
	},
	{
		path: 'signup',
		element: <SignupPage />,
	},
];

export default authRoutes;
