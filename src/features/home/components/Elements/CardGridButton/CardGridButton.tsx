import { useState, useEffect } from 'react';
import { Group, UnstyledButton, Text, Menu } from '@mantine/core';
import { useHover } from '@mantine/hooks';

import { BoardIcon, getRandomColor } from '@/assets/svg/BoardIcon';
import { BOARD_ICON_COLORS } from '@/assets/svg/board-icon-colors';
import { CreateBoardIcon } from '@/assets/svg/CreateBoardIcon';

import { useStyles } from './CardGridButton.styles';

interface CardGridButtonProps {
	id?: number;
	name: string;
	due?: number | string;
	newBoard?: boolean;
}

export const CardGridButton = ({
	id,
	name,
	due,
	newBoard,
}: CardGridButtonProps) => {
	const [iconColor, setIconColor] = useState({ name: '', hex: '' });
	const { hovered, ref } = useHover();
	const { classes } = useStyles({ hovered, newBoard });

	useEffect(() => {
		if (!newBoard) {
			const randomColor = getRandomColor(BOARD_ICON_COLORS);
			setIconColor(randomColor);
		}
	}, [newBoard]);

	const icon = newBoard ? (
		<CreateBoardIcon hovered={hovered} />
	) : (
		<BoardIcon color={iconColor} />
	);
	const dueString = due && typeof due === 'number' ? due.toString() : due;

	return (
		<UnstyledButton className={classes.gridButton}>
			<div className={classes.hoverWrapper} ref={ref}>
				<Group>
					{icon}
					<div>
						<Text className={classes.buttonLabel}>{name}</Text>
						{due ? (
							<Text size='xs' color='gray'>
								{`${dueString}`} activities due soon
							</Text>
						) : null}
					</div>
				</Group>
				<Menu style={{ right: 10 }} classNames={{ root: classes.menuRoot }}>
					<Menu.Item>Share...</Menu.Item>
					<Menu.Item>Add to favorites</Menu.Item>
					<Menu.Item>Edit board details</Menu.Item>
					<Menu.Item>Copy board link</Menu.Item>
				</Menu>
			</div>
		</UnstyledButton>
	);
};
