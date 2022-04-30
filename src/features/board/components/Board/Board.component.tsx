import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import { JobsList } from '../JobsList/JobsList.component';
import { AddButton } from '../Elements/AddButton';

import { useGetLists, useUpdateLists } from '@/features/board/api';
import usePrevious from '@/hooks/usePrevious';
import { useStyles } from './Board.styles';

const reorder = (list: any, startIndex: number, endIndex: number) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};

const InnerList = React.memo(({ lists }: { lists: any }) => {
	return lists.map((list: any, index: number) => {
		return <JobsList key={list.id} index={index} list={list} />;
	});
});

export const Board = () => {
	const params = useParams();
	const {
		data: lists,
		isLoading,
		isSuccess,
		isError,
	} = useGetLists({
		boardId: params.boardId as string,
		config: {
			select: (data) => data.lists,
		},
	});

	const updateMutation = useUpdateLists();
	const { classes } = useStyles();
	console.log('Lists State: ', lists);

	if (isLoading) {
		return <h1>Loading Lists...</h1>;
	}

	if (isError) {
		return <h1>Error: Could not fetch lists</h1>;
	}

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

		// Reorder Lists
		if (type === 'list') {
			const newLists = reorder(lists, source.index, destination.index);
			updateMutation.mutate({
				boardId: params.boardId as string,
				data: { lists: newLists },
			});
		}
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId='all-lists' direction='horizontal' type='list'>
				{(provided, snapshot) => (
					<div
						className={classes.boardWrapper}
						{...provided.droppableProps}
						ref={provided.innerRef}
					>
						<InnerList lists={lists} />
						{provided.placeholder}
						<AddButton
							label='Add List'
							className={classes.addButton}
							iconSize='13px'
						/>
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};
