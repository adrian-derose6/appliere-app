import { createStyles } from '@mantine/core';

type stylesProps = { isDraggingOver?: boolean; isHoveringOver: boolean };

export const useStyles = createStyles(
	(theme, { isDraggingOver, isHoveringOver }: stylesProps) => {
		return {
			columnWrapper: {
				backgroundColor: 'white',
				boxSizing: 'border-box',
				margin: '8px 0',
				padding: 0,
				width: '300px',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				transition: 'border 0.2s ease',
				borderRadius: '6px',
				border: isHoveringOver
					? '1px solid lightgrey'
					: '1px solid transparent',
			},
			columnHeader: {
				padding: '20px 10px 20px',
				width: '100%',
				boxSizing: 'border-box',
				cursor: 'pointer',
			},
			columnTitle: {
				fontFamily: 'Segoe UI, sans-serif',
				fontSize: 16,
				fontWeight: 500,
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				whiteSpace: 'nowrap',
			},
			columnList: {
				backgroundColor: isDraggingOver ? 'lightgray' : 'inherit',
				transition: 'background-color 0.2s ease',
				flexGrow: '1',
				height: '100%',
				width: '100%',
				padding: '0 10px',
				boxSizing: 'border-box',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			},
			columnListButton: {
				color: '#6d6e6f',
				fill: '#6d6e6f',
				width: '100%',
				boxSizing: 'border-box',
				transition: 'all 0.2s ease',

				'&:hover': {
					backgroundColor: 'lightgray',
					color: theme.other.brandDarkColor,
				},
			},
		};
	}
);
