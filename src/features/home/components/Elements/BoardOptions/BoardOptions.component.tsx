import { SyntheticEvent } from 'react';
import { Menu } from '@mantine/core';

import { useStyles } from './BoardOptions.styles';

type BoardMenuProps = {
	visible: boolean;
};
export const BoardOptions = ({ visible }: BoardMenuProps) => {
	const { classes } = useStyles({ visible });

	const handleClick = (e: SyntheticEvent) => {
		e.stopPropagation();
	};

	return (
		<Menu
			onClick={handleClick}
			style={{ right: 10 }}
			classNames={{ root: classes.menuRoot }}
		>
			<Menu.Item>Share...</Menu.Item>
			<Menu.Item>Add to favorites</Menu.Item>
			<Menu.Item>Edit board details</Menu.Item>
			<Menu.Item>Copy board link</Menu.Item>
		</Menu>
	);
};
