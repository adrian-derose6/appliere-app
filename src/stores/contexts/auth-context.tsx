import React, { useState, FC } from 'react';

export interface AuthContextObj {
	token: string;
	isLoggedIn: boolean;
	logout: () => void;
	login: () => void;
	signup: () => void;
}

export const AuthContext = React.createContext<AuthContextObj>({
	token: '',
	isLoggedIn: false,
	logout: () => {},
	login: () => {},
	signup: () => {},
});

export const AuthContextProvider: FC = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	const handleLogin = () => {
		setIsLoggedIn(true);
	};

	const handleLogout = () => {
		setIsLoggedIn(false);
	};

	const handleSignup = () => {
		setIsLoggedIn(true);
	};

	const contextValue: AuthContextObj = {
		token: '',
		isLoggedIn,
		logout: handleLogout,
		login: handleLogin,
		signup: handleSignup,
	};

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};
