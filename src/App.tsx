import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<h1>Home Page</h1>} />
				<Route path='jobs' element={<h1>Search Jobs Page</h1>} />
			</Routes>
		</Layout>
	);
}

export default App;
