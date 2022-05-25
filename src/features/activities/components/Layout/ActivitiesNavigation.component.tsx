import { NavLink, Outlet } from 'react-router-dom';
import { Navbar, Stack, Tabs, Divider } from '@mantine/core';

import { useStyles } from '../ActivitiesNavigation.styles';

const dueLinks = [
	{
		label: 'All',
		path: 'all',
	},
	{
		label: 'Due Today',
		path: 'due-today',
	},
	{
		label: 'Past Due',
		path: 'past-due',
	},
	{
		label: 'Pending',
		path: 'pending',
	},
	{
		label: 'Completed',
		path: 'completed',
	},
];

const appStatusLinks = [
	{
		label: 'Application',
		path: 'applications',
	},
	{
		label: 'Interviews',
		path: 'interviews',
	},
	{
		label: 'Offers',
		path: 'offers',
	},
	{
		label: 'Networking',
		path: 'networking',
	},
];

export const ActivitiesNavigation = () => {
	const { classes } = useStyles();

	return (
		<Tabs
			variant='default'
			orientation='vertical'
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
					<Tabs.Tab key={index} label={link.label}>
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
				return <Tabs.Tab key={index} label={link.label}></Tabs.Tab>;
			})}
		</Tabs>
	);
};
