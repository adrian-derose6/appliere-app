import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, Header, Group, Button } from '@mantine/core';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { FaListUl } from 'react-icons/fa';
import { IoPeopleOutline } from 'react-icons/io5';
import { FiMap } from 'react-icons/fi';
import { BsBarChartLine } from 'react-icons/bs';

import { BrandButton, ShareButton } from '@/components/Buttons';
import { useStyles } from './BoardNavigation.styles';

const boardLinks = [
	{
		label: 'Board',
		path: 'board',
		icon: <MdOutlineDashboardCustomize />,
	},
	{
		label: 'Activities',
		path: 'activities',
		icon: <FaListUl />,
	},
	{
		label: 'Contacts',
		path: 'contacts',
		icon: <IoPeopleOutline />,
	},
	{
		label: 'Map',
		path: 'map',
		icon: <FiMap />,
	},
	{
		label: 'Dashboard',
		path: 'metrics',
		icon: <BsBarChartLine />,
	},
];

export const BoardNavigation = () => {
	const [activeTab, setActiveTab] = useState(0);
	const navigate = useNavigate();
	const { classes } = useStyles();

	const onChange = (active: number, tabKey: string) => {
		setActiveTab(active);
		navigate(tabKey);
	};

	return (
		<Header
			height={50}
			fixed
			position={{ top: 0 }}
			zIndex={100}
			classNames={{ root: classes.headerRoot }}
		>
			<Group
				direction='row'
				align='center'
				position='apart'
				spacing='xs'
				className={classes.headerLayout}
			>
				<Group>
					<Button variant='subtle'>Board Name</Button>
					<Tabs
						variant='pills'
						tabPadding={0}
						active={activeTab}
						onTabChange={onChange}
						style={{ zIndex: 100 }}
						classNames={{
							root: classes.tabsRoot,
							tabControl: classes.tabControl,
							tabActive: classes.tabActive,
							tabsListWrapper: classes.tabsListWrapper,
						}}
					>
						{boardLinks.map((link, index) => (
							<Tabs.Tab
								key={index}
								label={link.label}
								tabKey={link.path}
								icon={link.icon}
							></Tabs.Tab>
						))}
					</Tabs>
				</Group>
				<Group spacing={10} className={classes.buttonsWrapper}>
					<ShareButton size='xs' variant='default'>
						Share
					</ShareButton>
					<BrandButton size='xs'>+ Create</BrandButton>
				</Group>
			</Group>
		</Header>
	);
};
