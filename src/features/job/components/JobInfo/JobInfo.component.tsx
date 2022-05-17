import {
	Container,
	Autocomplete,
	TextInput,
	SimpleGrid,
	Grid,
	ColorInput,
} from '@mantine/core';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { MdWorkOutline } from 'react-icons/md';
import { AiOutlineLink } from 'react-icons/ai';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';

import { useStyles } from './JobInfo.styles';
export const JobInfo = () => {
	const { classes } = useStyles();

	return (
		<Container fluid pt={20} pr={20} pl={20} pb={20}>
			<Grid>
				<Grid.Col span={6}>
					<Autocomplete
						placeholder='Company'
						label='Company'
						data={[]}
						icon={<HiOutlineOfficeBuilding />}
						classNames={{ input: classes.input }}
					/>
				</Grid.Col>
				<Grid.Col span={6}>
					<TextInput
						placeholder='Job Title'
						label='Job Title'
						icon={<MdWorkOutline />}
						classNames={{ input: classes.input }}
					/>
				</Grid.Col>
				<Grid.Col span={8}>
					<TextInput
						placeholder='http://...'
						label='Post URL'
						icon={<AiOutlineLink />}
						classNames={{ input: classes.input }}
					/>
				</Grid.Col>
				<Grid.Col span={4}>
					<TextInput
						placeholder='Salary'
						label='Salary'
						icon={<FaRegMoneyBillAlt />}
						classNames={{ input: classes.input }}
					/>
				</Grid.Col>
				<Grid.Col span={8}>
					<Autocomplete
						placeholder='Location'
						label='Location'
						data={[]}
						icon={<IoLocationOutline />}
						classNames={{ input: classes.input }}
					/>
				</Grid.Col>
				<Grid.Col span={4}>
					<ColorInput
						placeholder='Pick color'
						label='Color'
						disallowInput
						withPicker={false}
						classNames={{ input: classes.input }}
					/>
				</Grid.Col>
			</Grid>
		</Container>
	);
};
