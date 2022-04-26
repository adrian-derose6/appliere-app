import { useEffect, useState, ReactNode } from 'react';
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
	ModalProps,
	filterFalsyChildren,
} from '@mantine/core';
import { BrandButton } from '@/components/Buttons';
import { useForm } from '@mantine/form';
import { useStyles } from './CreateModal.styles';

type CreateModalProps = ModalProps & {
	children: ReactNode;
};

export const CreateModal = ({ children, ...modalProps }: CreateModalProps) => {
	const [opened, setOpened] = useState(false);
	const location = useLocation();
	const locationState = location.state;
	const navigate = useNavigate();
	const match = useMatch('/add-job/*');
	const { classes } = useStyles();

	const form = useForm({
		initialValues: {
			company: '',
			title: '',
		},
	});

	useEffect(() => {
		if (match?.pathname) {
			const openTimeout = setTimeout(() => setOpened(true), 50);
		}
	}, [match]);

	const handleModalClose = () => {
		setOpened(false);
		const closeTimeout = setTimeout(() => navigate(-1), 200);
	};

	return (
		<Modal
			size='sm'
			padding={0}
			{...modalProps}
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
					{children}
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
