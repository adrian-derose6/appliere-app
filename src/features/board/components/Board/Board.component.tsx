import React, { useState, useEffect } from 'react';
import { Loader, Center } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import { JobsList } from '../JobsList/JobsList.component';
import { AddButton } from '../Elements/AddButton';

import {
	useGetLists,
	useUpdateLists,
	useUpdateJobPosition,
} from '@/features/board/api';
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
	const updateListsMutation = useUpdateLists();
	const updateJobPositionMutation = useUpdateJobPosition();
	const { classes } = useStyles();
	console.log('Lists State: ', lists);

	if (isLoading) {
		return (
			<Center className={classes.boardWrapper}>
				<Loader variant='oval' color='red' size={60} />
			</Center>
		);
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
			updateListsMutation.mutate({
				boardId: params.boardId as string,
				data: { lists: newLists },
			});
			return;
		}

		// Move job card within list
		if (source.droppableId === destination.droppableId) {
			let updatingLists = [...lists];
			let updatingList = updatingLists.find(
				(list: any) => list.id === destination.droppableId
			);
			const reorderedJobList = reorder(
				updatingList.jobs,
				source.index,
				destination.index
			);
			const indexOfList = updatingLists.findIndex(
				(list: any) => list.id === destination.droppableId
			);
			updatingLists[indexOfList].jobs = reorderedJobList;
			const updatingJob = reorderedJobList[destination.index] as any;

			updateJobPositionMutation.mutate({
				boardId: params.boardId as string,
				lists: updatingLists,
				jobId: updatingJob?.id as string,
				data: { pos: destination.index },
			});
			return;
		}

		// Move job to new list
		if (source.droppableId !== destination.droppableId) {
			let updatingLists = [...lists];
			let sourceListIndex = updatingLists.findIndex(
				(list: any) => list.id === source.droppableId
			);
			let destListIndex = updatingLists.findIndex(
				(list: any) => list.id === destination.droppableId
			);
			let updatingJob = updatingLists[sourceListIndex].jobs[source.index];

			updatingLists[sourceListIndex].jobs.splice(source.index, 1);
			updatingLists[destListIndex].jobs.splice(
				destination.index,
				0,
				updatingJob
			);
			console.log(updatingLists);

			updateJobPositionMutation.mutate({
				boardId: params.boardId as string,
				lists: updatingLists,
				jobId: updatingJob?.id as string,
				data: {
					pos: destination.index,
					listId: updatingLists[destListIndex].id,
				},
			});
			return;
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
