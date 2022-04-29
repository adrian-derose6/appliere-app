import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import { JobsList } from '../JobsList/JobsList.component';
import { AddButton } from '../Elements/AddButton';
import {
	BoardContext,
	BoardContextObj,
} from '@/features/board/stores/contexts/board-context';
import { useGetLists, useUpdateLists } from '@/features/board/api';
import { useStyles } from './Board.styles';

export const Board = () => {
	const { boardId } = useParams<{ boardId: string }>();
	const {
		data: listsData,
		isLoading: getListsLoading,
		isSuccess: getListsSuccess,
		isError: getListsError,
	} = useGetLists({
		boardId: boardId as string,
	});
	const {
		mutate: updateListsMutate,
		isLoading: updateListsLoading,
		isError: updateListsError,
	} = useUpdateLists();
	const { classes } = useStyles();

	if (getListsLoading) {
		return <h1>Loading Lists...</h1>;
	}

	if (getListsError) {
		return <h1>Error: Could not fetch lists</h1>;
	}
	console.log('Lists: ', listsData.data.lists);
	const onDragEnd = (result: DropResult) => {
		const { destination, source, draggableId, type } = result;

		console.log('Source: ', source);
		console.log('Destination: ', destination);
		console.log('Draggable ID: ', draggableId);
		console.log('Type: ', type);

		if (!destination) {
			return;
		}

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		// Move list position
		if (type === 'list') {
			const oldLists = listsData.data.lists;
			const updatedLists = Array.from(oldLists);

			updatedLists.splice(source.index, 1);
			updatedLists.splice(destination.index, 0, oldLists[source.index]);
			console.log(updatedLists);
			updateListsMutate({
				data: { lists: updatedLists },
				boardId: boardId as string,
			});
			return;
		}
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId='board' direction='horizontal' type='list'>
				{(provided) => (
					<div
						className={classes.boardWrapper}
						{...provided.droppableProps}
						ref={provided.innerRef}
					>
						{listsData.data?.lists.map((list: any, index: number) => {
							return <JobsList index={list.id} list={list} />;
						})}
						<AddButton
							label='Add List'
							style={{ fontSize: '16px', marginTop: 25, marginLeft: 10 }}
							iconSize='13px'
						/>
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};
