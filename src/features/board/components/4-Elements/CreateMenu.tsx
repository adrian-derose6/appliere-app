import { Menu, UnstyledButton, createStyles } from '@mantine/core';
import { BsPlusLg } from 'react-icons/bs';
import { CgToolbox } from 'react-icons/cg';
import { VscCalendar } from 'react-icons/vsc';
import { IoPeopleOutline } from 'react-icons/io5';

import { BrandButton } from '@/components/Buttons';

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

type CreateMenuProps = {};

export const CreateMenu = (props: CreateMenuProps) => {
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
			<Menu.Item icon={<CgToolbox />}>Job</Menu.Item>
			<Menu.Item icon={<VscCalendar />}>Activity</Menu.Item>
			<Menu.Item icon={<IoPeopleOutline />}>Contact</Menu.Item>
		</Menu>
	);
};
