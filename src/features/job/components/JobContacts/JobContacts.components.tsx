import { SyntheticEvent } from 'react';
import {
	useSearchParams,
	useNavigate,
	useParams,
	useLocation,
} from 'react-router-dom';
import {
	Container,
	Group,
	ScrollArea,
	Button,
	LoadingOverlay,
	Menu,
	Center,
	Text,
} from '@mantine/core';
import { BsPlusLg } from 'react-icons/bs';

import { BrandButton } from '@/components/Buttons';
import { ContactsGrid } from '@/features/contacts';
import { useGetContacts, useUpdateContact } from '@/features/contacts';
import { useStyles } from './JobContacts.styles';
import { Contact } from '@/features/contacts/types';

export const JobContacts = () => {
	// react-router hooks
	const [searchParams] = useSearchParams();
	const location = useLocation();
	const params = useParams();
	const navigate = useNavigate();
	const locationState = location.state as { backgroundLocation: Location };
	const backgroundLocation = locationState.backgroundLocation;
	const jobId = params.jobId as string;
	const boardId = searchParams.get('boardId') as string;

	// react-query hooks
	const { data: contacts, isLoading } = useGetContacts({ boardId });
	const updateContactMutation = useUpdateContact();

	// Styles
	const { classes } = useStyles();

	// Derived State
	const jobContacts =
		contacts?.filter((contact) => contact.jobs.includes(jobId)) || [];
	const contactSelection =
		contacts
			?.filter((contact) => !jobContacts.includes(contact))
			.map((contact) => ({
				value: contact.id,
				label: `${contact.firstName} ${contact.lastName}`,
			})) || [];

	// Handlers
	const handleNavigateModal = (e: SyntheticEvent) => {
		e.stopPropagation();
		navigate(`/add-contact?boardId=${boardId}&jobId=${jobId}`, {
			state: { backgroundLocation, fromModal: true },
		});
	};

	const handleLinkContact = (contactId: string) => {
		const contactJobs =
			jobContacts.find((contact: Contact) => contact.id === contactId)?.jobs ||
			([] as string[]);

		updateContactMutation.mutate({
			contactId,
			boardId,
			data: {
				jobs: [...contactJobs, jobId],
			},
		});
	};

	return (
		<Container fluid className={classes.pageWrapper}>
			<ScrollArea>
				<Group noWrap position='right' className={classes.header}>
					<Group noWrap position='right'>
						<BrandButton
							size='xs'
							leftIcon={<BsPlusLg />}
							onClick={handleNavigateModal}
						>
							Contact
						</BrandButton>
						<Menu
							position='bottom'
							control={
								<Button size='xs' variant='outline' leftIcon={<BsPlusLg />}>
									Link Contact
								</Button>
							}
						>
							{contactSelection.length > 0 ? (
								contactSelection.map((item, index) => (
									<Menu.Item
										onClick={() => handleLinkContact(item.value)}
										key={index}
									>
										{item.label}
									</Menu.Item>
								))
							) : (
								<Text className={classes.emptyContactsMenu}>No Contacts</Text>
							)}
						</Menu>
					</Group>
				</Group>
				<LoadingOverlay
					visible={!!isLoading}
					overlayOpacity={0.3}
					overlayColor='#c5c5c5'
				/>
				{jobContacts.length > 0 || isLoading ? (
					<ContactsGrid
						isFlexible={true}
						contacts={jobContacts}
						inModal={true}
					/>
				) : (
					<Center className={classes.emptyContainer}>
						<Text className={classes.emptyText}>No contacts logged...</Text>
						<BrandButton
							size='xs'
							mt='md'
							leftIcon={<BsPlusLg />}
							onClick={handleNavigateModal}
						>
							Contact
						</BrandButton>
					</Center>
				)}
			</ScrollArea>
		</Container>
	);
};
