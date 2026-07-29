import type { Metadata } from 'next';
import { PurplePearlPage } from '@/components/pages/purplePearl/purplePearlPage';
import { generateLocalizedMetadata } from '@/utils/serverTranslations';
import { fetchSiteContent } from '@/utils/websiteApi';
import '@/styles/common.css';
import '@/styles/purple-pearl.css';

export const generateMetadata = (): Promise<Metadata> => generateLocalizedMetadata('/purple-pearl');

const Page = async () => {
	const content = await fetchSiteContent();
	return <PurplePearlPage contact={content.contact} plans={content.purplePearlPlans} />;
};

export default Page;
