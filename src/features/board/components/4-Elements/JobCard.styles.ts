import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		card: {
			border: '1px solid lightgray',
			borderRadius: '4px',
			padding: '8px',
			marginBottom: '7px',
			backgroundColor: 'rgba(10, 180, 87, 0.85);',
			display: 'flex',
			boxShadow: 'rgb(25 4 69 / 3%) 0px 1px 3px',
			cursor: 'pointer',
		},
	};
});
