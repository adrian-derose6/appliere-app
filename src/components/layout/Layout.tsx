import { FC, useContext } from 'react';

import SideNavigation from '@/components/Layout/SideNavigation';

import { AuthContext } from '@/stores/contexts/auth-context';

const Layout: FC = ({ children }) => {
	const { isLoggedIn } = useContext(AuthContext);

	return (
		<div style={{ flexDirection: 'row' }}>
			{isLoggedIn ? <SideNavigation /> : null}
			<main>{children}</main>
		</div>
	);
};

export default Layout;
