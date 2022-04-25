import { Menu } from '@mantine/core';

import { useStyles } from './BoardMenu.styles';

export const BoardMenu = () => {
	const { classes } = useStyles();

	return (
		<Menu style={{ right: 10 }} classNames={{ root: classes.menuRoot }}>
			<Menu.Item>Share...</Menu.Item>
			<Menu.Item>Add to favorites</Menu.Item>
			<Menu.Item>Edit board details</Menu.Item>
			<Menu.Item>Copy board link</Menu.Item>
		</Menu>
	);
};
