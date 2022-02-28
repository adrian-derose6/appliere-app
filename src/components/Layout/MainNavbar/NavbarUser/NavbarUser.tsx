import { NavLink } from 'react-router-dom';

import { useStyles } from './NavbarUser.styles';

interface NavUserProps {
	logout: () => void;
}

const NavbarUser = (props: NavUserProps) => {
	return (
		<>
			<h1>User Section</h1>
			<NavLink to='/login' onClick={props.logout}>
				Sign Out
			</NavLink>
		</>
	);
};

export default NavbarUser;
