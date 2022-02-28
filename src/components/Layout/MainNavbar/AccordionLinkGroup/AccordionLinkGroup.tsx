import { Accordion, MantineTheme, createStyles } from '@mantine/core';

interface AccordionNavbarLinkProps {
	label?: string | React.ReactNode;
	children: React.ReactNode;
}

const useStyles = createStyles((theme: MantineTheme) => ({
	item: {
		marginTop: 0,
	},
	label: {
		color: 'white',
		fontSize: 15,
		fontFamily: theme.other.textFontFamily,
		fontWeight: 'normal',
	},
	control: {
		paddingLeft: 12,
		'&:hover': {
			backgroundColor: 'rgba(255,255,255,.08)',
		},
	},
	icon: {
		color: 'white',
	},
}));

const AccordionLinkGroup = (props: AccordionNavbarLinkProps) => {
	const { classes } = useStyles();

	return (
		<>
			<Accordion
				classNames={{
					control: classes.control,
					label: classes.label,
					item: classes.item,
					icon: classes.icon,
				}}
			>
				<Accordion.Item label={props.label} iconPosition='right'>
					{props.children}
				</Accordion.Item>
			</Accordion>
		</>
	);
};

export default AccordionLinkGroup;
