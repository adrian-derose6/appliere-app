import { Outlet } from 'react-router-dom';

import { BoardNavigation } from './BoardNavigation';

export const BoardLayout = () => {
	return (
		<>
			<section>
				<Outlet />
			</section>
			<BoardNavigation />
		</>
	);
};
