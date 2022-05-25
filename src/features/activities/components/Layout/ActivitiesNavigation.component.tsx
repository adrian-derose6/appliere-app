import { useState, useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Navbar, Stack, Tabs, Divider } from '@mantine/core';

import { useStyles } from '../ActivitiesNavigation.styles';

type TabLink = {
	label: string;
	path: string;
	index: number;
};

const dueLinks: TabLink[] = [
	{
		label: 'All',
		path: 'all',
		index: 0,
	},
	{
		label: 'Due Today',
		path: 'due-today',
		index: 1,
	},
	{
		label: 'Past Due',
		path: 'past-due',
		index: 2,
	},
	{
		label: 'Pending',
		path: 'pending',
		index: 3,
	},
	{
		label: 'Completed',
		path: 'completed',
		index: 4,
	},
];

const appStatusLinks: TabLink[] = [
	{
		label: 'Application',
		path: 'applications',
		index: 6,
	},
	{
		label: 'Interviews',
		path: 'interviews',
		index: 7,
	},
	{
		label: 'Offers',
		path: 'offers',
		index: 8,
	},
	{
		label: 'Networking',
		path: 'networking',
		index: 9,
	},
];

const allLinks = [...dueLinks, ...appStatusLinks];

export const ActivitiesNavigation = () => {
	const [activeTab, setActiveTab] = useState<TabLink>(dueLinks[0]);
	const navigate = useNavigate();
	const { classes } = useStyles();

	useEffect(() => {
		navigate(`${activeTab.path}`);
	}, []);

	const handleTabChange = (tabIndex: number, tabKey?: string) => {
		console.log(tabIndex, tabKey);
		const nextTab = allLinks.find(
			(link, index) => link.index === tabIndex
		) as TabLink;
		setActiveTab(nextTab);
		navigate(`${nextTab.path}`);
	};

	return (
		<Tabs
			variant='default'
			orientation='vertical'
			onTabChange={handleTabChange}
			active={activeTab.index}
			classNames={{
				root: classes.tabsRoot,
				body: classes.tabsBody,
				tabsListWrapper: classes.tabsListWrapper,
				tabsList: classes.tabsList,
				tabControl: classes.tabControl,
				tabInner: classes.tabInner,
			}}
		>
			{dueLinks.map((link, index) => {
				return (
					<Tabs.Tab key={index} tabKey={link.path} label={link.label}>
						<Outlet />
					</Tabs.Tab>
				);
			})}
			<Tabs.Tab
				disabled
				label={<Divider />}
				className={classes.dividerTab}
			></Tabs.Tab>
			{appStatusLinks.map((link, index) => {
				return (
					<Tabs.Tab key={index} tabKey={link.path} label={link.label}>
						<Outlet />
					</Tabs.Tab>
				);
			})}
		</Tabs>
	);
};
