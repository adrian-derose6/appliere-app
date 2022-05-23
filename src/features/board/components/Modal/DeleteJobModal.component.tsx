import { Modal, Text } from '@mantine/core';

import { useStyles } from './DeleteJobModal.styles';

interface DeleteJobProps {
	opened: boolean;
	onClose: () => void;
}

export const DeleteJobModal = ({ opened, onClose }: DeleteJobProps) => {
	const { classes } = useStyles();

	return (
		<Modal
			opened={opened}
			onClose={onClose}
			title='Delete Job'
			size='sm'
			centered
			withCloseButton={false}
			padding={0}
			classNames={{
				modal: classes.modal,
				header: classes.modalHeader,
				title: classes.modalTitle,
			}}
		>
			<Text>Are you sure you want to delete this job?</Text>
		</Modal>
	);
};
