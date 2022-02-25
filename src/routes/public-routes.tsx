import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import LoginPage from '@/features/auth/pages/LoginPage';
import SignupPage from '@/features/auth/pages/SignupPage';

interface Route {
	path: string;
	element: ReactNode | null;
}

const publicRoutes: Route[] = [
	{
		path: '/',
		element: <Navigate to='/login' />,
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/signup',
		element: <SignupPage />,
	},
];

export default publicRoutes;
