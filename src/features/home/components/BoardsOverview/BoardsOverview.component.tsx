import { Card, Container, Grid, Title } from '@mantine/core';

import { CardGridButton } from '../Elements/CardGridButton/CardGridButton.component';
import { useStyles } from './BoardsOverview.styles';
import { useBoards } from '@/features/board';

const BOARDS_LIST = [
	{
		id: '1',
		name: 'ReactJS Jobs',
		due: 5,
	},
	{
		id: '2',
		name: 'NodeJS Jobs',
		due: 10,
	},
	{
		id: '3',
		name: 'Jr Dev Jobs',
		due: 7,
	},
	{
		id: '4',
		name: 'Senior Dev Jobs',
		due: 4,
	},
	{
		id: '5',
		name: 'Remote Jobs Jobs',
		due: 2,
	},
];

export const BoardsOverview = () => {
	const { isLoading, data: boards, isSuccess } = useBoards();
	const { classes } = useStyles();

	const boardsList = BOARDS_LIST.map((board: any) => {
		return (
			<Grid.Col key={board._id} span={6} className={classes.gridColumn}>
				<CardGridButton id={board._id} name={board.boardName} due={0} />
			</Grid.Col>
		);
	});

	return (
		<Card
			p={24}
			shadow='none'
			withBorder={true}
			radius='md'
			className={classes.summaryCard}
		>
			<Container fluid px={0} className={classes.cardHeader}>
				<Title order={3}>Boards</Title>
			</Container>
			<Container fluid px={0} className={classes.gridContainer}>
				<Grid gutter={0}>
					<Grid.Col span={6} className={classes.gridColumn}>
						<CardGridButton name='Create Board' newBoard id='6' />
					</Grid.Col>
					{boards && boardsList}
				</Grid>
			</Container>
		</Card>
	);
};
