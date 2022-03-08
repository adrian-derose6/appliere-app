import { useParams } from 'react-router-dom';

export const BoardPage = () => {
	const params = useParams();
	const { boardId } = params;

	return (
		<>
			<h1>Board Page</h1>
			<p>{boardId}</p>
		</>
	);
};
