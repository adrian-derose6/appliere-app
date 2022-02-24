import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/layout/Layout';

export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleSignOut = () => {
		setIsLoggedIn(false);
	};

	return (
		<Layout onSignOut={handleSignOut}>
			<Routes>
				<Route path='/login' />
				<Route path='/signup' />
				<Route path='/jobs' />
				<Route path='/browse' />
				<Route path='/track/contacts' />
				<Route path='/track/boards' />
				<Route path='*' element={<Navigate to='/track/boards' />} />
			</Routes>
		</Layout>
	);
}
