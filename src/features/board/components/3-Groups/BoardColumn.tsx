import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { Title, ScrollArea, Group } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { JobCard } from '../4-Elements/JobCard';
import { AddButton } from '../4-Elements/AddButton';
import { ColumnMenu } from '../4-Elements/ColumnMenu';
import { Collection, Job } from '../../types';
import { PlusIcon } from '../4-Elements/PlusIcon';
import { useStyles } from './BoardColumn.styles';

interface BoardColumnProps {
	index: number;
	collection: Collection;
	jobs: Job[];
}

export const BoardColumn = (props: BoardColumnProps) => {
	const [isDragging, setIsDragging] = useState<boolean>(false);
	const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);
	const columnEmpty = isEmpty(props.jobs);

	const location = useLocation();
	const { boardId } = useParams();

	const { hovered, ref } = useHover();
	const { classes } = useStyles({
		isDraggingOver,
		isHoveringOver: hovered,
		isDragging,
		isEmpty: columnEmpty,
	});

	return (
		<Draggable draggableId={props.collection.id} index={props.index}>
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
							<Title className={classes.columnTitle}>
								{props.collection.title}
							</Title>
							<Group>
								<Link
									to={`/add-job`}
									state={{
										backgroundLocation: location,
										list: props.collection.id,
									}}
								>
									<PlusIcon size='13px' />
								</Link>
								<ColumnMenu />
							</Group>
						</Group>
						<Droppable
							droppableId={props.collection.id}
							type='job'
							//type={props.column.id === 'column-3' ? 'done' : 'active'}
						>
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
										{props.jobs.map((job: Job, index: number) => (
											<JobCard key={job.id} job={job} index={index} />
										))}
										{provided.placeholder}
										<Link
											to={`/add-job`}
											state={{
												backgroundLocation: location,
												list: props.collection.id,
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
