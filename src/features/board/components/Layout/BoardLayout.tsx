import { Outlet } from 'react-router-dom';

import BoardNavigation from './BoardNavigation';

const BoardLayout = () => {
	return (
		<>
			<BoardNavigation />
			<section>
				<Outlet />
			</section>
		</>
	);
};

export default BoardLayout;
