import { Container, Title } from '@mantine/core';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { JobCard } from '../Elements/JobCard';
import { Collection, Job } from '../../types/board-types';
import { useStyles } from './BoardColumn.styles';

interface BoardColumnProps {
	index: number;
	collection: Collection;
	jobs: Job[];
}

export const BoardColumn = (props: BoardColumnProps) => {
	return (
		<Draggable draggableId={props.collection.id} index={props.index}>
			{(provided) => (
				<Container {...provided.draggableProps} ref={provided.innerRef}>
					<Title {...provided.dragHandleProps}>{props.collection.title}</Title>
					<Droppable
						droppableId={props.collection.id}
						type='job'
						//type={props.column.id === 'column-3' ? 'done' : 'active'}
					>
						{(provided, snapshot) => (
							<Container
								ref={provided.innerRef}
								{...provided.droppableProps}
								//isDraggingOver={snapshot.isDraggingOver}
							>
								{props.jobs.map((job: Job, index: number) => (
									<JobCard key={job.id} job={job} index={index} />
								))}
								{provided.placeholder}
							</Container>
						)}
					</Droppable>
				</Container>
			)}
		</Draggable>
	);
};
