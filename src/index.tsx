import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import App from '@/App';
import AuthContextProvider from './stores/contexts/auth-context';
import reportWebVitals from './reportWebVitals';

import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<MantineProvider
			theme={{
				headings: {
					fontFamily: 'Roboto, sans-serif',
					fontWeight: 400,
					color: '#1e1f21',
				},
				other: {
					brandFontFamily: 'Comfortaa, cursive',
					textFontFamily: 'Fredoka, sans-serif' /*'Quicksand, sans-serif'*/,
					secondaryFontFamily: 'Roboto, sans-serif',
					brandPrimaryColor: '#D3555E',
					brandDarkColor: '#1e1f21',
				},
			}}
		>
			<AuthContextProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</AuthContextProvider>
		</MantineProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
