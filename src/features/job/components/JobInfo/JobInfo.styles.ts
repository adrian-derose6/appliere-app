import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		container: {
			backgroundColor: theme.other.mainBackgroundColor,
		},
		input: {
			boxShadow: 'rgb(25 4 69 / 5%) 0px 2px 7px',
			border: '1px solid rgba(169, 169, 169, 0.8)',
			transition: 'all .2s ease',

			'&:focus': {
				//border: `1px solid ${theme.other.brandPrimaryColor}`,
			},
		},
		descriptionRoot: {
			minHeight: '155px',
		},
		descriptionLabel: {
			fontSize: '14px',
			fontWeight: 500,
			marginBottom: '4px',
			color: theme.other.brandDarkColor,
		},
		colorInput: {
			width: '100%',
			color: 'white',
		},
	};
});
