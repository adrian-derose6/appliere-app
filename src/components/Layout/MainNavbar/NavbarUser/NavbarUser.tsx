import { NavLink } from 'react-router-dom';
import { Paper, Avatar, Text } from '@mantine/core';
import { RiSettings5Fill } from 'react-icons/ri';
import { IconContext } from 'react-icons';

import { useStyles } from './NavbarUser.styles';

interface NavUserProps {
	logout: () => void;
}

const NavbarUser = (props: NavUserProps) => {
	const { classes } = useStyles();

	return (
		<Paper className={classes.wrapper} radius='md'>
			<div className={classes.userWrapper}>
				<Avatar alt='Avatar photo' size='sm' />
				<span className={classes.nameText}>Adrian DeRose</span>
			</div>
			<IconContext.Provider
				value={{
					size: '23px',
					color: '#D3555E',
					className: classes.settingsIcon,
				}}
			>
				<RiSettings5Fill />
			</IconContext.Provider>
		</Paper>
	);
};

export default NavbarUser;
