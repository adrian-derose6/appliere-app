import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, UnstyledButton } from '@mantine/core';

import UserTab from './UserTab';
import { AuthContext } from '@/stores/contexts/auth-context';
import { useStyles } from './UserMenu.styles';

const UserMenu = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { logout } = useContext(AuthContext);

	const navigate = useNavigate();
	const { classes } = useStyles();

	const handleLogout = () => {
		logout();
		navigate('/logout', { replace: true });
	};

	return (
		<Menu
			control={
				<UnstyledButton style={{ minWidth: '100%' }}>
					<UserTab />
				</UnstyledButton>
			}
			classNames={{
				root: classes.root,
			}}
			radius='sm'
			opened={isOpen}
			onOpen={() => setIsOpen(true)}
			onClose={() => setIsOpen(false)}
		>
			<Menu.Item onClick={handleLogout}>Log Out</Menu.Item>
			<Menu.Item>Privacy Policy</Menu.Item>
			<Menu.Item>My Settings...</Menu.Item>
		</Menu>
	);
};

export default UserMenu;
