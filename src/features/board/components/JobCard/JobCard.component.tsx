import { Container, Avatar, Group, Text } from '@mantine/core';
import { Draggable } from 'react-beautiful-dnd';
import { FiPlusCircle } from 'react-icons/fi';
import { IconContext } from 'react-icons';

import { useStyles } from './JobCard.styles';

interface JobCardProps {
	jobId: string;
	title: string;
	employer: string;
	avatar?: string;
	companyColor?: string;
	index: number;
}

const PlusIcon = () => {
	return (
		<IconContext.Provider value={{ size: '15px', color: 'white' }}>
			<FiPlusCircle />
		</IconContext.Provider>
	);
};

export const JobCard = ({
	jobId,
	index,
	title,
	employer,
	avatar,
	companyColor,
}: JobCardProps) => {
	const { classes } = useStyles();

	return (
		<Draggable draggableId={jobId} index={index}>
			{(provided, snapshot) => (
				<Container
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					className={classes.card}
					px={0}
					sx={() => ({
						backgroundColor: companyColor || 'rgba(76, 106, 164, 0.85)',
					})}
				>
					<Group className={classes.info}>
						<Avatar radius='xl' size={30} src={avatar || ''}></Avatar>
						<div>
							<Text className={classes.title}>{title}</Text>
							<Text className={classes.company}>{employer}</Text>
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