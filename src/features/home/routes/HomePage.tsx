import { HomeLayout } from '@/features/home/components/1-Layout/HomeLayout';
import { GreetingHeader } from '@/features/home/components/2-Sections/GreetingHeader/GreetingHeader';
import { HomeDashboard } from '@/features/home/components/2-Sections/HomeDashboard/HomeDashboard';

export const HomePage = () => {
	return (
		<HomeLayout>
			<GreetingHeader />
			<HomeDashboard />
		</HomeLayout>
	);
};
