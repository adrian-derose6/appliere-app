import AppRouter from '@/routes/AppRouter';

import MainLayout from '@/components/Layout/MainLayout';

export default function App() {
	return (
		<MainLayout>
			<AppRouter />
		</MainLayout>
	);
}
