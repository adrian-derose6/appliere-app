import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { queryClient } from '@/lib/react-query';
import { AuthProvider } from '@/stores/auth/AuthProvider';
import { themeConfig, libraryStyles } from '@/config/theme';

const ErrorFallback = () => {
	return (
		<div>
			<h1>Oops, something went wrong!</h1>
			<button onClick={() => window.location.assign(window.location.origin)}>
				Refresh
			</button>
		</div>
	);
};

type AppProviderProps = {
	children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<MantineProvider
				theme={themeConfig}
				styles={libraryStyles}
				withNormalizeCSS
				withGlobalStyles
			>
				<QueryClientProvider client={queryClient}>
					<ReactQueryDevtools />
					<BrowserRouter>
						<AuthProvider>{children}</AuthProvider>
					</BrowserRouter>
				</QueryClientProvider>
			</MantineProvider>
		</ErrorBoundary>
	);
};
