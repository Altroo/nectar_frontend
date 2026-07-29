import type { Metadata } from 'next';
import { PurplePearlPage } from '@/components/purplePearlPage';
import { generateLocalizedMetadata } from '@/i18n/metadata';
import { fetchSiteContent } from '@/utils/api';
import '@/styles/common.css';
import '@/styles/purple-pearl.css';

export const generateMetadata = (): Promise<Metadata> => generateLocalizedMetadata('/purple-pearl');

const Page = async () => {
	const content = await fetchSiteContent();
	return <PurplePearlPage contact={content.contact} plans={content.purplePearlPlans} />;
};

export default Page;
