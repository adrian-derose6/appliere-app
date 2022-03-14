import { useEffect, useState } from 'react';
import { useNavigate, useLocation, useMatch } from 'react-router-dom';
import {
	Modal,
	TextInput,
	Checkbox,
	Button,
	Group,
	Container,
} from '@mantine/core';
import { useForm } from '@mantine/form';

type Props = {};

export const AddJobModal = (props: Props) => {
	const [opened, setOpened] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	const match = useMatch('/add-job/*');

	useEffect(() => {
		if (match?.pathname) {
			var openTimeout = setTimeout(() => setOpened(true), 200);
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
			padding='lg'
			title='Add Job'
			centered
			closeOnClickOutside
			opened={opened}
			onClose={handleModalClose}
		>
			<Container fluid>
				<form onSubmit={form.onSubmit((values) => console.log(values))}>
					<TextInput
						required
						label='Company'
						placeholder='Company'
						{...form.getInputProps('company')}
					/>

					<TextInput
						required
						label='Job Title'
						placeholder='Job Title'
						mt='md'
						{...form.getInputProps('title')}
					/>
					<Group></Group>
					<Group position='right' mt='md'>
						<Button variant='default'>Discard</Button>
						<Button type='submit'>Submit</Button>
					</Group>
				</form>
			</Container>
		</Modal>
	);
};
