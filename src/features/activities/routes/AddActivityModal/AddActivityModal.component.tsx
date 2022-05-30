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
	Grid,
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
import { useStyles } from './AddActivityModal.styles';

const OPEN_TIMEOUT = 50;
const CLOSE_TIMEOUT = 200;

type Props = {};

export const AddActivityModal = (props: Props) => {
	const [opened, setOpened] = useState(false);
	const { data: boardsData, isLoading, isSuccess, isError } = useGetBoards();
	const createJobMutation = useCreateJob();
	const params = useParams();
	const navigate = useNavigate();
	const location = useLocation();
	const locationState = location.state as { backgroundLocation?: Location };
	const match = useMatch('/add-activity/*');
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
			activityCategory: '',
			boardId: params.boardId as string,
			jobId: '',
			startDate: '',
			endDate: '',
		},
	});

	type FormValues = typeof form.values;

	const handleModalClose = () => {
		setOpened(false);
		setTimeout(() => navigate(-1), CLOSE_TIMEOUT);
	};

	const handleSubmit = (values: FormValues) => {};

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
				visible={createJobMutation.isLoading}
				overlayOpacity={0.3}
				overlayColor='#c5c5c5'
			/>
			<form onSubmit={form.onSubmit(handleSubmit)}>
				<Grid>
					<Grid.Col span={9}>
						<Container
							fluid
							pt={10}
							pr={20}
							pl={20}
							pb={10}
							className={classes.mainSection}
						>
							<TextInput
								required
								label='Title'
								placeholder='i.e. Apply'
								description='Required'
								mt='md'
								{...form.getInputProps('title')}
							/>
							<SimpleGrid mt='md' cols={2}></SimpleGrid>
						</Container>
					</Grid.Col>
					<Grid.Col span={3}>
						<Container></Container>
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
						Save Job
					</BrandButton>
				</Group>
			</form>
		</Modal>
	);
};
