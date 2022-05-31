import { useState, SyntheticEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
	Collapse,
	Container,
	Group,
	Checkbox,
	TextInput,
	Grid,
	Text,
	Avatar,
	Badge,
	Textarea,
	Select,
	ActionIcon,
} from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { VscCalendar } from 'react-icons/vsc';
import { BsTrash, BsTag } from 'react-icons/bs';

import { DeleteModal } from '@/components/Modal';
import { ActivityBadge, ActivityTimeBadge } from '../Elements';
import { useStyles } from './ActivityItem.styles';
import { DatePicker } from '@mantine/dates';
import { CATEGORY_SELECTION } from '../../constants/category-selection';
import { useDeleteActivity } from '@/features/activities/api';
import { useAuth } from '@/stores/auth';

const imgURL =
	'https://huntr-app.s3.amazonaws.com/5ca045fa6de9e0002ee83078_square';

interface ActivityItemProps {
	id: string;
	title: string;
	note: string;
	completed: boolean;
	job: {
		employer: string;
		title: string;
		id?: string;
	};
	employer?: string;
	activityCategory: any;
	endAt: string;
}

export const ActivityItem = (props: ActivityItemProps) => {
	const { user } = useAuth();
	const navigate = useNavigate();
	const params = useParams();
	const boardId = params.boardId as string;
	const [opened, setOpened] = useState<boolean>(false);
	const [deleteOpened, setDeleteOpened] = useState<boolean>(false);
	const deleteActivityMutation = useDeleteActivity();
	const { classes } = useStyles({ opened });

	const ref = useClickOutside(() => setOpened(false));

	const form = useForm({
		initialValues: {
			title: props.title,
			completed: props.completed,
		},
	});

	type FormValues = typeof form.values;

	const openCollapse = () => {
		setOpened(true);
	};

	const handleInputBlur = (e: SyntheticEvent) => {
		const name = e.currentTarget.getAttribute('data-name') as string;
		const value = form.values[name as keyof FormValues];

		if (value === props[name as keyof ActivityItemProps]) return;
	};

	const handleDeleteIconClick = (e: SyntheticEvent) => {
		e.stopPropagation();
		e.preventDefault();
		setDeleteOpened(true);
	};

	const handleDeleteActivity = (e: SyntheticEvent) => {
		deleteActivityMutation.mutate({
			activityId: props.id,
			boardId,
		});
		setDeleteOpened(false);
	};

	const handleNavigate = () => {
		if (props.job.id) {
			navigate(`/job/${props.job.id}`, {
				state: { backgroundLocation: location },
			});
		}
	};

	return (
		<Container fluid className={classes.itemContainer} ref={ref}>
			<Grid gutter={0} className={classes.grid} columns={16}>
				<Grid.Col span={5} className={classes.col}>
					<Group className={classes.colGroup} align='center' noWrap>
						<Checkbox
							size='xs'
							{...form.getInputProps('completed', { type: 'checkbox' })}
							classNames={{ input: classes.checkboxInput }}
						/>
						<TextInput
							data-name='title'
							placeholder='Title'
							variant='unstyled'
							onClick={openCollapse}
							onBlur={handleInputBlur}
							classNames={{
								root: classes.titleInputRoot,
								input: classes.titleInput,
							}}
							{...form.getInputProps('title')}
						/>
					</Group>
				</Grid.Col>
				<Grid.Col span={2} className={classes.col}>
					<Group
						className={classes.colGroup}
						align='center'
						position='left'
						noWrap
						spacing={7}
					>
						<Avatar size='xs' radius='lg' src={imgURL} />
						<Text className={classes.fieldText1}>{props.job.employer}</Text>
					</Group>
				</Grid.Col>
				<Grid.Col span={5} className={classes.col}>
					<Group className={classes.colGroup} align='center' noWrap>
						<Text className={classes.fieldText2}>{props.job.title}</Text>
					</Group>
				</Grid.Col>
				<Grid.Col span={2} className={classes.col} onClick={handleNavigate}>
					<Group
						className={classes.colGroup}
						align='center'
						position='left'
						noWrap
					>
						{props.activityCategory && (
							<ActivityBadge
								label={props.activityCategory.label}
								value={props.activityCategory.value}
							/>
						)}
					</Group>
				</Grid.Col>
				<Grid.Col span={2} className={classes.col}>
					<Group
						className={classes.colGroup}
						align='center'
						position='right'
						noWrap
					>
						<ActivityTimeBadge time={props.endAt} />
					</Group>
				</Grid.Col>
			</Grid>
			<Collapse
				in={opened}
				transitionDuration={120}
				transitionTimingFunction='ease'
				className={classes.collapse}
			>
				<Textarea
					placeholder='Note'
					autosize
					variant='unstyled'
					classNames={{
						root: classes.noteInput,
						unstyledVariant: classes.noteUnstyled,
					}}
				/>
				<Group noWrap position='apart'>
					<Group noWrap spacing={0} position='left'>
						<DatePicker
							placeholder='Start Date'
							icon={<VscCalendar />}
							classNames={{ input: classes.datePickerInput }}
							styles={{
								input: { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
							}}
							withinPortal={false}
						/>
						<DatePicker
							placeholder='End Date'
							classNames={{ input: classes.datePickerInput }}
							styles={{
								input: {
									borderTopLeftRadius: 0,
									borderBottomLeftRadius: 0,
								},
							}}
							withinPortal={false}
						/>
						<Select
							ml={10}
							mr={10}
							withinPortal={false}
							icon={<BsTag />}
							placeholder='Category'
							data={CATEGORY_SELECTION}
							classNames={{ input: classes.selectInput }}
						/>
						<ActionIcon
							variant='outline'
							size='md'
							radius='sm'
							onClick={handleDeleteIconClick}
							classNames={{ root: classes.trashIconRoot }}
						>
							<BsTrash />
						</ActionIcon>
					</Group>
					<Text className={classes.fieldText1}>
						created by {user?.firstName} {user?.lastName}
					</Text>
				</Group>
			</Collapse>
			<DeleteModal
				itemType='activity'
				onClickDelete={handleDeleteActivity}
				opened={deleteOpened}
				loading={false}
				onClose={() => setDeleteOpened(false)}
				withinPortal={false}
			/>
		</Container>
	);
};
