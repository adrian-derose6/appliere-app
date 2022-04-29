import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { Title, ScrollArea, Group } from '@mantine/core';
import { useHover } from '@mantine/hooks';

import { JobCard } from '../JobCard/JobCard';
import { AddButton } from '../Elements/AddButton';
import { ColumnMenu } from '../ListActions/ColumnMenu';
import { Collection, Job } from '../../types';
import { PlusIcon } from '../Elements/PlusIcon';
import { useStyles } from './BoardColumn.styles';

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

	const { hovered, ref } = useHover();
	const { classes } = useStyles({
		isDraggingOver,
		isHoveringOver: hovered,
		isDragging,
		isEmpty: isListEmpty,
	});

	return (
		<div className={classes.columnWrapper}>
			<Group position='apart' ref={ref} className={classes.columnHeader}>
				<Title className={classes.columnTitle}>{props.list.name}</Title>
				<Group>
					<Link
						to={`/add-job`}
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
			<ScrollArea className={classes.columnList} scrollbarSize={10}>
				<Link
					to={`/add-job`}
					state={{
						backgroundLocation: location,
						list: props.list.id,
					}}
				>
					<AddButton
						label='Add Job'
						style={{ width: '100%', marginTop: 10 }}
						iconSize='13px'
					/>
				</Link>
			</ScrollArea>
		</div>
	);
};
