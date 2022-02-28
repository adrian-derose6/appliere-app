import { Global } from '@mantine/core';

import AppRouter from '@/routes/AppRouter';
import MainLayout from '@/components/Layout/MainLayout';
import useGlobalStyles from '@/App.styles';

export default function App() {
	return (
		<MainLayout>
			<Global styles={useGlobalStyles}></Global>
			<AppRouter />
		</MainLayout>
	);
}
