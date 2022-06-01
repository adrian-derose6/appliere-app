import { useState, useEffect, SyntheticEvent, ChangeEvent } from 'react';
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
import {
	ActivityCategoryItem,
	CATEGORY_SELECTION,
} from '../../constants/category-selection';
import {
	useDeleteActivity,
	useUpdateActivity,
} from '@/features/activities/api';
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
	startAt: string;
	endAt: string;
}

export const ActivityItem = (props: ActivityItemProps) => {
	const { user } = useAuth();
	const navigate = useNavigate();
	const params = useParams();
	const boardId = params.boardId as string;
	const [opened, setOpened] = useState<boolean>(false);
	const [deleteOpened, setDeleteOpened] = useState<boolean>(false);
	const [startAt, onChangeStartAt] = useState<Date>(new Date(props.startAt));
	const [endAt, onChangeEndAt] = useState<Date>(new Date(props.endAt));
	const deleteActivityMutation = useDeleteActivity();
	const updateActivityMutation = useUpdateActivity();
	const { classes } = useStyles({ opened, completed: props.completed });

	const clickOutsideRef = useClickOutside(() => setOpened(false));
	const categoryColor = CATEGORY_SELECTION.find(
		(item) => item.value === props.activityCategory.value
	)?.color;

	useEffect(() => {
		if (new Date(props.startAt) !== startAt) {
			handleUpdateDate('startAt', startAt);
		}
		if (new Date(props.endAt) !== endAt) {
			handleUpdateDate('endAt', endAt);
		}
	}, [startAt, endAt]);

	const openCollapse = () => {
		setOpened(true);
	};

	const handleUpdateInput = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, type, checked, value } = e.currentTarget;
		const inputValue = type === 'checkbox' ? checked : value;

		if (inputValue === props[name as keyof ActivityItemProps]) return;
		updateActivityMutation.mutate({
			activityId: props.id,
			data: { [name]: inputValue },
		});
	};

	const handleUpdateDate = (name: 'startAt' | 'endAt', value: Date) => {
		const dateUTC = value.toUTCString();
		updateActivityMutation.mutate({
			activityId: props.id,
			data: { [name]: value },
		});
	};

	const handleUpdateCategory = (value: string) => {
		const activityCategory = CATEGORY_SELECTION.find(
			(item) => item.value === value
		) as ActivityCategoryItem;

		updateActivityMutation.mutate({
			activityId: props.id,
			data: { activityCategory },
		});
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
		<Container fluid className={classes.itemContainer} ref={clickOutsideRef}>
			<Grid gutter={0} className={classes.grid} columns={16}>
				<Grid.Col span={5} className={classes.col}>
					<Group className={classes.colGroup} align='center' noWrap>
						<Checkbox
							size='xs'
							name='completed'
							defaultChecked={props.completed}
							onChange={handleUpdateInput}
							classNames={{ input: classes.checkboxInput }}
						/>
						<TextInput
							name='title'
							placeholder='Title'
							variant='unstyled'
							onClick={openCollapse}
							onBlur={handleUpdateInput}
							defaultValue={props.title || ''}
							classNames={{
								root: classes.titleInputRoot,
								input: classes.titleInput,
							}}
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
						<ActivityTimeBadge time={props.endAt} completed={props.completed} />
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
							defaultValue={new Date(props.startAt)}
							withinPortal={false}
							onChange={(value: Date) => onChangeStartAt(value)}
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
							defaultValue={new Date(props.endAt)}
							withinPortal={false}
							onChange={(value: Date) => onChangeEndAt(value)}
						/>
						<Select
							ml={10}
							mr={10}
							withinPortal={false}
							icon={<BsTag />}
							placeholder='Category'
							data={CATEGORY_SELECTION}
							defaultValue={props.activityCategory.value}
							rightSection={
								<div
									className={classes.rightSectionInner}
									style={{ backgroundColor: categoryColor }}
								></div>
							}
							onChange={handleUpdateCategory}
							classNames={{
								input: classes.selectInput,
								rightSection: classes.selectRightSection,
							}}
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
