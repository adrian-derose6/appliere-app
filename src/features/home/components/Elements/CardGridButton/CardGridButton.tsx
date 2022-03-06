import { Avatar, Group, UnstyledButton, Text } from '@mantine/core';

import { useStyles } from './CardGridButton.styles';

export const CardGridButton = () => {
	const { classes } = useStyles();

	return (
		<UnstyledButton className={classes.gridButton}>
			<Group>
				<Avatar size={48} color='blue' radius={12} />
				<div>
					<Text className={classes.buttonLabel}>Appliere</Text>
					<Text size='xs' color='gray'>
						1 task due soon
					</Text>
				</div>
			</Group>
		</UnstyledButton>
	);
};
