import { useEffect, useState, useCallback } from 'react';
import {
	useNavigate,
	useMatch,
	useParams,
	useLocation,
	useSearchParams,
} from 'react-router-dom';
import {
	Autocomplete,
	Modal,
	TextInput,
	Text,
	Container,
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
	MultiSelect,
	Space,
} from '@mantine/core';
import {
	MdWorkOutline,
	MdOutlineDashboardCustomize,
	MdOutlineAddCircleOutline,
} from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { IoPersonAddOutline } from 'react-icons/io5';
import { FiPhone } from 'react-icons/fi';
import { useForm } from '@mantine/form';

import {
	CATEGORY_SELECTION,
	ActivityCategoryItem,
} from '@/features/activities/constants/category-selection';
import {
	MultiTextInput,
	MultiInputState,
} from '@/features/contacts/components/MultiTextInput';
import { BrandButton } from '@/components/Buttons';
import { JobSelectItem } from '@/features/activities/components/Elements';
import { useGetJobs } from '@/features/job';
import { useGetBoards } from '@/features/board';
import { useStyles } from './AddContactModal.styles';

const OPEN_TIMEOUT = 50;
const CLOSE_TIMEOUT = 200;

export const AddContactModal = () => {
	const [opened, setOpened] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const locationState = location.state as { backgroundLocation?: Location };
	const [searchParams, setSearchParams] = useSearchParams();
	const boardId = searchParams.get('boardId') as string;
	const match = useMatch('/add-contact/*');
	const { data: jobsData } = useGetJobs({ boardId });
	const { data: boardsData } = useGetBoards();

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
			firstName: '',
			lastName: '',
			jobTitle: '',
			companies: [] as string[],
			location: '',
			emails: [] as MultiInputState[],
			phones: [] as MultiInputState[],
			jobId: '',
			boardId: boardId || '',
		},
	});

	console.log(form.values);

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

	const handleSubmit = (values: FormValues) => {
		console.log(values);
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
					<Text>Save New Contact</Text>
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
						<Select
							label='Job'
							placeholder='+ Link job'
							required
							data={jobsSelection}
							itemComponent={JobSelectItem}
							transition='pop'
							transitionDuration={120}
							transitionTimingFunction='ease'
							icon={<MdWorkOutline />}
							classNames={{ input: classes.jobSelectInput }}
							mb={20}
							{...form.getInputProps('jobId')}
						/>
						<Select
							label='Board'
							placeholder='+ Link Board'
							required
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
						Save Contact
					</BrandButton>
				</Group>
			</form>
		</Modal>
	);
};
