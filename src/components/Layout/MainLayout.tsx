import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AppShell } from '@mantine/core';

import NavbarLeft from '@/components/Layout/NavbarLeft/NavbarLeft';
import { AuthContext } from '@/stores/contexts/auth-context';

interface LayoutProps {}

export const MainLayout = (props: LayoutProps) => {
	const { isLoggedIn } = useContext(AuthContext);

	return (
		<AppShell
			padding={0}
			fixed={true}
			navbar={<NavbarLeft />}
			styles={{
				main: {
					position: 'relative',
					paddingLeft: '60px',
					boxSizing: 'border-box',
				},
			}}
		>
			<Outlet />
		</AppShell>
	);
};
