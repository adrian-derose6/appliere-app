import {
	useNavigate,
	useParams,
	useSearchParams,
	useLocation,
} from 'react-router-dom';
import { Container, LoadingOverlay, Group, Center, Text } from '@mantine/core';
import { BsPlusLg } from 'react-icons/bs';

import {
	ActivitiesList,
	useGetActivities,
	useFilteredActivities,
} from '@/features/activities';
import { BrandButton } from '@/components/Buttons';
import { useStyles } from './JobActivities.styles';

export const JobActivities = () => {
	// react-router hooks
	const [searchParams] = useSearchParams();
	const location = useLocation();
	const params = useParams();
	const navigate = useNavigate();
	const locationState = location.state as { backgroundLocation: Location };
	const backgroundLocation = locationState.backgroundLocation;
	const jobId = params.jobId as string;
	const boardId = searchParams.get('boardId') as string;

	// react-query hook
	const { data, isLoading, isError, isSuccess } = useGetActivities({
		boardId,
	});

	// Styles
	const { classes } = useStyles();

	// Derived state
	const { completed, pending } = useFilteredActivities({
		type: 'all',
		list: data?.activities || [],
		jobId,
	});
	const numOfActivities = completed.length + pending.length;
	const activityString = numOfActivities === 1 ? 'activity' : 'activities';

	const handleOpenModal = () => {
		navigate(`/add-activity/${boardId}`, {
			state: { backgroundLocation: location },
		});
	};

	const handleNavigateModal = () => {};

	return (
		<Container fluid className={classes.pageWrapper}>
			<Group noWrap position='right' className={classes.header}>
				<Group noWrap position='right'>
					<BrandButton
						size='xs'
						leftIcon={<BsPlusLg />}
						onClick={handleNavigateModal}
					>
						Activity
					</BrandButton>
				</Group>
			</Group>
			<LoadingOverlay
				visible={false}
				overlayOpacity={0.3}
				overlayColor='#c5c5c5'
			/>
			{numOfActivities > 0 || isLoading ? (
				<ActivitiesList
					completed={completed}
					pending={pending}
					isLoading={isLoading}
				/>
			) : (
				<Center className={classes.emptyContainer}>
					<Text className={classes.emptyText}>No activities logged...</Text>
					<BrandButton
						size='xs'
						mt='md'
						leftIcon={<BsPlusLg />}
						onClick={handleOpenModal}
					>
						Activity
					</BrandButton>
				</Center>
			)}
		</Container>
	);
};
