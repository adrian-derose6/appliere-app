import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { queryClient } from '@/lib/react-query';
import { AuthProvider } from '@/stores/auth/AuthProvider';
import { themeConfig, libraryStyles } from '@/config/theme';

interface AppProviderProps {
	children: React.ReactNode;
}
export const AppProvider = ({ children }: AppProviderProps) => {
	return (
		<MantineProvider theme={themeConfig} styles={libraryStyles}>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools />
				<BrowserRouter>
					<AuthProvider>{children}</AuthProvider>
				</BrowserRouter>
			</QueryClientProvider>
		</MantineProvider>
	);
};
