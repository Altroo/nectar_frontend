import { EventPage } from '@/components/eventPage';
import { StyleBlock } from '@/components/common';
import { generateLocalizedMetadata } from '@/i18n/metadata';
import { eventStyles } from '@/styles/pageStyles';
import { fetchSiteContent } from '@/utils/api';

export const generateMetadata = () => generateLocalizedMetadata('/evenement');

const Page = async () => {
	const content = await fetchSiteContent();
	return (
		<>
			<StyleBlock css={eventStyles} />
			<EventPage ideas={content.eventIdeas} contact={content.contact} />
		</>
	);
};

export default Page;
