import { useState, SyntheticEvent } from 'react';
import {
	useNavigate,
	useLocation,
	useParams,
	useSearchParams,
} from 'react-router-dom';
import { Text, Group, Avatar, ActionIcon } from '@mantine/core';
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhone } from 'react-icons/fi';
import { BsTrash } from 'react-icons/bs';

import { DeleteModal } from '@/components/Modal';
import { Contact } from '@/features/contacts/types';
import { useDeleteContact } from '@/features/contacts/api';
import { useAuth } from '@/stores/auth';
import { useStyles } from './ContactCard.styles';

interface ContactCardProps {
	contact: Contact;
	inModal?: boolean;
}

export const ContactCard = ({ contact, inModal }: ContactCardProps) => {
	const [modalOpened, setModalOpened] = useState<boolean>(false);
	const { user } = useAuth();
	const { classes } = useStyles();
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const navLocation = useLocation();
	const locationState = navLocation.state as {
		backgroundLocation?: Location;
		fromModal?: boolean;
	};
	const params = useParams();
	const deleteContactMutation = useDeleteContact();
	const boardId =
		(params.boardId as string) || (searchParams.get('boardId') as string);
	const { firstName, lastName, companies, location, emails, phones } = contact;

	// Derived state
	const nameText = `${firstName} ${lastName}`;
	const companyText = companies[0] ? companies[0] : '';
	const locationText = location.length > 0 ? location : 'none';
	const emailText = emails[0] ? emails[0].value : 'none';
	const phoneText = phones[0] ? phones[0].value : 'none';
	const createdByText = `created by ${user?.firstName} ${user?.lastName}`;

	const handleDeleteIconClick = (e: SyntheticEvent) => {
		e.stopPropagation();
		e.preventDefault();
		setModalOpened(true);
	};

	const handleCardClick = (e: SyntheticEvent) => {
		e.stopPropagation();
		e.preventDefault();
		navigate(`/edit-contact/${contact.id}?boardId=${boardId}`, {
			state: {
				fromModal: inModal,
				backgroundLocation: inModal
					? locationState.backgroundLocation
					: navLocation,
			},
		});
	};

	const handleDeleteContact = () => {
		deleteContactMutation.mutate(
			{
				contactId: contact.id,
				boardId,
			},
			{
				onSuccess: () => setModalOpened(false),
			}
		);
	};

	return (
		<div className={classes.container}>
			<div className={classes.hoverWrapper} onClick={handleCardClick}>
				<ActionIcon
					variant='outline'
					size='md'
					radius='md'
					onClick={handleDeleteIconClick}
					classNames={{ root: classes.trashIconRoot }}
				>
					<BsTrash />
				</ActionIcon>
			</div>
			<Group position='left' align='center' className={classes.topSection}>
				<Avatar
					alt='contact avatar'
					size='lg'
					radius='md'
					className={classes.contactAvatar}
				/>
				<div>
					<Text className={classes.nameText}>{nameText}</Text>
					<Text className={classes.companyText}>{companyText}</Text>
				</div>
			</Group>
			<Group
				position='left'
				direction='column'
				className={classes.middleSection}
				spacing='sm'
			>
				<Group position='left' spacing='sm' className={classes.infoGroup}>
					<IoLocationOutline />
					<Text className={classes.infoText}>{locationText}</Text>
				</Group>
				<Group position='left' spacing='sm' className={classes.infoGroup}>
					<AiOutlineMail />
					<Text className={classes.infoText}>{emailText}</Text>
				</Group>
				<Group position='left' spacing='sm' className={classes.infoGroup}>
					<FiPhone />
					<Text className={classes.infoText}>{phoneText}</Text>
				</Group>
			</Group>
			<Group position='left' align='center' className={classes.bottomSection}>
				<Text className={classes.createdByText}>{createdByText}</Text>
			</Group>
			<DeleteModal
				itemType='Contact'
				opened={modalOpened}
				loading={false}
				onClose={() => setModalOpened(false)}
				onClickDelete={handleDeleteContact}
			/>
		</div>
	);
};
