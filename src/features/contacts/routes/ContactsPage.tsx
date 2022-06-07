import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Container, Group, Text, createStyles } from '@mantine/core';
import { BsPlusLg } from 'react-icons/bs';

import { BrandButton } from '@/components/Buttons';

export const ContactsPage = () => {
	const params = useParams();
	const boardId = params.boardId as string;
	const location = useLocation();
	const navigate = useNavigate();
	const { classes } = useStyles();

	const handleOpenModal = () => {
		navigate(`/add-activity/${boardId}`, {
			state: { backgroundLocation: location },
		});
	};

	return (
		<Container fluid className={classes.pageWrapper}>
			<Group noWrap position='apart' className={classes.header}>
				<Text className={classes.headingMain}>Contacts</Text>
				<Group noWrap position='right'>
					<BrandButton
						size='xs'
						leftIcon={<BsPlusLg />}
						onClick={handleOpenModal}
					>
						Contact
					</BrandButton>
				</Group>
			</Group>
		</Container>
	);
};

const useStyles = createStyles((theme) => ({
	pageWrapper: {
		margin: 0,
		width: '100%',
		height: '100%',
		boxSizing: 'border-box',
		padding: '0 25px',
		border: '1px solid red',
	},
	header: {
		height: '70px',
		borderBottom: '1px solid #e9ecef',
	},
	headingMain: {
		fontSize: '20px',
		fontWeight: 500,
		color: theme.other.brandDarkColor,
	},
	headingSub: {
		fontSize: '20px',
		fontWeight: 400,
		color: theme.colors.gray[6],
	},
	emptyContainer: {
		height: '100%',
		flexDirection: 'column',
	},
	emptyText: {
		fontSize: '20px',
		color: theme.colors.gray[6],
	},
}));
