import { useEffect, useState, useCallback } from 'react';
import {
	useNavigate,
	useMatch,
	useLocation,
	useParams,
	useSearchParams,
} from 'react-router-dom';
import {
	Autocomplete,
	Modal,
	TextInput,
	Text,
	Button,
	Group,
	Select,
	ScrollArea,
	Grid,
	SimpleGrid,
	LoadingOverlay,
	Divider,
	MultiSelect,
	Space,
	ActionIcon,
} from '@mantine/core';
import { MdWorkOutline, MdOutlineDashboardCustomize } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { IoPersonAddOutline, IoClose } from 'react-icons/io5';
import { FiPhone } from 'react-icons/fi';
import { useForm } from '@mantine/form';

import {
	MultiTextInput,
	MultiInputState,
} from '@/features/contacts/components/MultiTextInput';
import { BrandButton } from '@/components/Buttons';
import { JobSelectItem } from '@/features/activities/components/Elements';
import { useGetJobs } from '@/features/job';
import { useGetBoards } from '@/features/board';
import { useCreateContact } from '@/features/contacts/api';
import { useStyles } from './AddContactModal.styles';

const OPEN_TIMEOUT = 50;
const CLOSE_TIMEOUT = 200;

export const AddContactModal = ({ editing }: { editing?: boolean }) => {
	const [opened, setOpened] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const locationState = location.state as { backgroundLocation?: Location };
	const [searchParams, setSearchParams] = useSearchParams();
	const boardId = searchParams.get('boardId') as string;
	const matchString = editing ? '/edit-contact/*' : '/add-contact/*';
	const match = useMatch(matchString);
	const {
		data: jobsData,
		isSuccess: jobsSuccess,
		isError: jobsError,
		isLoading: jobsLoading,
	} = useGetJobs({ boardId });
	const {
		data: boardsData,
		isSuccess: boardsSuccess,
		isError: boardsError,
		isLoading: boardsLoading,
	} = useGetBoards();
	const createContactMutation = useCreateContact();
	const { classes } = useStyles();
	const modalLabel = editing ? 'Edit Contact' : 'Save New Contact';
	const buttonLabel = editing ? 'Update' : 'Save';
	const loadingSuccess = jobsSuccess && boardsSuccess;

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
			firstName: '',
			lastName: '',
			jobTitle: '',
			companies: [] as string[],
			location: '',
			emails: [] as any[],
			phones: [] as any[],
			jobs: [] as string[],
			boardId: boardId || '',
		},
	});

	type FormValues = typeof form.values;

	const handleModalClose = () => {
		setOpened(false);
		setTimeout(() => navigate(-1), CLOSE_TIMEOUT);
	};

	const handleAddCompany = (query: string) => {
		const { companies } = form.values;
		form.setFieldValue('companies', [...companies, query]);
	};

	const handleUpdateEmails = useCallback((values: MultiInputState[]) => {
		form.setFieldValue('emails', values);
	}, []);

	const handleUpdatePhones = useCallback((values: MultiInputState[]) => {
		form.setFieldValue('phones', values);
	}, []);

	const handleChangeJob = (value: string, index: number) => {
		const newJobs = [...form.values.jobs];
		newJobs[index] = value;
		form.setFieldValue('jobs', newJobs);
	};

	const addJobSelect = () => {
		const { jobs } = form.values;
		form.setFieldValue('jobs', [...jobs, '']);
	};

	const removeJobSelect = (index: number) => {
		const newJobs = form.values.jobs.filter((job, i) => index !== i);
		form.setFieldValue('jobs', newJobs);
	};

	const handleSubmit = (values: FormValues) => {
		const jobsReq = [...new Set<string>(values.jobs)].filter(
			(job) => job.length > 0
		);
		const companiesReq = values.companies.filter(
			(company) => company.length > 0
		);

		createContactMutation.mutate({
			data: {
				firstName: values.firstName,
				lastName: values.lastName,
				jobTitle: values.jobTitle,
				location: values.location,
				jobs: jobsReq,
				companies: companiesReq,
				emails: values.emails,
				phones: values.phones,
				boardId: values.boardId,
			},
		});
	};

	const jobsSelection = jobsData
		? jobsData.jobs.map((job: any) => {
				return {
					label: job.title,
					employer: job.employer,
					value: job.id,
				};
		  })
		: [];

	const boardsSelection = boardsData
		? boardsData.boards.map((board: any) => ({
				label: board.name,
				value: board.id,
		  }))
		: [];

	return (
		<Modal
			size='lg'
			padding={0}
			title={
				<Group spacing={5}>
					<IoPersonAddOutline />
					<Text>{modalLabel}</Text>
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
				visible={
					createContactMutation.isLoading || jobsLoading || boardsLoading
				}
				overlayOpacity={0.3}
				overlayColor='#c5c5c5'
			/>
			<form onSubmit={form.onSubmit(handleSubmit)}>
				<Grid gutter={0}>
					<Grid.Col span={8} className={classes.mainSection}>
						<ScrollArea p={20}>
							<Group mb={20}>
								<SimpleGrid cols={2}>
									<TextInput
										required
										label='First Name'
										description='Required'
										placeholder='i.e. John'
										{...form.getInputProps('firstName')}
									/>
									<TextInput
										required
										label='Last Name'
										description='Required'
										placeholder='i.e. Smith'
										{...form.getInputProps('lastName')}
									/>
								</SimpleGrid>
							</Group>
							<TextInput
								label='Job Title'
								placeholder='i.e. Senior Developer'
								mb={20}
								{...form.getInputProps('jobTitle')}
							/>
							<SimpleGrid cols={2} mb={20}>
								<MultiSelect
									label='Companies'
									placeholder='+ add company(s)'
									data={form.values.companies}
									searchable
									creatable
									getCreateLabel={(query) => `+ ${query}`}
									onCreate={handleAddCompany}
									transition='pop'
									transitionDuration={120}
									transitionTimingFunction='ease'
								/>
								<Autocomplete
									label='Location'
									placeholder='+ add location'
									data={[]}
									transition='pop'
									transitionDuration={120}
									transitionTimingFunction='ease'
									{...form.getInputProps('location')}
								/>
							</SimpleGrid>
							<MultiTextInput
								label='Emails'
								placeholder='Email'
								addButtonName='email'
								selectOptions={['Work', 'Personal']}
								icon={<AiOutlineMail />}
								onChange={handleUpdateEmails}
							/>
							<Space h={20} />
							<MultiTextInput
								label='Phones'
								placeholder='Phone #'
								addButtonName='phone'
								selectOptions={['Work', 'Personal']}
								icon={<FiPhone />}
								onChange={handleUpdatePhones}
							/>
						</ScrollArea>
					</Grid.Col>
					<Grid.Col span={4} px={10} py={20} className={classes.rightSection}>
						<Text className={classes.linkedTo}>Linked to</Text>
						<Divider mt={5} mb={10} />
						<Text className={classes.selectLabel}>Jobs</Text>
						{form.values.jobs.map((job, jobIndex) => (
							<div className={classes.selectGroup} key={jobIndex}>
								<Select
									placeholder='+ Link job'
									required
									data={jobsSelection}
									itemComponent={JobSelectItem}
									mb={10}
									transition='pop'
									transitionDuration={120}
									transitionTimingFunction='ease'
									icon={<MdWorkOutline />}
									classNames={{ input: classes.jobSelectInput }}
									value={form.values.jobs[jobIndex]}
									onChange={(value: string) => handleChangeJob(value, jobIndex)}
								/>
								<ActionIcon
									variant='transparent'
									onClick={() => removeJobSelect(jobIndex)}
									className={classes.cancelIcon}
								>
									<IoClose />
								</ActionIcon>
							</div>
						))}
						<Button size='xs' variant='subtle' onClick={addJobSelect} compact>
							+ add job
						</Button>
						<Select
							label='Board'
							placeholder='+ Link Board'
							required
							mt={20}
							data={boardsSelection}
							transition='pop'
							transitionDuration={120}
							transitionTimingFunction='ease'
							icon={<MdOutlineDashboardCustomize />}
							classNames={{ input: classes.jobSelectInput }}
							{...form.getInputProps('boardId')}
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
						{buttonLabel}
					</BrandButton>
				</Group>
			</form>
		</Modal>
	);
};
