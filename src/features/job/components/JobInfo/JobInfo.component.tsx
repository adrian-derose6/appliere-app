import {
	Container,
	Autocomplete,
	TextInput,
	SimpleGrid,
	Text,
	Grid,
	ColorInput,
} from '@mantine/core';
import { RichTextEditor } from '@mantine/rte';
import { useForm } from '@mantine/form';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { MdWorkOutline } from 'react-icons/md';
import { AiOutlineLink } from 'react-icons/ai';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';

import { useStyles } from './JobInfo.styles';
import { Job } from '../../types';

interface JobInfoProps {
	job?: Job;
}

export const JobInfo = ({ job }: JobInfoProps) => {
	const { classes } = useStyles();

	const form = useForm({
		initialValues: {
			employer: job?.employer || '',
			title: job?.title || '',
			htmlDescription: '',
			postURL: '',
			salary: job?.salary || '',
			location: '',
			color: '',
		},
	});

	type FormValues = typeof form.values;

	return (
		<Container fluid pt={20} pr={20} pl={20} pb={20}>
			<form>
				<Grid px='sm'>
					<Grid.Col span={6}>
						<Autocomplete
							placeholder='Company'
							label='Company'
							data={[]}
							icon={<HiOutlineOfficeBuilding />}
							classNames={{ input: classes.input }}
							{...form.getInputProps('employer')}
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<TextInput
							placeholder='Job Title'
							label='Job Title'
							icon={<MdWorkOutline />}
							classNames={{ input: classes.input }}
							{...form.getInputProps('title')}
						/>
					</Grid.Col>
					<Grid.Col span={8}>
						<TextInput
							placeholder='http://...'
							label='Post URL'
							icon={<AiOutlineLink />}
							classNames={{ input: classes.input }}
							{...form.getInputProps('postURL')}
						/>
					</Grid.Col>
					<Grid.Col span={4}>
						<TextInput
							placeholder='Salary'
							label='Salary'
							icon={<FaRegMoneyBillAlt />}
							classNames={{ input: classes.input }}
							{...form.getInputProps('salary')}
						/>
					</Grid.Col>
					<Grid.Col span={8}>
						<Autocomplete
							placeholder='Location'
							label='Location'
							data={[]}
							icon={<IoLocationOutline />}
							classNames={{ input: classes.input }}
							{...form.getInputProps('location')}
						/>
					</Grid.Col>
					<Grid.Col span={4}>
						<ColorInput
							placeholder='Pick color'
							label='Color'
							disallowInput
							withPicker={false}
							classNames={{ input: classes.input }}
							{...form.getInputProps('color')}
						/>
					</Grid.Col>
					<Grid.Col span={12}>
						<Text className={classes.descriptionLabel}>Description</Text>
						<RichTextEditor
							{...form.getInputProps('htmlDescription')}
							controls={[
								['bold', 'italic', 'underline', 'link'],
								['orderedList', 'unorderedList', 'h1', 'h2', 'h3'],
								['alignLeft', 'alignCenter', 'alignRight'],
							]}
							classNames={{ root: classes.descriptionRoot }}
						/>
					</Grid.Col>
				</Grid>
			</form>
		</Container>
	);
};
