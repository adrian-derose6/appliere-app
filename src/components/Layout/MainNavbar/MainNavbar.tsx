import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, NavbarProps, Accordion } from '@mantine/core';

import NavbarHeader from './NavbarHeader';
import NavbarLinks from './NavbarLinks';
import NavbarUser from './NavbarUser';

import { useStyles } from './MainNavbar.styles';
import { AuthContext } from '@/stores/contexts/auth-context';

const MainNavbar = (props: Omit<NavbarProps, 'children'>) => {
	const authContext = useContext(AuthContext);
	const { classes } = useStyles();

	return (
		<Navbar
			fixed
			position={{ top: 0, left: 0 }}
			{...props}
			className={classes.navbar}
		>
			<Navbar.Section>
				<NavbarHeader />
			</Navbar.Section>
			<Navbar.Section grow>
				<NavbarLinks />
			</Navbar.Section>
			<Navbar.Section>
				<NavbarUser logout={authContext.logout} />
			</Navbar.Section>
		</Navbar>
	);
};

export default MainNavbar;
