import { Action } from '@/types';
import { BoardState } from '../../types/board-types';

export const boardReducer = (state: BoardState, action: Action): BoardState => {
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
