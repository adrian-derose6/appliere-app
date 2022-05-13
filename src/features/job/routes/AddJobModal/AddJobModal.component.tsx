import { useEffect, useState } from 'react';
import {
	useNavigate,
	useLocation,
	useMatch,
	useParams,
} from 'react-router-dom';
import {
	Modal,
	TextInput,
	Autocomplete,
	Button,
	Group,
	Container,
	Select,
	SimpleGrid,
} from '@mantine/core';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { MdWorkOutline, MdOutlineDashboardCustomize } from 'react-icons/md';
import { ImStack } from 'react-icons/im';
import { useForm } from '@mantine/form';

import { BrandButton } from '@/components/Buttons';
import { useGetBoards } from '@/features/board';
import { useStyles } from './AddJobModal.styles';

const OPEN_TIMEOUT = 50;
const CLOSE_TIMEOUT = 200;

type Props = {};

export const AddJobModal = (props: Props) => {
	const [opened, setOpened] = useState(false);
	const { data: boardsData, isLoading, isSuccess, isError } = useGetBoards();
	const location = useLocation();
	const params = useParams();
	const navigate = useNavigate();
	const match = useMatch('/add-job/*');
	const { classes } = useStyles();

	useEffect(() => {
		if (match?.pathname) {
			setTimeout(() => setOpened(true), OPEN_TIMEOUT);
		}
	}, [match]);

	const currentBoard = boardsData?.boards.find(
		(board) => board.id === params.boardId
	);
	const boardLists = currentBoard?.lists;
	const currentList = boardLists?.find((list) => list.id === params.listId);

	let boardSelectData;
	let listSelectData;

	console.log('Board select: ', boardsData);

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

	console.log(boardSelectData);
	console.log(listSelectData);

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
		console.log(values);
	};

	return (
		<Modal
			size='sm'
			padding={0}
			title='Add Job'
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
			<form onSubmit={form.onSubmit(handleSubmit)}>
				<Container fluid pt={20} pr={20} pl={20} pb={20}>
					<Autocomplete
						required
						placeholder='Company'
						description='Required'
						data={[]}
						icon={<HiOutlineOfficeBuilding />}
						{...form.getInputProps('employer')}
						classNames={{ input: classes.input }}
					/>
					<TextInput
						required
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
							placeholder='Board'
							description='Required'
							icon={<MdOutlineDashboardCustomize />}
							data={boardSelectData as []}
							{...form.getInputProps('boardId')}
							classNames={{ input: classes.input }}
						/>
						<Select
							required
							placeholder='List'
							description='Required'
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
