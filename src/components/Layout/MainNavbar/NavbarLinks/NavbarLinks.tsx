import { Divider, Space } from '@mantine/core';
import { FaHome, FaSearch } from 'react-icons/fa';
import { IoIosAlbums, IoMdContacts } from 'react-icons/io';
import { MdDynamicFeed, MdDashboardCustomize } from 'react-icons/md';

import { useStyles } from './NavbarLinks.styles';
import NavbarLink from './NavbarLink';
import AccordionLinkGroup from '../AccordionLinkGroup/AccordionLinkGroup';
import { IconContext } from 'react-icons';

interface AccordionGroupLabel {
	label: string;
}

const AccordianGroupLabel = (props: AccordionGroupLabel) => {
	const { classes } = useStyles();

	return (
		<div className={classes.accordianLinkLabel}>
			<IconContext.Provider
				value={{ size: '17px', className: classes.navIcon }}
			>
				<MdDashboardCustomize />
			</IconContext.Provider>
			<span className={classes.linkLabel}>{props.label}</span>
		</div>
	);
};

const NavbarLinks = () => {
	const { classes } = useStyles();

	return (
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
			<Space h='sm' />
			<Divider size='xs' />
			<Space h='sm' />
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
					label='Feeds'
					iconComponent={<MdDynamicFeed />}
				/>
			</li>
			<Space h='sm' />
			<Divider size='xs' />
			<li>
				<AccordionLinkGroup label={<AccordianGroupLabel label='My Boards' />}>
					<h1></h1>
				</AccordionLinkGroup>
			</li>
		</ul>
	);
};

export default NavbarLinks;
