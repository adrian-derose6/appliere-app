import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		brandName: {
			fontStyle: 'normal',
			fontWeight: 'normal',
			fontSize: 25,
			lineHeight: 1,
			fontFamily: 'Comfortaa, cursive',
			textAlign: 'center',
			textAnchor: 'middle',
			paddingLeft: 5,
		},
		gradientText: {
			backgroundColor: '#D3555E',
			background:
				'linear-gradient(to right, #D3555E 0%, #C67076 25%, #B98B8F 75%, #ADA6A8 100%)',
			backgroundClip: 'text',
			textFillColor: 'transparent',
		},
		brandLogo: {},
	};
});
