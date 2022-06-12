import { createStyles } from '@mantine/core';

export const useStyles = createStyles(
	(theme, { isFlexible }: { isFlexible?: boolean }) => ({
		gridContainer: {
			display: 'grid',
			gridTemplateColumns: isFlexible
				? '1fr 1fr 1fr'
				: 'repeat(auto-fill, 300px)',
			gap: '15px',
			justifyContent: 'center',

			'@media (max-width: 800px)': isFlexible
				? {
						gridTemplateColumns: '1fr 1fr',
				  }
				: {},

			'@media (max-width: 600px)': isFlexible
				? {
						gridTemplateColumns: '1fr',
				  }
				: {},
		},
	})
);
