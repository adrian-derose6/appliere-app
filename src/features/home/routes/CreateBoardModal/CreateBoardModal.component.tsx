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
import { BrandButton } from '@/components/Buttons';
import { useForm } from '@mantine/form';
import { useStyles } from './CreateBoardModal.styles';

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
			const openTimeout = setTimeout(() => setOpened(true), 50);
		}
	}, [match]);

	const handleModalClose = () => {
		setOpened(false);
		const closeTimeout = setTimeout(() => navigate(-1), 200);
	};

	const form = useForm({
		initialValues: {
			company: '',
			title: '',
		},
	});

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
			<form onSubmit={form.onSubmit((values) => console.log(values))}>
				<Container fluid pt={20} pr={20} pl={20} pb={40}>
					<Autocomplete
						required
						label='Company'
						placeholder='Company'
						data={[]}
						{...form.getInputProps('company')}
						classNames={{ input: classes.input }}
					/>
					<TextInput
						required
						label='Job Title'
						placeholder='Job Title'
						mt='md'
						{...form.getInputProps('title')}
						classNames={{ input: classes.input }}
					/>
					<SimpleGrid mt='md' cols={2}>
						<Select
							required
							searchable
							label='Board'
							data={['Front-End Jobs']}
							classNames={{ input: classes.input }}
						/>
						<Select
							required
							label='List'
							data={['Wishlist']}
							classNames={{ input: classes.input }}
						/>
					</SimpleGrid>
				</Container>
				<Group position='right' p='xs' className={classes.modalFooter}>
					<Button variant='default' size='xs' className={classes.modalButton}>
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
