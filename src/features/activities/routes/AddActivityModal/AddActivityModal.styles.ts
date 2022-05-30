import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		modal: {
			overflow: 'hidden',
		},
		modalHeader: {
			height: 40,
			width: '100%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			//borderBottom: '1px solid rgba(25, 4, 69, 0.1)',
			margin: 0,
			backgroundColor: theme.other.brandPrimaryColor,
			position: 'relative',
			boxShadow: '0px 1px 4px 0px rgba(179,174,174,0.75)',
		},
		modalTitle: {
			color: 'white',
			fontFamily: theme.headings.fontFamily,
			fontSize: '16px',
			fontWeight: 600,
			margin: 0,
		},
		modalClose: {
			visibility: 'hidden',
		},
		modalFooter: {
			borderTop: '1px solid rgba(25, 4, 69, 0.1)',
		},
		modalOverlay: {
			backgroundColor: 'rgba(211, 85, 94, 0.8)',
		},
		mainSection: {
			borderRight: '1px solid rgba(25, 4, 69, 0.1)',
		},
		input: {
			boxShadow: 'rgb(25 4 69 / 5%) 0px 2px 7px',
			border: '1px solid rgba(169, 169, 169, 0.6)',
			transition: 'all .2s ease',

			'&:focus': {
				//border: `1px solid ${theme.other.brandPrimaryColor}`,
			},
		},
		submitButton: {},
		modalButton: {
			border: '1px solid rgba(25, 4, 69, 0.2)',
			boxShadow: 'rgb(25 4 69 / 5%) 0px 4px 10px',
			transition: 'all 0.4s ease-out 0s',

			'&:hover': {
				boxShadow: 'rgb(25 4 69 / 10%) 0px 4px 10px',
				border: '1px solid rgba(0, 0, 0, 0.1)',
			},
		},
	};
});
