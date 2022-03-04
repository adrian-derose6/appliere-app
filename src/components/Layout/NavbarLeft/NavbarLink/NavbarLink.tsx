import { useState } from 'react';
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';
import { FiChevronUp } from 'react-icons/fi';

import { useStyles } from './NavbarLink.styles';

interface NavbarLinkProps {
	label: string;
	to: string;
	iconComponent?: React.ReactNode;
	expand: boolean;
	onClick?: () => void;
	collapsible?: boolean;
}

const NavbarLink = (props: NavbarLinkProps) => {
	const [chevronUp, setChevronUp] = useState(true);
	const { expand } = props;
	const { classes } = useStyles({ expand });

	const rotateStyle = {
		transform: chevronUp ? 'rotate(180deg)' : '',
		transition: 'transform 150ms ease', // smooth transition
	};

	const onCollapseTrigger: React.MouseEventHandler<HTMLDivElement> = () => {
		if (props.onClick) {
			props.onClick();
			setChevronUp((prev) => !prev);
		}
		console.log('Collapse triggered');
	};

	return (
		<NavLink to={props.to}>
			<div className={classes.navLink} onClick={onCollapseTrigger}>
				<IconContext.Provider
					value={{ size: '17px', className: classes.navLinkIcon }}
				>
					{props.iconComponent}
				</IconContext.Provider>
				<div className={classes.navLinkLabel}>{props.label}</div>
				{props.collapsible && (
					<IconContext.Provider
						value={{
							size: '17px',
							style: { ...rotateStyle },
							className: classes.chevron,
						}}
					>
						<FiChevronUp />
					</IconContext.Provider>
				)}
			</div>
		</NavLink>
	);
};

export default NavbarLink;
