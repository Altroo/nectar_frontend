import type { Metadata } from 'next';
import { GuidePage } from '@/components/pages/guide/guidePage';
import { generateLocalizedMetadata } from '@/utils/serverTranslations';
import { fetchSiteContent } from '@/utils/websiteApi';
import '@/styles/guide.css';
import '@/styles/common.css';

export const generateMetadata = (): Promise<Metadata> => generateLocalizedMetadata('/guide-tanger');

const Page = async () => {
	const content = await fetchSiteContent();
	return <GuidePage places={content.guidePlaces} contact={content.contact} />;
};

export default Page;
