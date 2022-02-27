import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const BoardsOverview = () => {
	return (
		<Fragment>
			<h1>Personal Boards</h1>
			<ul>
				<li>
					<Link to='id1234/board'>Board 1234</Link>
				</li>
			</ul>
		</Fragment>
	);
};

export default BoardsOverview;
