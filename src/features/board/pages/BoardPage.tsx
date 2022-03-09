import { useParams } from 'react-router-dom';

import { Board } from '../components/Sections/Board';
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
