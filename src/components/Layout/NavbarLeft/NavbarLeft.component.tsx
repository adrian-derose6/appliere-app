import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
	Navbar,
	NavbarProps,
	Image,
	Space,
	Divider,
	Collapse,
	Container,
} from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { FaHome, FaSearch } from 'react-icons/fa';
import { IoMdContacts, IoIosAlbums } from 'react-icons/io';
import { MdDynamicFeed, MdDashboardCustomize } from 'react-icons/md';

import UserMenu from './UserMenu/UserMenu';
import NavbarLink from './NavbarLink/NavbarLink';

import { useStyles } from './NavbarLeft.styles';
import { AuthContext } from '@/stores/auth/AuthProvider';

const logoIcon = require('@/assets/png/logo.png');

const NavbarLeft = (props: Omit<NavbarProps, 'children'>) => {
	const [isCollapseOpen, setIsCollapseOpen] = useState(false);
	const { hovered, ref } = useHover();
	const authContext = useContext(AuthContext);
	const { classes } = useStyles({ expand: hovered });

	return (
		<Navbar
			fixed
			position={{ top: 0, left: 0, bottom: 0 }}
			className={classes.navbar}
			ref={ref}
			{...props}
		>
			<Navbar.Section>
				<NavLink className={classes.logoLink} to='/home'>
					<Image
						height={30}
						src={logoIcon}
						fit='contain'
						className={classes.logoIcon}
					/>
					<h1 className={classes.logoText}>appliere</h1>
				</NavLink>
			</Navbar.Section>
			<Navbar.Section grow>
				<NavbarLink
					label='Home'
					to='/home'
					iconComponent={<FaHome />}
					expand={hovered}
				/>
				<NavbarLink
					to='/track/contacts'
					label='Contacts'
					iconComponent={<IoMdContacts />}
					expand={hovered}
				/>
				<NavbarLink
					to='/track/boards'
					label='My Boards'
					iconComponent={<MdDashboardCustomize />}
					expand={hovered}
					onToggleCollapse={() => setIsCollapseOpen((prev) => !prev)}
					collapsible
				/>
				<Collapse in={isCollapseOpen}>
					<Container></Container>
				</Collapse>
				<Space h='sm' />
				<Divider className={classes.divider} />
				<Space h='sm' />
				<NavbarLink
					to='/jobs'
					label='Search Jobs'
					iconComponent={<FaSearch />}
					expand={hovered}
				/>
				<NavbarLink
					to='/browse'
					label='Browse'
					iconComponent={<IoIosAlbums />}
					expand={hovered}
				/>
				<NavbarLink
					to='/jobs'
					label='Feeds'
					iconComponent={<MdDynamicFeed />}
					expand={hovered}
				/>
			</Navbar.Section>
			<Navbar.Section className={classes.bottom}>
				<UserMenu expand={hovered} />
			</Navbar.Section>
		</Navbar>
	);
};

export default NavbarLeft;
