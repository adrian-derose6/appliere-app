import { authFetch } from '@/lib/axios';
import { Boards } from '../types';

export const getBoards = async (): Promise<Boards> => {
	const res = await authFetch.get('/boards');
	console.log(res);
	return res.data;
};

getBoards();
