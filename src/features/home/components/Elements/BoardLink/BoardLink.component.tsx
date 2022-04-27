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
import {
	useCreateBoard,
	useUpdateBoard,
	useDeleteBoard,
} from '@/features/board';
import { BoardActions } from '@/features/home/types';
import { Color } from '@/assets/svg/board-icon-colors';

const { SHARE, RENAME, ARCHIVE, DELETE } = BoardActions;

interface BoardLinkProps {
	id: string;
	name: string;
	iconColor?: Color;
	due?: number | string;
	newBoard?: boolean;
}

export const BoardLink = ({
	id,
	name,
	iconColor,
	due,
	newBoard,
}: BoardLinkProps) => {
	const {
		mutate: createBoardMutate,
		isLoading: createBoardLoading,
		isSuccess: createBoardSuccess,
	} = useCreateBoard();
	const {
		mutate: updateBoardMutate,
		isLoading: updateBoardLoading,
		isSuccess: updateBoardSuccess,
	} = useUpdateBoard({ params: { updateAll: true } });
	const {
		mutate: deleteBoardMutate,
		isLoading: deleteBoardLoading,
		isSuccess: deleteBoardSuccess,
	} = useDeleteBoard();

	const [inputDisplayed, setInputDisplayed] = useState<boolean>(false);
	const [nameInput, setNameInput] = useState<string>('');
	const navigate = useNavigate();
	const { hovered, ref } = useHover();
	const { classes } = useStyles({ hovered, newBoard, inputDisplayed });

	const linkTo = `/track/boards/${id}/board`;

	useEffect(() => {
		let isMounted = true;

		if (isMounted) {
			if (createBoardSuccess) {
				setInputDisplayed(false);
				setNameInput('');
			}
		}
		return () => {
			isMounted = false;
		};
	}, [createBoardSuccess, deleteBoardSuccess]);

	const dueString = due && typeof due === 'number' ? due.toString() : due;

	const handleClick = () => {
		if (newBoard) {
			setInputDisplayed(true);
		} else {
			navigate(linkTo);
		}
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNameInput(e.target.value);
	};

	const handleCreateBoard = (e: FormEvent) => {
		e.preventDefault();
		createBoardMutate({
			data: { name: nameInput },
		});
	};

	const handleSelectOption = (option: string) => {
		switch (option) {
			case ARCHIVE: {
				updateBoardMutate({ data: { archived: true }, boardId: id });
				break;
			}
			case DELETE: {
				deleteBoardMutate({ boardId: id });
				break;
			}
			default: {
				break;
			}
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
										value={nameInput}
										onChange={handleInputChange}
										autoFocus
										disabled={createBoardLoading || updateBoardLoading}
									/>
									<ActionIcon
										size='sm'
										variant='filled'
										disabled={nameInput.length === 0 || createBoardLoading}
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
