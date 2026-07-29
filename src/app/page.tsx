import { HomePage } from '@/components/homePage';
import { fetchSiteContent } from '@/utils/api';
import '@/styles/home.css';
import '@/styles/common.css';

const Page = async () => {
	const content = await fetchSiteContent();
	return <HomePage content={content} />;
};

export default Page;
