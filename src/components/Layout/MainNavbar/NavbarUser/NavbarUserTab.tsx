import React from 'react';
import { Avatar, Paper } from '@mantine/core';
import { RiSettings5Fill } from 'react-icons/ri';
import { IconContext } from 'react-icons';

import { useStyles } from './NavbarUserTab.styles';

const NavbarUserTab = React.forwardRef<HTMLButtonElement>((props, ref) => {
	const { classes } = useStyles();

	return (
		<Paper className={classes.wrapper} radius='sm'>
			<div className={classes.userWrapper}>
				<Avatar alt='Avatar photo' size='sm' color='orange' />
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
});

export default NavbarUserTab;
