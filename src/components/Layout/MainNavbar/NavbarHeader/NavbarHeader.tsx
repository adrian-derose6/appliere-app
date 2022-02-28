import { useNavigate } from 'react-router-dom';
import { Image } from '@mantine/core';

import { useStyles } from './NavbarHeader.styles';

const NavbarHeader = () => {
	const navigate = useNavigate();
	const { classes } = useStyles();

	return (
		<div className={classes.wrapper}>
			<Image
				height={30}
				src={require('@/assets/logo.png')}
				fit='contain'
				onClick={() => navigate('/track/board')}
			/>
			<h1
				className={classes.brandName}
				onClick={() => navigate('/track/board')}
			>
				<span className={classes.gradientText}>appliere</span>
			</h1>
		</div>
	);
};

export default NavbarHeader;
