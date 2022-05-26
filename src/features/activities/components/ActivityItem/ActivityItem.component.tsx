import { useState, SyntheticEvent, useEffect } from 'react';
import {
	Collapse,
	Container,
	Group,
	Checkbox,
	TextInput,
	Grid,
	Text,
	Avatar,
} from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import { useForm } from '@mantine/form';

import { useStyles } from './ActivityItem.styles';

const imgURL =
	'https://huntr-app.s3.amazonaws.com/5ca045fa6de9e0002ee83078_square';

interface ActivityItemProps {
	id: string;
	title: string;
	note: string;
	completed: boolean;
	job: {
		employer: string;
		title: string;
	};
	employer?: string;
}

export const ActivityItem = (props: ActivityItemProps) => {
	const [opened, setOpened] = useState<boolean>(false);
	const ref = useClickOutside(() => setOpened(false));
	const { classes } = useStyles({ opened });

	const form = useForm({
		initialValues: {
			title: props.title,
			completed: props.completed,
		},
	});

	type FormValues = typeof form.values;

	const openCollapse = () => {
		setOpened(true);
	};

	const handleInputBlur = (e: SyntheticEvent) => {
		const name = e.currentTarget.getAttribute('data-name') as string;
		const value = form.values[name as keyof FormValues];

		if (value !== props[name as keyof ActivityItemProps])
			console.log(name, value);
	};

	return (
		<Container fluid className={classes.itemContainer} ref={ref}>
			<Grid gutter={0} className={classes.grid} columns={16}>
				<Grid.Col span={5} className={classes.col}>
					<Group className={classes.colGroup} align='center' noWrap>
						<Checkbox
							size='xs'
							{...form.getInputProps('completed', { type: 'checkbox' })}
						/>
						<TextInput
							data-name='title'
							placeholder='Title'
							variant='unstyled'
							onClick={openCollapse}
							onBlur={handleInputBlur}
							classNames={{
								root: classes.titleInputRoot,
								input: classes.titleInput,
							}}
							{...form.getInputProps('title')}
						/>
					</Group>
				</Grid.Col>
				<Grid.Col span={2} className={classes.col}>
					<Group
						className={classes.colGroup}
						align='center'
						position='left'
						noWrap
						spacing={7}
					>
						<Avatar size='xs' radius='lg' src={imgURL} />
						<Text className={classes.employer}>{props.job.employer}</Text>
					</Group>
				</Grid.Col>
				<Grid.Col span={5} className={classes.col}>
					<Group className={classes.colGroup} align='center' noWrap>
						<Text className={classes.jobTitle}>{props.job.title}</Text>
					</Group>
				</Grid.Col>
				<Grid.Col span={4} className={classes.col}>
					<Group className={classes.colGroup} align='center' noWrap>
						<Text className={classes.fieldText}>{props.job.title}</Text>
					</Group>
				</Grid.Col>
			</Grid>
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
