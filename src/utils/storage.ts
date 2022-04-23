const storagePrefix = 'appliere_';

const storage = {
	getToken: () => {
		return JSON.parse(localStorage.getItem(`${storagePrefix}token`) as string);
	},
	setToken: (token: string) => {
		localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
	},
	clearToken: () => {
		localStorage.removeItem(`${storagePrefix}token`);
	},
	getUser: () => {
		return JSON.parse(localStorage.getItem(`${storagePrefix}user`) as string);
	},
	setUser: (user: any) => {
		localStorage.setItem(`${storagePrefix}user`, JSON.stringify(user));
	},
	addUserToLocalStorage(user: any, token: string) {
		this.setToken(token);
		this.setUser(user);
	},
	removeUserFromLocalStorage() {
		localStorage.removeItem(`${storagePrefix}token`);
		localStorage.removeItem(`${storagePrefix}user`);
	},
};

export default storage;
