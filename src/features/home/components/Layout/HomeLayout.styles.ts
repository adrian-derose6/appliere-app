import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		pageWrapper: {
			backgroundImage:
				'url("https://d3ki9tyy5l5ruj.cloudfront.net/obj/4cfd7fb292cbefb2a7858d6667021177c8be91a8/Pink_background.png")',
			backgroundSize: 'contain',
			display: 'flex',
			flex: '1 1 auto',
			justifyContent: 'center',
			position: 'relative',
			transition: 'background-image 200ms ease-in-out',
			height: '100%',
			paddingTop: 72,
		},
		contentWrapper: {
			alignItems: 'center',
			boxSizing: 'border-box',
			display: 'flex',
			flexDirection: 'column',
			padding: '0 32px',
			width: '100%',
			height: '100%',
		},
		content: {
			alignItems: 'stretch',
			display: 'flex',
			flexDirection: 'column',
			maxWidth: '1200px',
			width: '100%',
		},
	};
});
