import { Container, Autocomplete, TextInput } from '@mantine/core';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { MdWorkOutline } from 'react-icons/md';

import { useStyles } from './JobInfo.styles';
export const JobInfo = () => {
	const { classes } = useStyles();

	return (
		<Container fluid pt={20} pr={20} pl={20} pb={20}>
			<Autocomplete
				placeholder='Company'
				label='Company'
				data={[]}
				icon={<HiOutlineOfficeBuilding />}
				classNames={{ input: classes.input }}
			/>
			<TextInput
				placeholder='Job Title'
				label='Job Title'
				mt='md'
				icon={<MdWorkOutline />}
				classNames={{ input: classes.input }}
			/>
		</Container>
	);
};
