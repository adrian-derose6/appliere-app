import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { queryClient } from '@/lib/react-query';
import { AuthProvider } from '@/stores/contexts/auth-context';
import { themeConfig, libraryStyles } from '@/config/theme';

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
