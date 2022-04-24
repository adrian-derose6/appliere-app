import { HomeLayout } from '@/features/home/components/HomeLayout/HomeLayout.component';
import { GreetingHeader } from '@/features/home/components/GreetingHeader/GreetingHeader.component.';
import { HomeDashboard } from '@/features/home/components/HomeDashboard/HomeDashboard.component';

export const HomePage = () => {
	return (
		<HomeLayout>
			<GreetingHeader />
			<HomeDashboard />
		</HomeLayout>
	);
};
