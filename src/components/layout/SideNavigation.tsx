import { FunctionComponent } from 'react';

import { NavLink } from 'react-router-dom';
import { isPropertySignature } from 'typescript';

const SideNavigation: FunctionComponent<{ onSignOut: () => void }> = (
	props
) => {
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
					<NavLink to='/login' onClick={props.onSignOut}>
						Sign Out
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default SideNavigation;
