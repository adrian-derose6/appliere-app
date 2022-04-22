import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { AuthProvider } from '@/stores/contexts/auth-context';
import { themeConfig, libraryStyles } from '@/config/theme';

const queryClient = new QueryClient();

interface AppProviderProps {
	children: React.ReactNode;
}
export const AppProvider = ({ children }: AppProviderProps) => {
	return (
		<MantineProvider theme={themeConfig} styles={libraryStyles}>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools />
				<AuthProvider>
					<BrowserRouter>{children}</BrowserRouter>
				</AuthProvider>
			</QueryClientProvider>
		</MantineProvider>
	);
};
