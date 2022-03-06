import { ReactNode } from 'react';
import { Card, Container, Grid, Title, ScrollArea } from '@mantine/core';
import { v4 as uuidv4 } from 'uuid';

import { CardGridButton } from '../../Elements/CardGridButton/CardGridButton';

import { useStyles } from './BoardsOverview.styles';

const BOARDS_LIST = [
	{
		id: 1,
		name: 'ReactJS Jobs',
		due: 5,
	},
	{
		id: 2,
		name: 'NodeJS Jobs',
		due: 10,
	},
	{
		id: 3,
		name: 'Jr Dev Jobs',
		due: 7,
	},
	{
		id: 4,
		name: 'Senior Dev Jobs',
		due: 4,
	},
	{
		id: 5,
		name: 'Remote Jobs Jobs',
		due: 2,
	},
];

export const BoardsOverview = () => {
	const { classes } = useStyles();

	const boardsList: ReactNode[] = BOARDS_LIST.map((board) => {
		return (
			<Grid.Col key={board.id} span={6} className={classes.gridColumn}>
				<CardGridButton id={board.id} name={board.name} due={board.due} />
			</Grid.Col>
		);
	});

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
						<CardGridButton name='Create Project' />
					</Grid.Col>
					{boardsList}
				</Grid>
			</Container>
		</Card>
	);
};
