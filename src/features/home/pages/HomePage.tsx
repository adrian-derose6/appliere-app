import { HomeLayout } from '@/features/home/components/Layout/HomeLayout';
import { GreetingHeader } from '@/features/home/components/Groups/GreetingHeader/GreetingHeader';
import { HomeDashboard } from '@/features/home/components/Sections/HomeDashboard/HomeDashboard';

export const HomePage = () => {
	return (
		<HomeLayout>
			<GreetingHeader />
			<HomeDashboard />
		</HomeLayout>
	);
};
