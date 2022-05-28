import { createStyles } from '@mantine/core';
import { DatePicker, DatePickerProps } from '@mantine/dates';
import { VscCalendar } from 'react-icons/vsc';

interface Props extends DatePickerProps {}

export const ActivityDatePicker = ({ ...datePickerProps }: Props) => {
	const { classes } = useStyles();

	return (
		<DatePicker
			placeholder={datePickerProps.placeholder}
			icon={<VscCalendar />}
			classNames={{ input: classes.input }}
		/>
	);
};

const useStyles = createStyles((theme) => {
	return {
		input: {
			width: 300,
			height: '30px !important',
			minHeight: '30px !important',
		},
	};
});
