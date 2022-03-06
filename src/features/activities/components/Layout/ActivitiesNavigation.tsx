import { NavLink } from 'react-router-dom';

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
	return (
		<nav>
			<ul>
				{dueLinks.map((link, index) => (
					<li key={index}>
						<NavLink to={link.path}>{link.label}</NavLink>
					</li>
				))}
			</ul>
			<ul>
				{appStatusLinks.map((link, index) => (
					<li key={index}>
						<NavLink to={link.path}>{link.label}</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
