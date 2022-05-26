import { useState } from 'react';
import { Collapse, Container, Group, Checkbox, TextInput } from '@mantine/core';

import { useStyles } from './ActivityItem.styles';

interface ActivityItemProps {
	item: any;
}

export const ActivityItem = ({ item }: ActivityItemProps) => {
	const [opened, setOpen] = useState(false);
	const { classes } = useStyles();

	const handleToggleCollapse = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	return (
		<Container fluid className={classes.itemContainer}>
			<Group
				className={classes.control}
				align='center'
				onClick={handleToggleCollapse}
			>
				<Checkbox size='xs' />
				<TextInput
					variant='unstyled'
					classNames={{ input: classes.titleInput }}
				/>
			</Group>
			<Collapse
				in={opened}
				transitionDuration={120}
				transitionTimingFunction='ease'
			>
				<h1>Opened</h1>
			</Collapse>
		</Container>
	);
};
