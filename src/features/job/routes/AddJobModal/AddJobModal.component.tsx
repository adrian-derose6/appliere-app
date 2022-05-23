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
	Autocomplete,
	Button,
	Group,
	Container,
	Select,
	SimpleGrid,
	LoadingOverlay,
} from '@mantine/core';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import {
	MdWorkOutline,
	MdOutlineDashboardCustomize,
	MdOutlineAddCircleOutline,
} from 'react-icons/md';
import { GrAddCircle } from 'react-icons/gr';
import { CgAdd } from 'react-icons/cg';
import { ImStack } from 'react-icons/im';
import { useForm } from '@mantine/form';

import { BrandButton } from '@/components/Buttons';
import { useGetBoards } from '@/features/board';
import { useCreateJob } from '@/features/job/api';
import { useStyles } from './AddJobModal.styles';

const OPEN_TIMEOUT = 50;
const CLOSE_TIMEOUT = 200;

type Props = {};

export const AddJobModal = (props: Props) => {
	const [opened, setOpened] = useState(false);
	const { data: boardsData, isLoading, isSuccess, isError } = useGetBoards();
	const {
		mutate: createJobMutate,
		isSuccess: createJobSuccess,
		isLoading: createJobLoading,
		isError: createJobError,
		data: jobData,
	} = useCreateJob();
	const params = useParams();
	const navigate = useNavigate();
	const location = useLocation();
	const locationState = location.state as { backgroundLocation?: Location };
	const match = useMatch('/add-job/*');
	const { classes } = useStyles();

	useEffect(() => {
		if (match?.pathname) {
			setTimeout(() => setOpened(true), OPEN_TIMEOUT);
		}
		if (createJobSuccess) {
			navigate(`/boards/${params.boardId}/job/${jobData?.id}/job-info`);
		}

		return () => {
			locationState.backgroundLocation = undefined;
		};
	}, [match]);

	const currentBoard = boardsData?.boards.find(
		(board) => board.id === params.boardId
	);
	const boardLists = currentBoard?.lists;
	const currentList = boardLists?.find((list) => list.id === params.listId);

	let boardSelectData;
	let listSelectData;

	if (isLoading || isError) {
		boardSelectData = [];
		listSelectData = [];
	}

	if (isSuccess) {
		boardSelectData = boardsData?.boards.map((board) => {
			return {
				label: board.name,
				value: board.id,
			};
		});
		listSelectData = boardLists?.map((list) => {
			return {
				label: list.name,
				value: list.id,
			};
		});
	}

	const form = useForm({
		initialValues: {
			employer: '',
			title: '',
			boardId: params.boardId as string,
			listId: currentList?.id as string,
		},
	});

	type FormValues = typeof form.values;

	const handleModalClose = () => {
		setOpened(false);
		setTimeout(() => navigate(-1), CLOSE_TIMEOUT);
	};

	const handleSubmit = (values: FormValues) => {
		createJobMutate({
			data: {
				title: values.title,
				employer: values.employer,
				boardId: values.boardId,
				listId: values.listId,
			},
		});
	};

	return (
		<Modal
			size='sm'
			padding={0}
			title={
				<Group spacing={5}>
					<CgAdd />
					<Text>Add Job</Text>
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
				visible={createJobLoading}
				overlayOpacity={0.3}
				overlayColor='#c5c5c5'
			/>
			<form onSubmit={form.onSubmit(handleSubmit)}>
				<Container fluid pt={20} pr={20} pl={20} pb={20}>
					<Autocomplete
						required
						label='Company'
						placeholder='Company'
						description='Required'
						data={[]}
						icon={<HiOutlineOfficeBuilding />}
						{...form.getInputProps('employer')}
						classNames={{ input: classes.input }}
					/>
					<TextInput
						required
						label='Job Title'
						placeholder='Job Title'
						description='Required'
						mt='md'
						icon={<MdWorkOutline />}
						{...form.getInputProps('title')}
						classNames={{ input: classes.input }}
					/>
					<SimpleGrid mt='md' cols={2}>
						<Select
							required
							searchable
							label='Board'
							placeholder='Board'
							description='Required'
							transition='pop'
							transitionDuration={120}
							transitionTimingFunction='ease'
							icon={<MdOutlineDashboardCustomize />}
							data={boardSelectData as []}
							{...form.getInputProps('boardId')}
							classNames={{ input: classes.input }}
						/>
						<Select
							required
							label='List'
							placeholder='List'
							description='Required'
							transition='pop'
							transitionDuration={120}
							transitionTimingFunction='ease'
							icon={<ImStack />}
							data={listSelectData as []}
							{...form.getInputProps('listId')}
							classNames={{ input: classes.input }}
						/>
					</SimpleGrid>
				</Container>
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
						Save Job
					</BrandButton>
				</Group>
			</form>
		</Modal>
	);
};
