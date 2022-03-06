import { Card, Container, Grid, Title } from '@mantine/core';

import { CardGridButton } from '../../Elements/CardGridButton/CardGridButton';

import { useStyles } from './BoardsOverview.styles';

const BOARDS_LIST = [
	{
		name: 'ReactJS Jobs',
		due: 1,
	},
	{
		name: 'NodeJS Jobs',
		due: 1,
	},
	{
		name: 'Jr Dev Jobs',
		due: 1,
	},
	{
		name: 'Senior Dev Jobs',
		due: 1,
	},
	{
		name: 'Remote Jobs Jobs',
		due: 1,
	},
	{
		name: '$100k+ Jobs',
		due: 1,
	},
];

export const BoardsOverview = () => {
	const { classes } = useStyles();

	return (
		<Card
			padding={24}
			shadow='none'
			withBorder={true}
			radius='md'
			className={classes.summaryCard}
		>
			<Container fluid padding={0} className={classes.cardHeader}>
				<Title order={3}>Boards</Title>
			</Container>
			<Container fluid padding={0} className={classes.gridContainer}>
				<Grid gutter={0}>
					<Grid.Col span={6} className={classes.gridColumn}>
						<CardGridButton />
					</Grid.Col>
				</Grid>
			</Container>
		</Card>
	);
};
