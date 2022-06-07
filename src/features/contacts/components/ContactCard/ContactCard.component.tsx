import { Card, Text, Group } from '@mantine/core';

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
	const createdByText = `${user?.firstName} ${user?.lastName}`;

	return (
		<div className={classes.container}>
			<Group position='left' align='center' p='md'>
				<div>
					<Text>{nameText}</Text>
					<Text>{companyText}</Text>
				</div>
			</Group>
		</div>
	);
};
