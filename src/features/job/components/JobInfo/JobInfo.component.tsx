import { SyntheticEvent, useEffect } from 'react';
import {
	Container,
	Autocomplete,
	TextInput,
	NumberInput,
	Text,
	Grid,
	ColorInput,
	Select,
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
import JOB_COLORS from '../../utils/job-colors';
import JOB_TYPES from '../../utils/job-types';
import { useUpdateJob } from '../../api/updateJob';

interface JobInfoProps {
	job?: Job;
}

export const JobInfo = ({ job }: JobInfoProps) => {
	const updateJobMutation = useUpdateJob();
	const { classes } = useStyles();

	const jobId = job?.id as string;

	const form = useForm({
		initialValues: {
			employer: job?.employer || '',
			title: job?.title || '',
			htmlDescription: job?.htmlDescription || '',
			postURL: job?.postURL || '',
			salary: job?.salary || '',
			location: job?.location || '',
			jobType: job?.jobType || 'FULL_TIME',
			color: job?.color || '',
		},
	});

	type FormValues = typeof form.values;

	useEffect(() => {
		if (job?.color !== form.values.color) {
			updateJobMutation.mutate({ jobId, data: { color: form.values.color } });
		}
		if (job?.jobType !== form.values.jobType) {
			updateJobMutation.mutate({
				jobId,
				data: { jobType: form.values.jobType },
			});
		}
	}, [job?.color, form.values]);

	const handleUpdateInput = (e: SyntheticEvent) => {
		const name = e.currentTarget.getAttribute('data-name') as string;
		const value = form.values[name as keyof FormValues];

		if (job && value === job[name as keyof Job]) return;
		updateJobMutation.mutate({ jobId, data: { [name]: value } });
	};

	return (
		<Container fluid pt={20} pr={20} pl={20} pb={20}>
			<form>
				<Grid px='sm'>
					<Grid.Col span={6}>
						<Autocomplete
							placeholder='Company'
							label='Company'
							data-name='employer'
							data={[]}
							icon={<HiOutlineOfficeBuilding />}
							onBlur={handleUpdateInput}
							{...form.getInputProps('employer')}
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<TextInput
							placeholder='Job Title'
							label='Job Title'
							data-name='title'
							icon={<MdWorkOutline />}
							onBlur={handleUpdateInput}
							{...form.getInputProps('title')}
						/>
					</Grid.Col>
					<Grid.Col span={8}>
						<TextInput
							placeholder='http://...'
							label='Post URL'
							data-name='postURL'
							icon={<AiOutlineLink />}
							onBlur={handleUpdateInput}
							{...form.getInputProps('postURL')}
						/>
					</Grid.Col>
					<Grid.Col span={4}>
						<NumberInput
							placeholder='Yearly Salary'
							label='Yearly Salary'
							data-name='salary'
							icon={<FaRegMoneyBillAlt />}
							onBlur={handleUpdateInput}
							{...form.getInputProps('salary')}
						/>
					</Grid.Col>
					<Grid.Col span={6}>
						<Autocomplete
							placeholder='Location'
							label='Location'
							data-name='location'
							data={[]}
							icon={<IoLocationOutline />}
							onBlur={handleUpdateInput}
							{...form.getInputProps('location')}
						/>
					</Grid.Col>
					<Grid.Col span={3}>
						<ColorInput
							placeholder='Pick color'
							label='Color'
							data-name='color'
							disallowInput
							withPicker={false}
							swatches={JOB_COLORS}
							swatchesPerRow={4}
							withPreview={false}
							transition='pop'
							transitionDuration={120}
							transitionTimingFunction='ease'
							styles={{
								input: { backgroundColor: form.values.color || JOB_COLORS[1] },
							}}
							{...form.getInputProps('color')}
						/>
					</Grid.Col>
					<Grid.Col span={3}>
						<Select
							label='Job Type'
							placeholder='Job Type'
							data-name='jobType'
							transition='pop'
							transitionDuration={120}
							transitionTimingFunction='ease'
							data={JOB_TYPES}
							{...form.getInputProps('jobType')}
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
							data-name='htmlDescription'
							onBlur={handleUpdateInput}
							classNames={{ root: classes.descriptionRoot }}
						/>
					</Grid.Col>
				</Grid>
			</form>
		</Container>
	);
};
