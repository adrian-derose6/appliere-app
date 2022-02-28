import { useContext } from 'react';

import SideNavigation from '@/components/Layout/SideNavigation';
import { AuthContext } from '@/stores/contexts/auth-context';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	const { isLoggedIn } = useContext(AuthContext);

	return (
		<div style={{ flexDirection: 'row' }}>
			{isLoggedIn ? <SideNavigation /> : null}
			<main>{children}</main>
		</div>
	);
};

export default Layout;
