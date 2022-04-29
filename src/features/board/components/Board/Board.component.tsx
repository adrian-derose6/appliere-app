import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DndContext, useDroppable } from '@dnd-kit/core';

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
	const { isOver, setNodeRef } = useDroppable({
		id: 'board',
	});
	const { classes } = useStyles();

	if (getListsLoading) {
		return <h1>Loading Lists...</h1>;
	}

	if (getListsError) {
		return <h1>Error: Could not fetch lists</h1>;
	}
	console.log('Lists: ', listsData.data.lists);

	return (
		<DndContext>
			<div className={classes.boardWrapper} ref={setNodeRef}>
				{listsData.data?.lists.map((list: any, index: number) => {
					return <JobsList index={list.id} list={list} />;
				})}
				<AddButton
					label='Add List'
					style={{ fontSize: '16px', marginTop: 25, marginLeft: 10 }}
					iconSize='13px'
				/>
			</div>
		</DndContext>
	);
};
