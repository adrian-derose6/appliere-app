import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import { AuthContextProvider } from '@/stores/contexts/auth-context';
import { themeConfig, componentStyles } from '@/config/theme';

interface AppProviderProps {
	children: React.ReactNode;
}
export const AppProvider = ({ children }: AppProviderProps) => {
	return (
		<MantineProvider theme={themeConfig} styles={componentStyles}>
			<AuthContextProvider>
				<BrowserRouter>{children}</BrowserRouter>
			</AuthContextProvider>
		</MantineProvider>
	);
};
