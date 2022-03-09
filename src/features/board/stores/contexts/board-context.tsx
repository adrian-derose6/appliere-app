import React, { useReducer, Dispatch } from 'react';

import { initialBoardState } from '../../stores/boardData';
import { BoardState } from '../../types/board-types';

type Action = { type: string; payload: any };
type BoardProviderProps = { children: React.ReactNode };

export interface BoardContextObj {
	state: BoardState;
	dispatch: Dispatch<Action>;
}

const boardReducer = (state: BoardState, action: Action): BoardState => {
	switch (action.type) {
		case 'MOVE_COLLECTION':
			return {
				...state,
				collectionOrder: action.payload,
			};
		case 'MOVE_ITEM_WITHIN':
			const { newCollection } = action.payload;

			return {
				...state,
				collections: {
					...state.collections,
					[newCollection.id]: newCollection,
				},
			};
		case 'MOVE_ITEM_BETWEEN':
			const { newStartCol, newFinishCol } = action.payload;

			return {
				...state,
				collections: {
					...state.collections,
					[newStartCol.id]: newStartCol,
					[newFinishCol.id]: newFinishCol,
				},
			};
		default:
			return state;
	}
};

export const BoardContext = React.createContext<BoardContextObj | null>(null);

export const BoardProvider = ({ children }: BoardProviderProps) => {
	const [state, dispatch] = useReducer(boardReducer, initialBoardState);

	const value = {
		state,
		dispatch,
	};

	return (
		<BoardContext.Provider value={value}>{children}</BoardContext.Provider>
	);
};
