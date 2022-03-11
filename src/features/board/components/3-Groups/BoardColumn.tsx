import { Container, Title, ScrollArea, Button } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { JobCard } from '../4-Elements/JobCard';
import { Collection, Job } from '../../types/board-types';
import { useStyles } from './BoardColumn.styles';
import { useState } from 'react';

interface BoardColumnProps {
	index: number;
	collection: Collection;
	jobs: Job[];
}

export const BoardColumn = (props: BoardColumnProps) => {
	const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);
	const { hovered, ref } = useHover();
	const { classes } = useStyles({ isDraggingOver, isHoveringOver: hovered });

	return (
		<Draggable draggableId={props.collection.id} index={props.index}>
			{(provided) => (
				<div
					{...provided.draggableProps}
					ref={provided.innerRef}
					className={classes.columnWrapper}
				>
					<Container
						fluid
						className={classes.columnHeader}
						ref={ref}
						{...provided.dragHandleProps}
					>
						<Title className={classes.columnTitle}>
							{props.collection.title}
						</Title>
					</Container>
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
								>
									{props.jobs.map((job: Job, index: number) => (
										<JobCard key={job.id} job={job} index={index} />
									))}
									{provided.placeholder}
									<Button
										variant='subtle'
										color='lightgray'
										className={classes.columnListButton}
									>
										+ Add job
									</Button>
								</ScrollArea>
							);
						}}
					</Droppable>
				</div>
			)}
		</Draggable>
	);
};
