import { Container } from '@mantine/core';
import { Draggable } from 'react-beautiful-dnd';

import { Job } from '../../types/board-types';
import { useStyles } from './JobCard.styles';

interface JobCardProps {
	job: Job;
	index: number;
}

export const JobCard = (props: JobCardProps) => {
	const { classes } = useStyles();

	return (
		<Draggable draggableId={props.job.id} index={props.index}>
			{(provided, snapshot) => (
				<Container
					className={classes.card}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
				>
					{props.job.company}
				</Container>
			)}
		</Draggable>
	);
};
