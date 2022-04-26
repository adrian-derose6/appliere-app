import {
	HomeLayout,
	GreetingHeader,
	HomeDashboard,
} from '@/features/home/components';

export const HomePage = () => {
	return (
		<HomeLayout>
			<GreetingHeader />
			<HomeDashboard />
		</HomeLayout>
	);
};
