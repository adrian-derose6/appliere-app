import {
	Container,
	Group,
	Title,
	Text,
	Paper,
	Button,
	Divider,
	Menu,
	useMantineTheme,
	Center,
} from '@mantine/core';
import { FiChevronDown } from 'react-icons/fi';
import { HiCheck } from 'react-icons/hi';
import { IconContext } from 'react-icons';

import { useStyles } from './GreetingHeader.styles';

const CheckmarkIcon = () => {
	const { classes } = useStyles();

	return (
		<IconContext.Provider
			value={{ className: classes.icon, color: '#868e96', size: '20' }}
		>
			<HiCheck />
		</IconContext.Provider>
	);
};

export const GreetingHeader = () => {
	const { classes } = useStyles();
	const { colors } = useMantineTheme();

	return (
		<Group
			direction='column'
			align='center'
			spacing={15}
			className={classes.wrapper}
		>
			<Text className={classes.dateText}>Wednesday, March 2</Text>
			<Title order={1} className={classes.greetingText}>
				Good morning, Adrian
			</Title>
			<Paper
				className={classes.achievementsWidgetPaper}
				radius={60}
				padding='xs'
			>
				<Group direction='row' align='center' position='apart' spacing={0}>
					<Menu
						control={
							<Button
								variant='subtle'
								color='gray'
								size='xs'
								rightIcon={<FiChevronDown size={16} color='#6d6e6f' />}
							>
								My week
							</Button>
						}
						classNames={{ root: classes.menuRoot }}
					>
						<Menu.Item>My week</Menu.Item>
						<Menu.Item>My month</Menu.Item>
					</Menu>
					<Divider orientation='vertical' color='gray' />
					<Center className={classes.statisticWrapper}>
						<CheckmarkIcon />
						<span className={classes.number}>0</span>
						<span className={classes.activity}>activities completed</span>
					</Center>
					<Center className={classes.statisticWrapper}>
						<CheckmarkIcon />
						<span className={classes.number}>0</span>
						<span className={classes.activity}>contacts added</span>
					</Center>
				</Group>
			</Paper>
		</Group>
	);
};
