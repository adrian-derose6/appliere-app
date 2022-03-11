import { isEmpty } from 'lodash';
import { createStyles } from '@mantine/core';

type StylesProps = {
	isDragging: boolean;
	isDraggingOver?: boolean;
	isHoveringOver: boolean;
	isEmpty: boolean;
};

export const useStyles = createStyles(
	(theme, { isDragging, isDraggingOver, isHoveringOver }: StylesProps) => {
		return {
			columnWrapper: {
				backgroundColor: isDragging ? 'white' : 'transparent',
				boxSizing: 'border-box',
				margin: '8px 0',
				padding: 0,
				minWidth: '300px',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				transition: 'all 0.2s ease',
				borderRadius: '6px',
				boxShadow:
					isDragging || isHoveringOver
						? '0 0 0 1px #edeae9, 0 1px 4px 0 rgba(109, 110, 111, 0.08)'
						: 'none',
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
				flexGrow: '1',
				height: '100%',
				minWidth: '100%',
				padding: '0 10px',
				boxSizing: 'border-box',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				position: 'relative',
				background:
					isDraggingOver || isEmpty
						? 'linear-gradient(180deg, #f5f3f3, rgba(245, 243, 243, 0) 100%)'
						: 'inherit',
				backgroundClip: 'content-box',
				borderRadius: '4px',
			},
		};
	}
);
