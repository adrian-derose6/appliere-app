import { useParams, Outlet } from 'react-router-dom';

import { Board } from '../components/2-Sections/Board';
import { BoardProvider } from '../stores/contexts/board-context';

export const BoardPage = () => {
	const params = useParams();
	const { boardId } = params;

	return (
		<BoardProvider>
			<Board />
		</BoardProvider>
	);
};
