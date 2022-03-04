import HomeLayout from '@/features/home/components/Layout/HomeLayout';
import GreetingHeader from '@/features/home/components/GreetingHeader/GreetingHeader';

const HomePage = () => {
	return (
		<HomeLayout>
			<GreetingHeader />
		</HomeLayout>
	);
};

export default HomePage;
