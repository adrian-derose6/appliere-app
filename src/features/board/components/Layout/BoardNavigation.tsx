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

const BoardNavigation = () => {
	return (
		<nav>
			<ul>
				{boardLinks.map((link, index) => (
					<li key={index}>
						<NavLink to={link.path}>{link.label}</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default BoardNavigation;
