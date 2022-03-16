import { Outlet } from 'react-router-dom';

import { BoardNavigation } from './BoardNavigation';

export const BoardLayout = () => {
	return (
		<>
			<BoardNavigation />
			<section
				style={{
					minWidth: '100%',
					height: '100vh',

					boxSizing: 'border-box',
					paddingTop: 50,
				}}
			>
				<Outlet />
			</section>
		</>
	);
};
