import { Container, Avatar, Group, Text } from '@mantine/core';
import { Draggable } from 'react-beautiful-dnd';
import { FiPlusCircle } from 'react-icons/fi';
import { IconContext } from 'react-icons';

import { Job } from '../../types/board-types';
import { useStyles } from './JobCard.styles';

interface JobCardProps {
	job: Job;
	index: number;
}

const PlusIcon = () => {
	return (
		<IconContext.Provider value={{ size: '15px', color: 'white' }}>
			<FiPlusCircle />
		</IconContext.Provider>
	);
};

export const JobCard = (props: JobCardProps) => {
	const { classes } = useStyles();

	return (
		<Draggable draggableId={props.job.id} index={props.index}>
			{(provided, snapshot) => (
				<Container
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					className={classes.card}
					px={0}
					sx={() => ({
						backgroundColor: props.job.companyColor,
					})}
				>
					<Group className={classes.info}>
						<Avatar radius='xl' size={30} src={props.job.imageSrc}></Avatar>
						<div>
							<Text className={classes.title}>{props.job.title}</Text>
							<Text className={classes.company}>{props.job.company}</Text>
						</div>
					</Group>
					<Group position='right' className={classes.misc} spacing='xs'>
						<Text className={classes.timeAgo}>10m</Text>
						<PlusIcon />
					</Group>
				</Container>
			)}
		</Draggable>
	);
};
