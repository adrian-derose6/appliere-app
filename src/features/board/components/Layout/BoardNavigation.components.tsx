import { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import {
	Header,
	Group,
	Button,
	SegmentedControl,
	Center,
	Box,
	Select,
} from '@mantine/core';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { FaListUl } from 'react-icons/fa';
import { IoPeopleOutline } from 'react-icons/io5';
import { FiMap } from 'react-icons/fi';
import { BsBarChartLine } from 'react-icons/bs';
import { CgToolbox } from 'react-icons/cg';
import { VscCalendar } from 'react-icons/vsc';

import { ShareButton } from '@/components/Buttons';
import { CreateMenu } from '../Elements/CreateMenu';
import { useGetBoards } from '@/features/board';
import { useStyles } from './BoardNavigation.styles';
import { BoardIcon } from '@/assets/svg/BoardIcon';

export type LinkType = {
	label: string;
	path: string;
	icon?: React.ReactNode;
	state?: {};
};

const controlLinks = [
	{
		label: (
			<Center>
				<MdOutlineDashboardCustomize />
				<Box ml={10}>Board</Box>
			</Center>
		),
		value: 'board',
		icon: <MdOutlineDashboardCustomize />,
	},
	{
		label: (
			<Center>
				<FaListUl />
				<Box ml={10}>Activities</Box>
			</Center>
		),
		value: 'activities',
		icon: <FaListUl />,
	},
	{
		label: (
			<Center>
				<IoPeopleOutline />
				<Box ml={10}>Contacts</Box>
			</Center>
		),
		value: 'contacts',
		icon: <IoPeopleOutline />,
	},
	{
		label: (
			<Center>
				<FiMap />
				<Box ml={10}>Map</Box>
			</Center>
		),
		value: 'map',
		icon: <FiMap />,
	},
	{
		label: (
			<Center>
				<BsBarChartLine />
				<Box ml={10}>Dashboard</Box>
			</Center>
		),
		value: 'metrics',
		icon: <BsBarChartLine />,
	},
];

const modalLinks: LinkType[] = [
	{
		label: 'Jobs',
		path: '/add-job',
		icon: <CgToolbox />,
	},
	{
		label: 'Activity',
		path: '/add-activity',
		icon: <VscCalendar />,
	},
	{
		label: 'Contact',
		path: '/add-contact',
		icon: <IoPeopleOutline />,
	},
];

export const BoardNavigation = () => {
	const { data, isLoading, isSuccess, isError } = useGetBoards();
	const [activeValue, setActiveValue] = useState<string>('board');
	const navigate = useNavigate();
	const params = useParams();
	const { pathname } = useLocation();
	const { classes } = useStyles();

	const board = data?.boards.find((board) => board.id === params.boardId);
	const iconColor = board?.icon.color;

	let boardSelectData;

	if (isLoading || isError) {
		boardSelectData = [];
	}

	if (isSuccess) {
		boardSelectData = data?.boards.map((board) => {
			return {
				label: board.name,
				value: board.id,
			};
		});
	}

	useEffect(() => {
		const lastUrlSegment = pathname.split('/').pop();
		setActiveValue(() => lastUrlSegment || 'board');
	}, [activeValue, pathname]);

	const handleControlChange = (value: string) => {
		setActiveValue(value);
		navigate(value);
	};

	const handleBoardSelectChange = (value: string) => {
		navigate(`/track/boards/${value}/board`);
	};

	return (
		<Header
			height={70}
			fixed
			position={{ top: 0, right: 0 }}
			zIndex={100}
			classNames={{ root: classes.headerRoot }}
		>
			<Group
				direction='row'
				align='center'
				position='apart'
				spacing='xs'
				noWrap
				className={classes.headerLayout}
			>
				<Group noWrap>
					<Group noWrap position='left'>
						<BoardIcon color={iconColor} />
						<Select
							data={boardSelectData as []}
							variant='unstyled'
							defaultValue={params.boardId as string}
							onChange={handleBoardSelectChange}
						/>
					</Group>
					<SegmentedControl
						data={controlLinks}
						value={activeValue}
						onChange={handleControlChange}
						classNames={{
							labelActive: classes.controlLabelActive,
							label: classes.label,
						}}
					/>
				</Group>
				<Group spacing={10} className={classes.buttonsWrapper} noWrap>
					<ShareButton size='xs' variant='default'>
						Share
					</ShareButton>
					<CreateMenu links={modalLinks} />
				</Group>
			</Group>
		</Header>
	);
};
