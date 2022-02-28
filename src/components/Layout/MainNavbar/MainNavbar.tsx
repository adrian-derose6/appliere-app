import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarProps, Image, Center, Text } from '@mantine/core';

import { useStyles } from './MainNavbar.styles';
import { AuthContext } from '@/stores/contexts/auth-context';

const MainNavbar = (props: Omit<NavbarProps, 'children'>) => {
	const authContext = useContext(AuthContext);
	const { classes } = useStyles();

	return (
		<Navbar fixed position={{ top: 0, left: 0 }} padding='xs' {...props}>
			<Navbar.Section>
				<Center>
					<Image
						className={classes.brandName}
						height={30}
						src={require('@/assets/logo.png')}
						fit='contain'
					/>
					<h1 className={classes.brandName}>
						<span className={classes.gradientText}>appliere</span>
					</h1>
				</Center>
			</Navbar.Section>
			<Navbar.Section grow mt='lg'>
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
			</Navbar.Section>
			<Navbar.Section>
				<h1>User Section</h1>
			</Navbar.Section>
		</Navbar>
	);
};

export default MainNavbar;
