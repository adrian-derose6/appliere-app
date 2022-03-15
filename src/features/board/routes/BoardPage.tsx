import { useParams } from 'react-router-dom';
import { ScrollArea } from '@mantine/core';

import { Board } from '../components/2-Sections/Board';
import { BoardProvider } from '../stores/contexts/board-context';

export const BoardPage = () => {
	const params = useParams();
	const { boardId } = params;

	return (
		<BoardProvider>
			<ScrollArea
				style={{ height: '100%' }}
				styles={{
					viewport: {
						height: '100%',
					},
				}}
			>
				<Board />
			</ScrollArea>
		</BoardProvider>
	);
};
