import { useState, Fragment } from 'react';
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';

import { useStyles } from './NavbarLink.styles';

interface NavbarLinkProps {
	label: string;
	to: string;
	iconComponent?: React.ReactNode;
	expand: boolean;
	onToggleCollapse?: () => void;
	collapsible?: boolean;
}

interface wrapperProps {
	children: React.ReactNode;
	collapsible?: boolean;
	to: string;
}

const WrapperComponent = (wrapperProps: wrapperProps) =>
	wrapperProps.collapsible ? (
		<div>{wrapperProps.children}</div>
	) : (
		<NavLink to={wrapperProps.to}>{wrapperProps.children}</NavLink>
	);

const NavbarLink = (props: NavbarLinkProps) => {
	const [chevronUp, setChevronUp] = useState(false);
	const { expand, collapsible, to } = props;
	const { classes } = useStyles({ expand });

	const rotateStyle = {
		transform: chevronUp ? 'rotate(180deg)' : '',
		transition: 'transform 150ms ease', // smooth transition
	};

	const onToggleCollapse: React.MouseEventHandler<HTMLDivElement> = () => {
		if (props.onToggleCollapse) {
			props.onToggleCollapse();
			setChevronUp((prev) => !prev);
		}
	};

	return (
		<WrapperComponent to={to} collapsible={collapsible}>
			<div className={classes.navLink} onClick={onToggleCollapse}>
				<IconContext.Provider
					value={{ size: '17px', className: classes.navLinkIcon }}
				>
					{props.iconComponent}
				</IconContext.Provider>
				<div className={classes.navLinkLabel}>
					{collapsible ? (
						<NavLink to={props.to}>
							<span className={classes.innerLink}>{props.label}</span>
						</NavLink>
					) : (
						<span>{props.label}</span>
					)}
				</div>
				{collapsible && (
					<IconContext.Provider
						value={{
							size: '17px',
							style: { ...rotateStyle },
							className: classes.chevron,
						}}
					>
						<FiChevronDown />
					</IconContext.Provider>
				)}
			</div>
		</WrapperComponent>
	);
};

export default NavbarLink;
