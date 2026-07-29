import type { Metadata } from 'next';
import { EventPage } from '@/components/pages/events/eventPage';
import { generateLocalizedMetadata } from '@/utils/serverTranslations';
import { fetchSiteContent } from '@/utils/websiteApi';
import '@/styles/event.css';
import '@/styles/common.css';

export const generateMetadata = (): Promise<Metadata> => generateLocalizedMetadata('/evenement');

const Page = async () => {
	const content = await fetchSiteContent();
	return <EventPage ideas={content.eventIdeas} contact={content.contact} />;
};

export default Page;
