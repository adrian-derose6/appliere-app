import { SyntheticEvent } from 'react';
import { Menu, UnstyledButton } from '@mantine/core';

import { useStyles } from './BoardOptions.styles';
import { DotsIcon } from '@/features/board/components/4-Elements/DotsIcon';

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
			control={
				<UnstyledButton>
					<DotsIcon />
				</UnstyledButton>
			}
		>
			<Menu.Item>Share...</Menu.Item>
			<Menu.Item>Add to favorites</Menu.Item>
			<Menu.Item>Edit board details</Menu.Item>
			<Menu.Item>Copy board link</Menu.Item>
		</Menu>
	);
};
