import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Container, Group, Text, LoadingOverlay } from '@mantine/core';
import { createStyles } from '@mantine/core';
import { BsPlusLg } from 'react-icons/bs';

import { ActivitiesList } from '../components/ActivitiesList';
import { BrandButton } from '@/components/Buttons';
import { useGetActivities } from '../api';

export function ActivitiesPage({ name }: { name: string }) {
	const params = useParams();
	const boardId = params.boardId as string;
	const location = useLocation();
	const navigate = useNavigate();
	const { data, isLoading, isError, isSuccess } = useGetActivities({
		boardId,
	});
	const { classes } = useStyles();

	const handleOpenModal = () => {
		navigate(`/add-activity/${boardId}`, {
			state: { backgroundLocation: location },
		});
	};

	return (
		<Container fluid className={classes.pageWrapper}>
			<Group noWrap position='apart' className={classes.header}>
				<Text className={classes.headingMain}>
					Activities{' '}
					<span className={classes.headingSub}>{`> ${name || ''}`}</span>
				</Text>
				<Group noWrap position='right'>
					<Text>{data?.numOfActivities} activities</Text>
					<BrandButton
						size='xs'
						leftIcon={<BsPlusLg />}
						onClick={handleOpenModal}
					>
						Activity
					</BrandButton>
				</Group>
			</Group>

			<ActivitiesList list={data?.activities || []} isLoading={isLoading} />
		</Container>
	);
}

const useStyles = createStyles((theme) => ({
	pageWrapper: {
		margin: 0,
		width: 'calc(100% - 110px)',
		height: 'calc(100% - 70px)',
		boxSizing: 'border-box',
		padding: '0 25px',
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
}));
