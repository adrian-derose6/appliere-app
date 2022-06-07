import { Text, Group, Avatar, ActionIcon } from '@mantine/core';
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhone } from 'react-icons/fi';
import { BsTrash } from 'react-icons/bs';

import { useAuth } from '@/stores/auth';
import { Contact } from '@/features/contacts/types';
import { useStyles } from './ContactCard.styles';

interface ContactCardProps {
	contact: Contact;
}

export const ContactCard = ({ contact }: ContactCardProps) => {
	const { user } = useAuth();
	const { classes } = useStyles();
	const { firstName, lastName, companies, location, emails, phones } = contact;

	const nameText = `${contact.firstName} ${contact.lastName}`;
	const companyText = companies[0] ? companies[0] : '';
	const locationText = location.length > 0 ? location : 'none';
	const emailText = emails[0] ? emails[0] : 'none';
	const phoneText = phones[0] ? phones[0] : 'none';
	const createdByText = `created by ${user?.firstName} ${user?.lastName}`;

	const handleCardClick = () => {};

	const handleDeleteIconClick = () => {};

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
		</div>
	);
};
