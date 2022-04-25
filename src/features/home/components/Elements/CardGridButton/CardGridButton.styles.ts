import { createStyles, MantineTheme } from '@mantine/core';

interface stylesProps {
	hovered: boolean;
	newBoard?: boolean;
}

export const useStyles = createStyles(
	(theme: MantineTheme, { hovered, newBoard }: stylesProps) => {
		const labelColor = {
			newBoardColor: !hovered ? '#6d6e6f' : '#1e1f21',
			normalColor: '#1e1f21',
		};

		return {
			gridButton: {
				height: '64px',
				width: '100%',
				borderRadius: '7px',
				paddingLeft: '8px',
				position: 'relative',

				'&:hover': {
					backgroundColor: '#eceeef',
				},
			},
			hoverWrapper: {
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				minHeight: '100%',
				minWidth: '100%',
			},
			buttonLabel: {
				fontSize: '14px',
				lineHeight: '22px',
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				whiteSpace: 'nowrap',
				color: newBoard ? labelColor.newBoardColor : labelColor.normalColor,
				fontWeight: 500,
			},
			menuRoot: {
				backgroundColor: 'transparent',

				'&:hovered': {
					backgroundColor: 'white',
				},
				zIndex: 500,
			},
		};
	}
);
