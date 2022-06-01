import { Link, useLocation } from 'react-router-dom';
import { Menu, UnstyledButton, createStyles } from '@mantine/core';
import { BsPlusLg } from 'react-icons/bs';

import { BrandButton } from '@/components/Buttons';
import { LinkType } from '../Layout/BoardNavigation.components';

type CreateMenuProps = { links: LinkType[] };

export function CreateMenu({ links }: CreateMenuProps) {
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
				<Menu.Item<typeof Link>
					component={Link}
					to={item.path}
					state={{ backgroundLocation: location }}
					key={index}
					icon={item.icon}
				>
					{item.label}
				</Menu.Item>
			))}
		</Menu>
	);
}

const useStyles = createStyles((theme) => {
	return {
		body: {
			backgroundColor: theme.other.brandPrimaryColor,
		},
		itemHovered: {
			backgroundColor: '#db7079 !important',
		},
		itemIcon: {
			color: 'white',
		},
		itemLabel: {
			color: 'white',
		},
	};
});
