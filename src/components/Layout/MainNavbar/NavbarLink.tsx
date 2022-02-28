import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';

import { useStyles } from './NavbarLinks.styles';

interface NavbarLinkProps {
	label?: string;
	path: string;
	collapsible?: boolean;
	iconComponent?: React.ReactNode;
}

const NavbarLink = ({
	path,
	iconComponent,
	label,
	collapsible = false,
}: NavbarLinkProps) => {
	const { classes } = useStyles();

	return (
		<>
			<NavLink to={path}>
				<div className={classes.link}>
					<IconContext.Provider
						value={{ size: '17px', className: classes.navIcon }}
					>
						{iconComponent}
					</IconContext.Provider>
					<span>{label}</span>
				</div>
			</NavLink>
		</>
	);
};

export default NavbarLink;
