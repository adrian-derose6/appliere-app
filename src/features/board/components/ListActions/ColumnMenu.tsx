import { Menu, Tooltip, UnstyledButton } from '@mantine/core';

import { DotsIcon } from '../Elements/DotsIcon';

type Props = {};
export const ColumnMenu = (props: Props) => {
	return (
		<Menu
			control={
				<UnstyledButton>
					<DotsIcon />
				</UnstyledButton>
			}
		>
			<Menu.Item>Rename List</Menu.Item>
			<Menu.Item>Delete List</Menu.Item>
		</Menu>
	);
};
