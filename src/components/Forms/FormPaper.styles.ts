import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		form: {
			width: '90vw',
			maxWidth: theme.other.fixedWidth,
			background: theme.colors.white,
			borderRadius: theme.other.borderRadius,
			boxShadow: theme.other.shadow2,
			padding: '2rem 2.5rem',
			margin: '3rem auto',
			transition: theme.other.transition1,
		},
	};
});
