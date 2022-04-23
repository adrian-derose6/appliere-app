import React, { useReducer, Dispatch } from 'react';

import { initialBoardState } from '../../stores/boardData';
import { BoardState } from '../../types/board-types';
import { Action } from '@/stores/types';
import { boardReducer } from '../reducers/boardReducer';

type BoardProviderProps = { children: React.ReactNode };

export interface BoardContextObj {
	state: BoardState;
	dispatch: Dispatch<Action>;
}

export const BoardContext = React.createContext<BoardContextObj | null>(null);

export const BoardProvider = ({ children }: BoardProviderProps) => {
	const [state, dispatch] = useReducer(boardReducer, initialBoardState);

	const value: BoardContextObj = {
		state,
		dispatch,
	};

	return (
		<BoardContext.Provider value={value}>{children}</BoardContext.Provider>
	);
};
