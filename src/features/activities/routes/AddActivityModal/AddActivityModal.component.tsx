import { useEffect, useState } from 'react';
import {
	useNavigate,
	useMatch,
	useParams,
	useLocation,
} from 'react-router-dom';
import {
	Modal,
	TextInput,
	Text,
	Textarea,
	Chips,
	Chip,
	Checkbox,
	Button,
	Group,
	Select,
	ScrollArea,
	Grid,
	SimpleGrid,
	LoadingOverlay,
	Divider,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { CgAdd } from 'react-icons/cg';
import { useForm } from '@mantine/form';

import { CATEGORY_SELECTION } from '@/features/activities/constants/category-selection';
import { BrandButton } from '@/components/Buttons';
import { JobSelectItem } from '@/features/activities/components/Elements';
import { useGetJobs } from '@/features/job';
import { useStyles } from './AddActivityModal.styles';

const OPEN_TIMEOUT = 50;
const CLOSE_TIMEOUT = 200;

type Props = {};

export const AddActivityModal = (props: Props) => {
	const [opened, setOpened] = useState(false);
	const params = useParams();
	const boardId = params.boardId as string;
	const navigate = useNavigate();
	const location = useLocation();
	const locationState = location.state as { backgroundLocation?: Location };
	const match = useMatch('/add-activity/*');
	const { data, isLoading, isSuccess, isError } = useGetJobs({ boardId });
	const { classes } = useStyles();

	useEffect(() => {
		if (match?.pathname) {
			setTimeout(() => setOpened(true), OPEN_TIMEOUT);
		}

		return () => {
			locationState.backgroundLocation = undefined;
		};
	}, [match]);

	const form = useForm({
		initialValues: {
			title: '',
			note: '',
			activityCategory: 'APPLY',
			boardId: params.boardId as string,
			jobId: '',
			startAt: new Date(),
			endAt: new Date(),
			completed: false,
		},
	});

	type FormValues = typeof form.values;

	useEffect(() => {
		const { activityCategory } = form.values;
		const newTitle = CATEGORY_SELECTION.find(
			(item) => item.value === activityCategory
		)?.label;

		form.setFieldValue('title', newTitle as string);
	}, [form.values.activityCategory]);

	const handleModalClose = () => {
		setOpened(false);
		setTimeout(() => navigate(-1), CLOSE_TIMEOUT);
	};

	const handleSubmit = (values: FormValues) => {
		const startAt = values.startAt.toUTCString();
		const endAt = values.endAt.toUTCString();
		const activityCategory = CATEGORY_SELECTION.find(
			(item) => item.value === values.activityCategory
		);
		console.log(values);
	};

	const jobsSelection = data
		? data.jobs.map((job: any) => {
				return {
					label: job.title,
					employer: job.employer,
					value: job.id,
				};
		  })
		: [];

	return (
		<Modal
			size='lg'
			padding={0}
			title={
				<Group spacing={5}>
					<CgAdd />
					<Text>Log Activity</Text>
				</Group>
			}
			centered
			closeOnClickOutside
			opened={opened}
			onClose={handleModalClose}
			withCloseButton={false}
			classNames={{
				modal: classes.modal,
				header: classes.modalHeader,
				title: classes.modalTitle,
				close: classes.modalClose,
				overlay: classes.modalOverlay,
			}}
		>
			<LoadingOverlay
				visible={false}
				overlayOpacity={0.3}
				overlayColor='#c5c5c5'
			/>
			<form onSubmit={form.onSubmit(handleSubmit)}>
				<Grid gutter={0}>
					<Grid.Col span={8} p={20} className={classes.mainSection}>
						<TextInput
							required
							label='Title'
							placeholder='i.e. Apply'
							classNames={{ label: classes.inputLabel }}
							mb={20}
							{...form.getInputProps('title')}
						/>

						<Text className={classes.inputLabel}>Category</Text>
						<ScrollArea scrollbarSize={8} style={{ height: 130 }} mb={20}>
							<Chips
								multiple={false}
								size='xs'
								mt={10}
								variant='filled'
								{...form.getInputProps('activityCategory')}
							>
								{CATEGORY_SELECTION.map((category, index) => {
									return (
										<Chip key={index} value={category.value}>
											{category.label}
										</Chip>
									);
								})}
							</Chips>
						</ScrollArea>
						<SimpleGrid cols={2} mb={20}>
							<DatePicker
								label='Start Date'
								placeholder='+ set start date'
								clearable={false}
								required
								{...form.getInputProps('startAt')}
							/>
							<DatePicker
								label='End Date'
								placeholder='+ set end date'
								clearable={false}
								required
								{...form.getInputProps('endAt')}
							/>
						</SimpleGrid>
						<Textarea
							label='Note'
							placeholder='i.e: A note about the activity'
							mb={20}
							{...form.getInputProps('note')}
						/>
						<Checkbox
							label='Mark as Completed'
							classNames={{ label: classes.checkboxLabel }}
							{...form.getInputProps('completed', { type: 'checkbox' })}
						/>
					</Grid.Col>
					<Grid.Col span={4} px={10} py={20} className={classes.rightSection}>
						<Text className={classes.linkedTo}>Linked to</Text>
						<Divider mt={5} mb={10} />
						<Select
							label='Job'
							placeholder='+ Link job'
							required
							data={jobsSelection}
							itemComponent={JobSelectItem}
							transition='pop'
							transitionDuration={120}
							transitionTimingFunction='ease'
							classNames={{ input: classes.jobSelectInput }}
						/>
					</Grid.Col>
				</Grid>
				<Group position='right' p='xs' className={classes.modalFooter}>
					<Button
						variant='default'
						size='xs'
						className={classes.modalButton}
						onClick={handleModalClose}
					>
						Discard
					</Button>
					<BrandButton type='submit' size='xs' className={classes.modalButton}>
						Save Activity
					</BrandButton>
				</Group>
			</form>
		</Modal>
	);
};
