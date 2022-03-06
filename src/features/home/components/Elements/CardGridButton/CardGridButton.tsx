import {
	Avatar,
	Group,
	UnstyledButton,
	Text,
	Menu,
	MenuItem,
} from '@mantine/core';
import { useHover } from '@mantine/hooks';

import { useStyles } from './CardGridButton.styles';

interface CardGridButtonProps {
	id?: number;
	name: string;
	due?: number | string;
	createNew?: boolean;
	avatarSrc?: string;
}

export const CardGridButton = ({
	id,
	name,
	due,
	createNew,
	avatarSrc,
}: CardGridButtonProps) => {
	const { hovered, ref } = useHover();
	const { classes } = useStyles();

	const dueString = due && typeof due === 'number' ? due.toString() : due;

	return (
		<UnstyledButton className={classes.gridButton}>
			<div className={classes.hoverWrapper} ref={ref}>
				<Group>
					<Avatar
						size={48}
						color='blue'
						radius={12}
						src={avatarSrc ? require(avatarSrc) : null}
					/>
					<div>
						<Text className={classes.buttonLabel}>{name}</Text>
						{due ? (
							<Text size='xs' color='gray'>
								{`${dueString}`} activities due soon
							</Text>
						) : null}
					</div>
				</Group>
				{hovered ? (
					<Menu style={{ right: 10 }}>
						<Menu.Item>Share...</Menu.Item>
						<Menu.Item>Add to favorites</Menu.Item>
						<Menu.Item>Edit board details</Menu.Item>
						<Menu.Item>Copy board link</Menu.Item>
					</Menu>
				) : null}
			</div>
		</UnstyledButton>
	);
};
