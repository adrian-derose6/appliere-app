import { SyntheticEvent } from 'react';
import { Modal, Text, Center, Group, Button } from '@mantine/core';

import { BrandButton } from '@/components/Buttons';
import { useStyles } from './DeleteJobModal.styles';

interface DeleteJobProps {
	opened: boolean;
	loading: boolean;
	onClose: () => void;
	onClickDelete: (e: SyntheticEvent) => void;
}

export const DeleteJobModal = ({
	opened,
	onClose,
	onClickDelete,
}: DeleteJobProps) => {
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
			overlayColor='gray'
			overlayOpacity={0.55}
			overlayBlur={2}
			classNames={{
				modal: classes.modal,
				header: classes.modalHeader,
				title: classes.modalTitle,
			}}
		>
			<Center className={classes.modalBody}>
				<Text className={classes.bodyText}>
					Are you sure you want to delete this job?
				</Text>
			</Center>
			<Group position='center' p='xs' className={classes.modalFooter}>
				<BrandButton
					type='submit'
					size='sm'
					className={classes.modalButton}
					onClick={onClickDelete}
				>
					Delete
				</BrandButton>
				<Button
					variant='default'
					size='sm'
					className={classes.modalButton}
					onClick={onClose}
				>
					Cancel
				</Button>
			</Group>
		</Modal>
	);
};
