import { useContext } from 'react';
import { Container } from '@mantine/core';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import { BoardColumn } from '../3-Groups/BoardColumn';

import {
	BoardContext,
	BoardContextObj,
} from '../../stores/contexts/board-context';
import { useStyles } from './Board.styles';

interface BoardProps {}

export const Board = (props: BoardProps) => {
	const { state, dispatch } = useContext(BoardContext) as BoardContextObj;
	//const { jobs, collections, collectionOrder } = state;
	const { classes } = useStyles();

	const onDragEnd = (result: DropResult) => {
		const { destination, source, draggableId, type } = result;

		if (!destination) {
			return;
		}

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		if (type === 'collection') {
			const newCollectionOrder = Array.from(state.collectionOrder);

			newCollectionOrder.splice(source.index, 1);
			newCollectionOrder.splice(destination.index, 0, draggableId);

			dispatch({
				type: 'MOVE_COLLECTION',
				payload: newCollectionOrder,
			});
			return;
		}

		const startCol = state.collections[source.droppableId];
		const finishCol = state.collections[destination.droppableId];

		if (startCol === finishCol) {
			let newJobIds = [...startCol.jobIds];

			newJobIds.splice(source.index, 1);
			newJobIds.splice(destination.index, 0, draggableId);

			const newCollection = {
				...startCol,
				jobIds: newJobIds,
			};

			dispatch({ type: 'MOVE_ITEM_WITHIN', payload: { newCollection } });
		}

		// Moving from one list to another
		if (startCol !== finishCol) {
			let startJobIds = [...startCol.jobIds];
			let finishJobIds = [...finishCol.jobIds];

			startJobIds.splice(source.index, 1);
			finishJobIds.splice(destination.index, 0, draggableId);

			const newStartCol = {
				...startCol,
				jobIds: startJobIds,
			};

			const newFinishCol = {
				...finishCol,
				jobIds: finishJobIds,
			};

			dispatch({
				type: 'MOVE_ITEM_BETWEEN',
				payload: {
					newStartCol,
					newFinishCol,
				},
			});
		}
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable
				droppableId='all-collections'
				direction='horizontal'
				type='collection'
			>
				{(provided) => (
					<Container {...provided.droppableProps} ref={provided.innerRef}>
						{state.collectionOrder.map(
							(collectionId: string, index: number) => {
								const collection = state.collections[collectionId];
								const jobs = collection.jobIds.map(
									(jobId: string) => state.jobs[jobId]
								);

								return (
									<BoardColumn
										key={collection.id}
										index={index}
										collection={collection}
										jobs={jobs}
									/>
								);
							}
						)}
					</Container>
				)}
			</Droppable>
		</DragDropContext>
	);
};
