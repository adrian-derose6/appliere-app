import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Group, UnstyledButton, Text, ActionIcon, Input } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { FaPlus } from 'react-icons/fa';

import { BoardIcon, getRandomColor } from '@/assets/svg/BoardIcon';
import { BOARD_ICON_COLORS } from '@/assets/svg/board-icon-colors';
import { CreateBoardIcon } from '@/assets/svg/CreateBoardIcon';
import { BoardOptions } from '../BoardOptions/BoardOptions.component';

import { useStyles } from './BoardLink.styles';
import { useCreateBoard } from '@/features/board';
import { useUpdateBoard } from '@/features/board';
import { BoardActions } from '@/features/home/types';

const { SHARE, RENAME, ARCHIVE, DELETE } = BoardActions;

interface BoardLinkProps {
	id: string;
	name: string;
	due?: number | string;
	newBoard?: boolean;
}

export const BoardLink = ({ id, name, due, newBoard }: BoardLinkProps) => {
	const {
		mutate: createMutate,
		isLoading: createLoading,
		isSuccess: createSuccess,
	} = useCreateBoard();
	const {
		mutate: updateMutate,
		isLoading: updateLoading,
		isSuccess: updateSuccess,
	} = useUpdateBoard({ params: { updateAll: true } });

	const [iconColor, setIconColor] = useState({ name: '', hex: '' });
	const [inputDisplayed, setInputDisplayed] = useState<boolean>(false);
	const [inputText, setInputText] = useState<string>('');
	const navigate = useNavigate();
	const { hovered, ref } = useHover();
	const { classes } = useStyles({ hovered, newBoard, inputDisplayed });

	const linkTo = `/track/boards/${id}/board`;

	useEffect(() => {
		if (!newBoard) {
			const randomColor = getRandomColor(BOARD_ICON_COLORS);
			setIconColor(randomColor);
		}

		if (createSuccess) {
			setInputDisplayed(false);
			setInputText('');
		}
	}, [newBoard, createSuccess]);

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

	const handleCreateBoard = (e: FormEvent) => {
		e.preventDefault();
		createMutate({ data: { name: inputText } });
	};

	const handleSelectOption = (option: string) => {
		if (option === ARCHIVE) {
			updateMutate({ data: { archived: true }, boardId: id });
		}
	};

	return (
		<UnstyledButton onClick={handleClick} className={classes.gridButton}>
			<div className={classes.hoverWrapper} ref={ref}>
				<Group direction='row' noWrap>
					{newBoard ? (
						<CreateBoardIcon hovered={hovered} />
					) : (
						<BoardIcon color={iconColor} />
					)}
					<div>
						{newBoard && inputDisplayed ? (
							<form onSubmit={handleCreateBoard}>
								<Group direction='row' position='apart' noWrap>
									<Input
										placeholder='Board Name'
										name='boardName'
										variant='unstyled'
										value={inputText}
										onChange={handleInputChange}
										autoFocus
										disabled={createLoading || updateLoading}
									/>
									<ActionIcon
										size='sm'
										variant='filled'
										disabled={inputText.length === 0 || createLoading}
										classNames={{ filled: classes.plusButtonFilled }}
										type='submit'
									>
										<FaPlus />
									</ActionIcon>
								</Group>
							</form>
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
				{!newBoard && (
					<BoardOptions visible={hovered} onSelect={handleSelectOption} />
				)}
			</div>
		</UnstyledButton>
	);
};
