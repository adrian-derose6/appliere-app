import { useEffect, useState } from 'react';
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
	UnstyledButton,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { AiOutlineMail } from 'react-icons/ai';
import { IoPersonAddOutline } from 'react-icons/io5';
import { useForm } from '@mantine/form';

import {
	CATEGORY_SELECTION,
	ActivityCategoryItem,
} from '@/features/activities/constants/category-selection';
import { MultiTextInput } from '@/features/contacts/components/MultiTextInput';
import { BrandButton } from '@/components/Buttons';
import { JobSelectItem } from '@/features/activities/components/Elements';
import { useGetJobs } from '@/features/job';
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
	const { data, isLoading, isSuccess, isError } = useGetJobs({ boardId });
	const { classes } = useStyles();
	console.log(boardId);

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
			emails: [],
			phone: [],
			jobId: '',
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

	const handleSubmit = (values: FormValues) => {
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
					<Grid.Col span={8} p={20} className={classes.mainSection}>
						<ScrollArea>
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
								required
								label='Job Title'
								placeholder='i.e. Senior Developer'
								mb={20}
								{...form.getInputProps('firstName')}
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
							classNames={{ input: classes.jobSelectInput }}
							{...form.getInputProps('jobId')}
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
