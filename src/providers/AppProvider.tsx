import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import { AuthContextProvider } from '@/stores/contexts/auth-context';
import { themeConfig, libraryStyles } from '@/config/theme';

interface AppProviderProps {
	children: React.ReactNode;
}
export const AppProvider = ({ children }: AppProviderProps) => {
	return (
		<MantineProvider theme={themeConfig} styles={libraryStyles}>
			<AuthContextProvider>
				<BrowserRouter>{children}</BrowserRouter>
			</AuthContextProvider>
		</MantineProvider>
	);
};
