import { HomePage } from '@/components/pages/home/homePage';
import { fetchSiteContent } from '@/utils/websiteApi';
import '@/styles/home.css';
import '@/styles/common.css';

const Page = async () => {
	const content = await fetchSiteContent();
	return <HomePage content={content} />;
};

export default Page;
