import { Outlet } from 'react-router-dom';

import { BoardNavigation } from './BoardNavigation';

export const BoardLayout = () => {
	return (
		<>
			<BoardNavigation />
			<section
				style={{
					minWidth: '100%',
					maxHeight: '100%',
					minHeight: '100%',
					overflow: 'hidden',
					boxSizing: 'border-box',
					paddingTop: 50,
				}}
			>
				<Outlet />
			</section>
		</>
	);
};
