import { useContext } from 'react';
import { AppShell } from '@mantine/core';

import MainNavbar from '@/components/Layout/MainNavbar/MainNavbar';
import { AuthContext } from '@/stores/contexts/auth-context';

interface LayoutProps {
	children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
	const { isLoggedIn } = useContext(AuthContext);

	return (
		<AppShell navbar={<MainNavbar width={{ base: 240 }} padding='xs' />}>
			{children}
		</AppShell>
	);
};

export default MainLayout;
