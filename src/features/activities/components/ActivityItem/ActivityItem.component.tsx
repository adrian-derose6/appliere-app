import { useState, SyntheticEvent, useEffect, useRef } from 'react';
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
import { BsTrash } from 'react-icons/bs';

import { DeleteModal } from '@/components/Modal';
import { useStyles } from './ActivityItem.styles';
import { DatePicker } from '@mantine/dates';

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
	};
	employer?: string;
}

export const ActivityItem = (props: ActivityItemProps) => {
	const [opened, setOpened] = useState<boolean>(false);
	const [deleteOpened, setDeleteOpened] = useState<boolean>(false);
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
		setDeleteOpened(false);
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
						<Text className={classes.employer}>{props.job.employer}</Text>
					</Group>
				</Grid.Col>
				<Grid.Col span={5} className={classes.col}>
					<Group className={classes.colGroup} align='center' noWrap>
						<Text className={classes.jobTitle}>{props.job.title}</Text>
					</Group>
				</Grid.Col>
				<Grid.Col span={2} className={classes.col}>
					<Group
						className={classes.colGroup}
						align='center'
						position='left'
						noWrap
					>
						<Badge
							variant='filled'
							radius='sm'
							color='green'
							classNames={{ inner: classes.badgeInner }}
						>
							Phone Interview
						</Badge>
					</Group>
				</Grid.Col>
				<Grid.Col span={2} className={classes.col}>
					<Group
						className={classes.colGroup}
						align='center'
						position='right'
						noWrap
					>
						<Badge
							variant='light'
							radius='sm'
							color='blue'
							classNames={{ inner: classes.badgeInner }}
						>
							Today
						</Badge>
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
				<Group noWrap spacing={0}>
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
						placeholder='Category'
						data={[
							{
								label: 'Email',
								value: 'EMAIL',
							},
							{
								label: 'Meeting',
								value: 'MEETING',
							},
							{
								label: 'Phone Call',
								value: 'PHONE_CALL',
							},
							{
								label: 'Reach Out',
								value: 'REACH_OUT',
							},
							{
								label: 'Get Reference',
								value: 'GET_REFERENCE',
							},
							{
								label: 'Prep Cover Letter',
								value: 'PREP_COVER_LETTER',
							},
							{
								label: 'Apply',
								value: 'APPLY',
							},
							{
								label: 'Follow Up',
								value: 'SEND_AVAILABILITY',
							},
							{
								label: 'Phone Screen',
								value: 'PHONE_SCREEN',
							},
							{
								label: 'Phone Interview',
								value: 'PHONE_INTERVIEW',
							},
							{
								label: 'Assignment',
								value: 'ASSIGNMENT',
							},
							{
								label: 'On Site Interview',
								value: 'ON_SITE_INTERVIEW',
							},
							{
								label: 'Rejected',
								value: 'REJECTED',
							},
							{
								label: 'Offer Received',
								value: 'OFFER_RECEIVED',
							},
							{
								label: 'Prep Resume',
								value: 'PREP_RESUME',
							},
							{
								label: 'Decline Offer',
								value: 'DECLINE_OFFER',
							},
							{
								label: 'Accept Offer',
								value: 'ACCEPT_OFFER',
							},
							{
								label: 'Apply',
								value: 'APPLY',
							},
							{
								label: 'Other',
								value: 'OTHER',
							},
							{
								label: 'Prep for Interview',
								value: 'PREP_FOR_INTERVIEW',
							},
							{
								label: 'Send Thank You',
								value: 'SEND_THANK_YOU',
							},
							{
								label: 'Networking Event',
								value: 'NETWORKING_EVENT',
							},
							{
								label: 'Application Withdrawn',
								value: 'APPLICATION_WITHDRAWN',
							},
						]}
						classNames={{ input: classes.selectInput }}
					/>
					<ActionIcon>
						<ActionIcon
							variant='outline'
							size='md'
							radius='sm'
							onClick={handleDeleteIconClick}
							classNames={{ root: classes.trashIconRoot }}
						>
							<BsTrash />
						</ActionIcon>
					</ActionIcon>
				</Group>
			</Collapse>
			<DeleteModal
				itemType='activity'
				onClickDelete={handleDeleteActivity}
				opened={deleteOpened}
				loading={false}
				onClose={() => setDeleteOpened(false)}
			/>
		</Container>
	);
};
