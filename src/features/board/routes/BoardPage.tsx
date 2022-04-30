import { useParams } from 'react-router-dom';
import { ScrollArea } from '@mantine/core';

import { Board } from '../components/Board/Board.component';
import { BoardProvider } from '../stores/contexts/board-context';

export const BoardPage = () => {
	const params = useParams();

	return (
		<BoardProvider>
			<ScrollArea
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
