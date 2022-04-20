import { Navigate } from 'react-router-dom';

import { LoginPage } from './LoginPage/LoginPage.component';
import { RegisterPage } from './RegisterPage/RegisterPage.component';

export const authRoutes = [
	{
		path: '*',
		element: <Navigate to='login' />,
	},
	{
		path: 'login',
		element: <LoginPage />,
	},
	{
		path: 'create-account',
		element: <RegisterPage />,
	},
];
