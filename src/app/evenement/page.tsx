import type { Metadata } from 'next';
import { EventPage } from '@/components/eventPage';
import { generateLocalizedMetadata } from '@/i18n/metadata';
import { fetchSiteContent } from '@/utils/api';
import '@/styles/event.css';
import '@/styles/common.css';

export const generateMetadata = (): Promise<Metadata> => generateLocalizedMetadata('/evenement');

const Page = async () => {
	const content = await fetchSiteContent();
	return <EventPage ideas={content.eventIdeas} contact={content.contact} />;
};

export default Page;
