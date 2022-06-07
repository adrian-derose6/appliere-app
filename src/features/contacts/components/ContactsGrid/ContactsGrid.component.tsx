import { Grid, Container, Group } from '@mantine/core';

import { ContactCard } from '../ContactCard';
import { Contact } from '@/features/contacts/types';
import { useStyles } from './ContactsGrid.styles';

interface ContactsGridProps {
	contacts: Contact[];
}

export const ContactsGrid = ({ contacts }: ContactsGridProps) => {
	const { classes } = useStyles();
	return (
		<div className={classes.gridContainer}>
			{contacts.map((contact, index) => {
				return <ContactCard contact={contact} key={index} />;
			})}
		</div>
	);
};
