import { Global } from '@mantine/core';

import { AppProvider } from '@/providers/AppProvider';
import { MainLayout } from '@/components/Layout';
import { AppRouter } from '@/navigation/AppRouter';
import { useGlobalStyles } from '@/App.styles';

export default function App() {
	return (
		<AppProvider>
			<MainLayout>
				<Global styles={useGlobalStyles} />
				<AppRouter />
			</MainLayout>
		</AppProvider>
	);
}
