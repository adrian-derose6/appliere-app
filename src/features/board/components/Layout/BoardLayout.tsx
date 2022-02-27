import { Outlet } from 'react-router-dom';

import BoardNavigation from './BoardNavigation';

const BoardLayout = () => {
	return (
		<>
			<section>
				<Outlet />
			</section>
			<BoardNavigation />
		</>
	);
};

export default BoardLayout;
