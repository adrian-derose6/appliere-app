import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		wrapper: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-start',
			padding: '0 0 0 6px ',
			height: 82,
		},
		brandHeader: {
			fontStyle: 'normal',
			fontWeight: 'normal',
			fontSize: 25,
			lineHeight: 1,
			fontFamily: theme.other.brandFontFamily,
			textAlign: 'center',
			textAnchor: 'middle',
			paddingLeft: 5,
			cursor: 'pointer',
		},
		brandText: {
			color: 'white' /*'#e24d89'*/,
			/*background: theme.fn.linearGradient(
				90,
				'#D3555E',
				'#C67076',
				'#B98B8F',
				'#ADA6A8'
			),
			backgroundClip: 'text',
			textFillColor: 'transparent',*/
		},
	};
});
