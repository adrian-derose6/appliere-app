import { Container, Group, Text } from '@mantine/core';
import { createStyles } from '@mantine/core';
import { BsPlusLg } from 'react-icons/bs';

import { ActivitiesList } from '../components/ActivitiesList';
import { BrandButton } from '@/components/Buttons';

const LIST = [
	{
		id: '1',
		title: 'Activity 1',
		note: 'This is the note',
		completed: false,
		job: {
			employer: 'Facebook',
			title: 'Software Engineer',
		},
		employer: 'Facebook',
	},
	{
		id: '2',
		title: 'Activity 2',
		note: 'This is the note',
		completed: false,
		job: {
			employer: 'Amazon',
			title: 'Software Developer',
		},
		employer: 'Amazon',
	},
];

export function ActivitiesPage({ name }: { name: string }) {
	const { classes } = useStyles();

	return (
		<Container fluid className={classes.pageWrapper}>
			<Group noWrap position='apart' className={classes.header}>
				<Text className={classes.headingMain}>
					Activities{' '}
					<span className={classes.headingSub}>{`> ${name || ''}`}</span>
				</Text>
				<Group noWrap position='right'>
					<Text>15 activities</Text>
					<BrandButton size='xs' leftIcon={<BsPlusLg />}>
						Activity
					</BrandButton>
				</Group>
			</Group>
			<ActivitiesList list={LIST} />
		</Container>
	);
}

const useStyles = createStyles((theme) => ({
	pageWrapper: {
		margin: 0,
		width: 'calc(100% - 110px)',
		height: 'calc(100% - 70px)',
		boxSizing: 'border-box',
		padding: '25px',
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
