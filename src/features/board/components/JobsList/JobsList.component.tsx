import React, { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { Title, ScrollArea, Group } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { JobCard } from '../JobCard/JobCard.component';
import { AddButton } from '../Elements/AddButton';
import { ColumnMenu } from '../ListActions/ColumnMenu';
import { Collection, Job } from '../../types';
import { PlusIcon } from '../Elements/PlusIcon';
import { useStyles } from './JobsList.styles';

interface JobsListProps {
	index: number;
	list: any;
	jobs?: any;
}

export const JobsList = (props: JobsListProps) => {
	const [isDragging, setIsDragging] = useState<boolean>(false);
	const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);
	const isListEmpty = isEmpty(props.jobs);
	const location = useLocation();
	const params = useParams();
	const { hovered, ref } = useHover();
	const { classes } = useStyles({
		isDraggingOver,
		isHoveringOver: hovered,
		isDragging,
		isEmpty: isListEmpty,
	});

	const addJobPath = `/add-job/${params.boardId}/${props.list.id}`;

	return (
		<Draggable draggableId={props.list.id} index={props.index}>
			{(provided, snapshot) => {
				if (isDragging !== snapshot.isDragging) {
					setIsDragging(snapshot.isDragging);
				}
				return (
					<div
						{...provided.draggableProps}
						ref={provided.innerRef}
						className={classes.columnWrapper}
					>
						<Group
							position='apart'
							ref={ref}
							{...provided.dragHandleProps}
							className={classes.columnHeader}
						>
							<Title className={classes.columnTitle}>{props.list.name}</Title>
							<Group>
								<Link
									to={addJobPath}
									state={{
										backgroundLocation: location,
										list: props.list.id,
									}}
								>
									<PlusIcon size='13px' />
								</Link>
								<ColumnMenu />
							</Group>
						</Group>
						<Droppable droppableId={props.list.id} type='job'>
							{(provided, snapshot) => {
								if (isDraggingOver !== snapshot.isDraggingOver) {
									setIsDraggingOver(snapshot.isDraggingOver);
								}

								return (
									<ScrollArea
										className={classes.columnList}
										ref={provided.innerRef}
										{...provided.droppableProps}
										scrollbarSize={10}
									>
										{props.list.jobs.map((job: any, index: number) => {
											return (
												<JobCard
													key={job.id}
													jobId={job.id}
													boardId={job.boardId}
													title={job.title}
													employer={job.employer}
													color={job.color}
													index={index}
												/>
											);
										})}
										{provided.placeholder}
										<Link
											to={addJobPath}
											state={{
												backgroundLocation: location,
											}}
										>
											<AddButton
												label='Add Job'
												style={{ width: '100%', marginTop: 10 }}
												iconSize='13px'
											/>
										</Link>
									</ScrollArea>
								);
							}}
						</Droppable>
					</div>
				);
			}}
		</Draggable>
	);
};
