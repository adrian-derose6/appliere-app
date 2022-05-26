import { createStyles } from '@mantine/core';

export const useStyles = createStyles(
	(theme, { opened }: { opened: boolean }) => {
		console.log(opened);
		return {
			itemContainer: {
				minHeight: '42px',
				width: '100%',
				minWidth: '40px',
				borderRadius: '8px',
				boxSizing: 'border-box',
				transition: 'all 0.4s ease-out 0s',
				cursor: 'pointer',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				padding: '0 10px',

				'&:hover': {
					backgroundColor: theme.colors.gray[2],
				},
			},
			grid: {
				minWidth: '40px',
			},
			col: {
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				backgroundColor: theme.colors.white,
			},
			colGroup: {
				width: '100%',
				backgroundColor: theme.colors.white,
			},
			titleInputRoot: {
				display: 'inline-block',
				width: '100%',
			},
			titleInput: {
				display: 'inline-block',
				paddingLeft: '0px',
				border: 'none',
				boxShadow: 'none',
				margin: '0px',
				height: '30px',
				fontSize: '14px',
				color: theme.other.brandDarkColor,
				textAlign: 'left',
				fontFamily: theme.other.secondaryFontFamily,
				width: '100%',
				cursor: opened ? 'caret' : 'pointer',
			},
			fieldText: {
				fontSize: '13px',
				color: theme.colors.gray[6],
			},
			employer: {
				fontSize: '13px',
				color: theme.colors.gray[6],
			},
			jobTitle: {
				fontSize: '13px',
				color: theme.colors.gray[6],
				textDecoration: 'underline',
				textUnderlineOffset: '3px',
			},
		};
	}
);
