import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, UnstyledButton } from '@mantine/core';

import UserTab from './UserTab';
import { useAuth } from '@/stores/auth/AuthProvider';
import { useStyles } from './UserMenu.styles';

interface UserMenuProps {
	expand?: boolean;
}

const UserMenu = ({ expand = false }: UserMenuProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { logout } = useAuth();

	const navigate = useNavigate();
	const { classes } = useStyles();

	const handleLogout = () => {
		logout();
		navigate('/logout', { replace: true });
	};

	return (
		<Menu
			control={
				<UnstyledButton style={{ width: '100%' }}>
					<UserTab expand={expand} />
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
