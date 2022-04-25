import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Group, UnstyledButton, Text, Menu } from '@mantine/core';
import { useHover } from '@mantine/hooks';

import { BoardIcon, getRandomColor } from '@/assets/svg/BoardIcon';
import { BOARD_ICON_COLORS } from '@/assets/svg/board-icon-colors';
import { CreateBoardIcon } from '@/assets/svg/CreateBoardIcon';
import { BoardMenu } from '../BoardMenu/BoardMenu.component';

import { useStyles } from './CardGridButton.styles';

interface CardGridButtonProps {
	id: string;
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
						{!!due && (
							<Text size='xs' color='gray'>
								{`${dueString}`} activities due soon
							</Text>
						)}
					</div>
				</Group>
				{hovered && <BoardMenu />}
			</div>
		</UnstyledButton>
	);
};
