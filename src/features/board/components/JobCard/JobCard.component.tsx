import { SyntheticEvent, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
	Container,
	Avatar,
	Group,
	Text,
	ActionIcon,
	Modal,
} from '@mantine/core';
import { Draggable } from 'react-beautiful-dnd';
import { FiPlusCircle } from 'react-icons/fi';
import { BsTrash } from 'react-icons/bs';
import { IconContext } from 'react-icons';

import { DeleteJobModal } from '../Modal/DeleteJobModal.component';
import { useDeleteJob } from '@/features/job';
import { useStyles } from './JobCard.styles';

interface JobCardProps {
	jobId: string;
	title: string;
	employer: string;
	boardId: string;
	avatar?: string;
	color?: string;
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
	boardId,
	index,
	title,
	employer,
	avatar,
	color,
}: JobCardProps) => {
	const [modalOpened, setModalOpened] = useState<boolean>(false);
	const deleteJobMutation = useDeleteJob();
	const navigate = useNavigate();
	const location = useLocation();
	const { classes } = useStyles();

	const handleDeleteIconClick = (e: SyntheticEvent) => {
		e.stopPropagation();
		e.preventDefault();
		setModalOpened(true);
	};

	const handleCardClick = (e: SyntheticEvent) => {
		e.stopPropagation();
		navigate(`/job/${jobId}?boardId=${boardId}`, {
			state: { backgroundLocation: location },
		});
	};

	const handleDeleteJob = (e: SyntheticEvent) => {
		deleteJobMutation.mutate({
			jobId,
			boardId,
		});
		setModalOpened(false);
	};

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
						backgroundColor: color || 'rgba(76, 106, 164, 0.85)',
					})}
				>
					<div className={classes.hoverWrapper} onClick={handleCardClick}>
						<ActionIcon
							variant='outline'
							size='md'
							radius='md'
							onClick={handleDeleteIconClick}
							classNames={{ root: classes.trashIconRoot }}
						>
							<BsTrash />
						</ActionIcon>
					</div>
					<DeleteJobModal
						opened={modalOpened}
						loading={false}
						onClose={() => setModalOpened(false)}
						onClickDelete={handleDeleteJob}
					/>
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
