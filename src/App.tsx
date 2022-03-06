import { Global } from '@mantine/core';

import { AppRouter } from '@/navigation/AppRouter';
import { MainLayout } from '@/components/Layout';
import { useGlobalStyles } from '@/App.styles';

export default function App() {
	return (
		<MainLayout>
			<Global styles={useGlobalStyles}></Global>
			<AppRouter />
		</MainLayout>
	);
}
