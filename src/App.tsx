import { Global } from '@mantine/core';

import { AppProvider } from '@/providers/AppProvider';
import { AppRouter } from '@/routes/AppRouter';
import { useGlobalStyles } from '@/App.styles';

export default function App() {
	return (
		<AppProvider>
			<Global styles={useGlobalStyles} />
			<AppRouter />
		</AppProvider>
	);
}
