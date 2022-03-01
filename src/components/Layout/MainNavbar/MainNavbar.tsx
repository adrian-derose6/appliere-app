import { useContext } from 'react';
import { Navbar, NavbarProps } from '@mantine/core';

import NavbarHeader from './NavbarHeader/NavbarHeader';
import NavbarLinks from './NavbarLinks/NavbarLinks';
import NavbarUser from './NavbarUser/NavbarUser';

import { useStyles } from './MainNavbar.styles';
import { AuthContext } from '@/stores/contexts/auth-context';

const MainNavbar = (props: Omit<NavbarProps, 'children'>) => {
	const authContext = useContext(AuthContext);
	const { classes } = useStyles();

	return (
		<Navbar
			fixed
			position={{ top: 0, left: 0 }}
			className={classes.navbar}
			{...props}
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
