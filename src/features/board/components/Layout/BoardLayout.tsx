import { Outlet } from 'react-router-dom';

import { BoardNavigation } from './BoardNavigation';

export const BoardLayout = () => {
	return (
		<>
			<BoardNavigation />
			<section>
				<Outlet />
			</section>
		</>
	);
};
