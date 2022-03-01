import { useState } from 'react';
import {
	Accordion,
	MantineTheme,
	createStyles,
	useAccordionState,
	AccordionState,
} from '@mantine/core';
import { useHover } from '@mantine/hooks';

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
	const { hovered, ref } = useHover();
	const { classes } = useStyles();

	console.log(hovered);
	return (
		<>
			<Accordion
				classNames={{
					control: classes.control,
					label: classes.label,
					item: classes.item,
					icon: classes.icon,
				}}
				ref={ref}
				state={{ '0': hovered ? true : false }}
			>
				<Accordion.Item label={props.label} iconPosition='right'>
					{props.children}
				</Accordion.Item>
			</Accordion>
		</>
	);
};

export default AccordionLinkGroup;
