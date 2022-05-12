import { useEffect, useState } from 'react';
import { useNavigate, useLocation, useMatch } from 'react-router-dom';
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

import { BrandButton } from '@/components/Buttons';
import { useForm } from '@mantine/form';
import { useStyles } from './AddJobModal.styles';

const OPEN_TIMEOUT = 50;
const CLOSE_TIMEOUT = 200;

type Props = {};

export const AddJobModal = (props: Props) => {
	const [opened, setOpened] = useState(false);
	const location = useLocation();
	const locationState = location.state;
	const navigate = useNavigate();
	const match = useMatch('/add-job/*');
	const { classes } = useStyles();

	useEffect(() => {
		if (match?.pathname) {
			setTimeout(() => setOpened(true), OPEN_TIMEOUT);
		}
	}, [match]);

	const boardSelectData = [
		{
			name: 'Web Development',
			value: '626d9e183870543003900a8a',
		},
		{
			name: 'Tech Jobs',
			value: '626d9e183870543003900a8b',
		},
	];

	const form = useForm({
		initialValues: {
			employer: '',
			title: '',
			boardId: '',
			listId: '',
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
							allowDeselect
							icon={<MdOutlineDashboardCustomize />}
							data={[]}
							{...form.getInputProps('boardId', {})}
							classNames={{ input: classes.input }}
						/>
						<Select
							required
							placeholder='List'
							description='Required'
							icon={<ImStack />}
							data={['Wishlist']}
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
