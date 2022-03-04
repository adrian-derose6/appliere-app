import { Avatar, Paper } from '@mantine/core';
import { RiSettings5Fill } from 'react-icons/ri';
import { IconContext } from 'react-icons';

import { useStyles } from './UserTab.styles';

interface UserTabProps {
	expand?: boolean;
}

const UserTab = ({ expand = false }: UserTabProps) => {
	const { classes } = useStyles({ expand });

	return (
		<Paper className={classes.userTab} radius='sm'>
			<div className={classes.avatarOverlay} />
			<Avatar
				alt='Avatar photo'
				size='sm'
				color='orange'
				className={classes.avatar}
			/>
			<div className={classes.nameText}>Adrian DeRose</div>

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
