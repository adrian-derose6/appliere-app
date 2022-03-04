import { useContext } from 'react';
import { AppShell } from '@mantine/core';

import NavbarLeft from '@/components/Layout/NavbarLeft/NavbarLeft';
import { AuthContext } from '@/stores/contexts/auth-context';

interface LayoutProps {
	children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
	const { isLoggedIn } = useContext(AuthContext);

	return (
		<AppShell navbar={<NavbarLeft width={{ base: 240 }} />} padding={0}>
			{children}
		</AppShell>
	);
};

export default MainLayout;
