import { ScrollArea } from '@mantine/core';

import { ContactCard } from '../ContactCard';
import { Contact } from '@/features/contacts/types';
import { useStyles } from './ContactsGrid.styles';

interface ContactsGridProps {
	contacts: Contact[];
	isFlexible?: boolean;
	inModal?: boolean;
}

export const ContactsGrid = ({
	contacts,
	isFlexible,
	inModal,
}: ContactsGridProps) => {
	const { classes } = useStyles({ isFlexible });
	return (
		<ScrollArea>
			<div className={classes.gridContainer}>
				{contacts.map((contact, index) => {
					return (
						<ContactCard contact={contact} key={index} inModal={inModal} />
					);
				})}
			</div>
		</ScrollArea>
	);
};
