import { useEffect, useState } from 'react';
import { useNavigate, useMatch, useParams } from 'react-router-dom';
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
import { useGetLists } from '@/features/board';
import { useCreateJob } from '@/features/job/api';
import { useStyles } from './JobModal.styles';

const OPEN_TIMEOUT = 50;
const CLOSE_TIMEOUT = 200;

type Props = {};

export const JobModal = (props: Props) => {
	const [opened, setOpened] = useState(false);
	const params = useParams();
	const {
		data: listsData,
		isLoading,
		isSuccess,
		isError,
	} = useGetLists({ boardId: params.boardId as string });
	const createJobMutation = useCreateJob();

	const navigate = useNavigate();
	const match = useMatch('/job/*');
	const { classes } = useStyles();

	useEffect(() => {
		if (match?.pathname) {
			setTimeout(() => setOpened(true), OPEN_TIMEOUT);
		}
	}, [match]);

	const currentList = listsData?.lists.find(
		(list: any) => list.id === params.listId
	);

	let listSelectData;

	if (isLoading || isError) {
		listSelectData = [];
	}

	if (isSuccess) {
		listSelectData = listsData.lists?.map((list: any) => {
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
			salary: '',
			location: '',
			color: '',
			description: '',
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
			size='xl'
			padding={0}
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
				visible={createJobMutation.isLoading}
				overlayOpacity={0.3}
				overlayColor='#c5c5c5'
			/>
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
						Save
					</BrandButton>
				</Group>
			</form>
		</Modal>
	);
};
