import { Avatar, Paper } from '@mantine/core';
import { RiSettings5Fill } from 'react-icons/ri';
import { IconContext } from 'react-icons';

import { useStyles } from './UserTab.styles';

const UserTab = () => {
	const { classes } = useStyles();

	return (
		<Paper className={classes.userTab} radius='sm'>
			<div className={classes.userDisplay}>
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
};

export default UserTab;
