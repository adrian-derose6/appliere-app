import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
	return {
		pageWrapper: {
			flexDirection: 'column',
			backgroundImage:
				'url("https://d3ki9tyy5l5ruj.cloudfront.net/obj/4cfd7fb292cbefb2a7858d6667021177c8be91a8/Pink_background.png")',
			backgroundSize: 'contain',
			backgroundAttachment: 'fixed',
			position: 'relative',
			transition: 'background-image 200ms ease-in-out',
			minHeight: '100%',
			minWidth: '920px',
		},
		contentWrapper: {
			alignItems: 'center',
			boxSizing: 'border-box',
			flexDirection: 'column',
			padding: '72px 32px 0',
			minWidth: '100%',
			minHeight: '100%',
		},
		content: {
			display: 'flex',
			flexDirection: 'column',
			maxWidth: '1200px',
			width: '100%',
			position: 'relative',
		},
	};
});
