import { Divider, Space } from '@mantine/core';
import { FaHome, FaSearch } from 'react-icons/fa';
import { IoIosAlbums, IoMdContacts } from 'react-icons/io';
import { MdDynamicFeed, MdDashboardCustomize } from 'react-icons/md';

import { useStyles } from './NavbarLinks.styles';
import NavbarLink from './NavbarLink';

const NavbarLinks = () => {
	const { classes } = useStyles();

	return (
		<>
			<ul className={classes.linkSection}>
				<li>
					<NavbarLink path='/home' label='Home' iconComponent={<FaHome />} />
				</li>
				<li>
					<NavbarLink
						path='/track/contacts'
						label='Contacts'
						iconComponent={<IoMdContacts />}
					/>
				</li>
				<li>
					<NavbarLink
						path='/track/boards'
						label='My Boards'
						iconComponent={<MdDashboardCustomize />}
					/>
				</li>
			</ul>
			<Space h='sm' />
			<Divider color='gray' size='xs' />
			<Space h='sm' />
			<ul>
				<li>
					<NavbarLink
						path='/jobs'
						label='Search Jobs'
						iconComponent={<FaSearch />}
					/>
				</li>
				<li>
					<NavbarLink
						path='/browse'
						label='Browse'
						iconComponent={<IoIosAlbums />}
					/>
				</li>
				<li>
					<NavbarLink
						path='/jobs'
						label='Feed'
						iconComponent={<MdDynamicFeed />}
					/>
				</li>
			</ul>
		</>
	);
};

export default NavbarLinks;
