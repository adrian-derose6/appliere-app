import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';

import { useStyles } from './NavbarLinks.styles';

interface NavbarLinkProps {
	label: string;
	path: string;
	iconComponent?: React.ReactNode;
}

const NavbarLink = (props: NavbarLinkProps) => {
	const { classes } = useStyles();

	return (
		<>
			<NavLink to={props.path}>
				<div className={classes.linkWrapper}>
					<IconContext.Provider
						value={{ size: '17px', className: classes.navIcon }}
					>
						{props.iconComponent}
					</IconContext.Provider>
					<span className={classes.linkLabel}>{props.label}</span>
				</div>
			</NavLink>
		</>
	);
};

export default NavbarLink;
