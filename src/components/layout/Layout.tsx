import React from 'react';

import SideNavigation from '@/components/layout/SideNavigation';

const Layout: React.FC<{ onSignOut: () => void }> = (props) => {
	return (
		<div style={{ flexDirection: 'row' }}>
			<SideNavigation onSignOut={props.onSignOut} />
			<main>{props.children}</main>
		</div>
	);
};

export default Layout;
