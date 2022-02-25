import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '@/stores/contexts/auth-context';

const SideNavigation = () => {
	const authContext = useContext(AuthContext);

	return (
		<nav style={{ flexDirection: 'column' }}>
			<ul>
				<li>
					<NavLink to='/jobs'>Search</NavLink>
				</li>
				<li>
					<NavLink to='/browse'>Browse</NavLink>
				</li>
				<li>
					<NavLink to='/track/contacts'>Contacts</NavLink>
				</li>
				<li>
					<NavLink to='/track/boards'>My Boards</NavLink>
				</li>
				<li>
					<NavLink to='/jobs'>Feeds</NavLink>
				</li>
				<li>
					<NavLink to='/login' onClick={authContext.logout}>
						Sign Out
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default SideNavigation;
