import { useParams } from 'react-router-dom';

const BoardPage = () => {
	const params = useParams();
	const { boardId } = params;

	return (
		<>
			<h1>Board Page</h1>
			<p>{boardId}</p>
		</>
	);
};

export default BoardPage;
