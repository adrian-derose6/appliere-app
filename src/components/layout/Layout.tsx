import { FunctionComponent } from 'react';

import SideNavigation from '@/components/layout/SideNavigation';

const Layout: FunctionComponent = (props) => {
	return (
		<div>
			<SideNavigation />
			<main>{props.children}</main>
		</div>
	);
};

export default Layout;
