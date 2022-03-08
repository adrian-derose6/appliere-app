import { Outlet } from 'react-router-dom';

import { ActivitiesNavigation } from '../components/Layout/ActivitiesNavigation';

export const ActivitiesPage = () => {
	return (
		<>
			<h1>Activities Page</h1>
			<ActivitiesNavigation />
			<Outlet />
		</>
	);
};
