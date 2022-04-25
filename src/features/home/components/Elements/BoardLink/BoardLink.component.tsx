import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Group, UnstyledButton, Text, Menu } from '@mantine/core';
import { useHover } from '@mantine/hooks';

import { BoardIcon, getRandomColor } from '@/assets/svg/BoardIcon';
import { BOARD_ICON_COLORS } from '@/assets/svg/board-icon-colors';
import { CreateBoardIcon } from '@/assets/svg/CreateBoardIcon';
import { BoardOptions } from '../BoardOptions/BoardOptions.component';

import { useStyles } from './BoardLink.styles';

interface BoardLinkProps {
	id: string;
	name: string;
	due?: number | string;
	newBoard?: boolean;
}

export const BoardLink = ({ id, name, due, newBoard }: BoardLinkProps) => {
	const [iconColor, setIconColor] = useState({ name: '', hex: '' });
	const navigate = useNavigate();
	const { hovered, ref } = useHover();
	const { classes } = useStyles({ hovered, newBoard });

	const linkTo = `/track/boards/${id}/board`;

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

	const handleClick = () => {
		if (newBoard) {
			return;
		}
		navigate(linkTo);
	};

	return (
		<UnstyledButton onClick={handleClick} className={classes.gridButton}>
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
				{!newBoard && <BoardOptions visible={hovered} />}
			</div>
		</UnstyledButton>
	);
};
