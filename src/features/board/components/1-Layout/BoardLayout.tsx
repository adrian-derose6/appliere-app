import { Outlet } from 'react-router-dom';

import { BoardNavigation } from './BoardNavigation';

export const BoardLayout = () => {
	return (
		<>
			<BoardNavigation />
			<section
				style={{
					paddingTop: 50,
					minWidth: '100%',
					height: 'calc(100vh - 50px)',
					overflow: 'hidden',
				}}
			>
				<Outlet />
			</section>
		</>
	);
};
