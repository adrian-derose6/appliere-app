import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		wrapper: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-start',
			padding: '0 24px',
			height: 72,
		},
		brandName: {
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
		gradientText: {
			color: /*'#e24d89'*/ 'white',
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
