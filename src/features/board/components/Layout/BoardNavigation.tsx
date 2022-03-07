import { Tabs } from '@mantine/core';
import { NavLink } from 'react-router-dom';

const boardLinks = [
	{
		label: 'Board',
		path: 'board',
	},
	{
		label: 'Activities',
		path: 'activities',
	},
	{
		label: 'Contacts',
		path: 'contacts',
	},
	{
		label: 'Map',
		path: 'map',
	},
	{
		label: 'Metrics',
		path: 'metrics',
	},
];

export const BoardNavigation = () => {
	return (
		<nav>
			<Tabs>
				{boardLinks.map((link, index) => (
					<Tabs.Tab key={index} label={link.label}>
						<NavLink to={link.path}>{link.label}</NavLink>
					</Tabs.Tab>
				))}
			</Tabs>
		</nav>
	);
};
