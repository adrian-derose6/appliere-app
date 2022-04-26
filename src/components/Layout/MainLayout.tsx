import { Outlet } from 'react-router-dom';
import { AppShell, createStyles } from '@mantine/core';

import NavbarLeft from '@/components/Layout/NavbarLeft/NavbarLeft.component';
import { useAuth } from '@/stores/auth/AuthProvider';

export function MainLayout() {
	const { root, main } = useStyles().classes;

	return (
		<AppShell
			padding={0}
			fixed={true}
			navbar={<NavbarLeft />}
			classNames={{ root, main }}
		>
			<Outlet />
		</AppShell>
	);
}

const useStyles = createStyles((theme) => ({
	root: {
		'--mantine-header-height': 0,
		overflow: 'hidden',
	},
	main: {
		position: 'relative',
		paddingLeft: '60px',
		paddingTop: 0,
		boxSizing: 'border-box',
	},
}));
