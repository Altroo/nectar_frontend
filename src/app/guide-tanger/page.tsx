import type { Metadata } from 'next';
import { GuidePage } from '@/components/guidePage';
import { generateLocalizedMetadata } from '@/i18n/metadata';
import { fetchSiteContent } from '@/utils/api';
import '@/styles/guide.css';
import '@/styles/common.css';

export const generateMetadata = (): Promise<Metadata> => generateLocalizedMetadata('/guide-tanger');

const Page = async () => {
	const content = await fetchSiteContent();
	return <GuidePage places={content.guidePlaces} contact={content.contact} />;
};

export default Page;
