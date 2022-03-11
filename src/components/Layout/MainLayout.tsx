import { useContext } from 'react';
import { AppShell } from '@mantine/core';

import NavbarLeft from '@/components/Layout/NavbarLeft/NavbarLeft';
import { AuthContext } from '@/stores/contexts/auth-context';

interface LayoutProps {
	children: React.ReactNode;
}

export const MainLayout = ({ children }: LayoutProps) => {
	const { isLoggedIn } = useContext(AuthContext);

	return (
		<AppShell
			padding={0}
			fixed={true}
			navbar={isLoggedIn ? <NavbarLeft /> : undefined}
			styles={{
				main: {
					position: 'relative',
					paddingLeft: '60px',
					boxSizing: 'border-box',
				},
			}}
		>
			{children}
		</AppShell>
	);
};
