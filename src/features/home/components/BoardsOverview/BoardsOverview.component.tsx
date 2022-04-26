import { Card, Container, Grid, Title, ScrollArea } from '@mantine/core';

import { BoardLink } from '../Elements/BoardLink/BoardLink.component';
import { useStyles } from './BoardsOverview.styles';
import { useGetBoards, createBoard } from '@/features/board';
import { useCreateBoard } from '../../../board/api/createBoard';

export const BoardsOverview = () => {
	const { isLoading, data, isSuccess } = useGetBoards();
	const { classes } = useStyles();

	let boardsList;

	if (isSuccess) {
		boardsList = data?.boards.map((board: any) => {
			return (
				<Grid.Col key={board._id} md={12} lg={6} className={classes.gridColumn}>
					<BoardLink id={board._id} name={board.name} due={0} />
				</Grid.Col>
			);
		});
	}

	if (isLoading) {
		boardsList = <h1>Loading Boards...</h1>;
	}

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
					{boardsList}
					<Grid.Col md={12} lg={6} className={classes.gridColumn}>
						<BoardLink name='New Board' newBoard id='6' />
					</Grid.Col>
				</Grid>
			</Container>
		</Card>
	);
};
