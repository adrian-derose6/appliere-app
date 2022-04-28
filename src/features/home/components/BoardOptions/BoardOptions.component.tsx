import { SyntheticEvent, useCallback } from 'react';
import { Menu, UnstyledButton } from '@mantine/core';

import { useStyles } from './BoardOptions.styles';
import { DotsIcon } from '@/features/board/components/Elements/DotsIcon';
import { BoardActions } from '@/features/home/types';

type BoardOptionsProps = {
	visible: boolean;
	onSelect: (value: string) => void;
};

export const BoardOptions = ({ visible, onSelect }: BoardOptionsProps) => {
	const { classes } = useStyles({ visible });

	const handleClick = (e: SyntheticEvent) => {
		e.stopPropagation();
	};

	const handleItemSelect = useCallback(
		(e: SyntheticEvent) => {
			const action = e.currentTarget.getAttribute('data-action') as string;
			onSelect?.(action);
		},
		[onSelect]
	);

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
			<Menu.Item data-action={BoardActions.SHARE} onClick={handleItemSelect}>
				Share...
			</Menu.Item>
			<Menu.Item data-action={BoardActions.RENAME} onClick={handleItemSelect}>
				Rename
			</Menu.Item>
			<Menu.Item data-action={BoardActions.ARCHIVE} onClick={handleItemSelect}>
				Archive
			</Menu.Item>
			<Menu.Item data-action={BoardActions.DELETE} onClick={handleItemSelect}>
				Delete
			</Menu.Item>
		</Menu>
	);
};
