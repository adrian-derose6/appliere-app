import { Link, useLocation } from 'react-router-dom';
import { Menu, UnstyledButton, createStyles } from '@mantine/core';
import { BsPlusLg } from 'react-icons/bs';

import { BrandButton } from '@/components/Buttons';
import { LinkType } from '../1-Layout/BoardNavigation';

const useStyles = createStyles((theme) => {
	return {
		body: {
			backgroundColor: theme.other.brandPrimaryColor,
		},
		itemHovered: {
			backgroundColor: '#db7079',
		},
		itemIcon: {
			color: 'white',
		},
		itemLabel: {
			color: 'white',
		},
	};
});

type CreateMenuProps = { links: LinkType[] };

export const CreateMenu = ({ links }: CreateMenuProps) => {
	const location = useLocation();
	const { classes } = useStyles();

	return (
		<Menu
			size={110}
			trigger='hover'
			control={
				<UnstyledButton>
					<BrandButton size='xs' leftIcon={<BsPlusLg />}>
						Create
					</BrandButton>
				</UnstyledButton>
			}
			classNames={{
				body: classes.body,
				itemIcon: classes.itemIcon,
				itemLabel: classes.itemLabel,
				itemHovered: classes.itemHovered,
			}}
		>
			{links.map((item, index) => (
				<Menu.Item key={index} icon={item.icon}>
					<Link to={item.path} state={{ backgroundLocation: location }}>
						{item.label}
					</Link>
				</Menu.Item>
			))}
		</Menu>
	);
};
