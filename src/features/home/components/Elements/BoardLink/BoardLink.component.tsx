import {
	useState,
	useEffect,
	SyntheticEvent,
	FormEvent,
	ChangeEventHandler,
	ChangeEvent,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { Group, UnstyledButton, Text, TextInput, Input } from '@mantine/core';
import { useHover } from '@mantine/hooks';

import { BoardIcon, getRandomColor } from '@/assets/svg/BoardIcon';
import { BOARD_ICON_COLORS } from '@/assets/svg/board-icon-colors';
import { CreateBoardIcon } from '@/assets/svg/CreateBoardIcon';
import { BoardOptions } from '../BoardOptions/BoardOptions.component';
import { BrandButton } from '@/components/Buttons';
import { DotsIcon } from '@/components';

import { useStyles } from './BoardLink.styles';

interface BoardLinkProps {
	id: string;
	name: string;
	due?: number | string;
	newBoard?: boolean;
}

export const BoardLink = ({ id, name, due, newBoard }: BoardLinkProps) => {
	const [iconColor, setIconColor] = useState({ name: '', hex: '' });
	const [inputDisplayed, setInputDisplayed] = useState<boolean>(false);
	const [inputText, setInputText] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const navigate = useNavigate();
	const { hovered, ref } = useHover();
	const { classes } = useStyles({ hovered, newBoard, inputDisplayed });

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
			setInputDisplayed(true);
		} else {
			navigate(linkTo);
		}
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value);
	};

	const handleCreateBoard = () => {
		setIsLoading(true);
		setTimeout(() => setIsLoading(false), 2000);
	};

	return (
		<UnstyledButton onClick={handleClick} className={classes.gridButton}>
			<div className={classes.hoverWrapper} ref={ref}>
				<Group direction='row' noWrap>
					{icon}
					<div>
						{newBoard && inputDisplayed ? (
							<Group direction='row' position='apart' noWrap>
								<Input
									placeholder='Board Name'
									variant='unstyled'
									value={inputText}
									onChange={handleInputChange}
									autoFocus
									disabled={isLoading}
								/>
								<BrandButton
									size='xs'
									disabled={inputText.length === 0 || isLoading}
									className={classes.createButton}
									onClick={handleCreateBoard}
								>
									Create
								</BrandButton>
							</Group>
						) : (
							<Text className={classes.buttonLabel}>{name}</Text>
						)}
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
