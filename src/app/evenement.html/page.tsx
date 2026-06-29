import { EventPage } from '@/components/eventPage';
import { StyleBlock } from '@/components/common';
import { eventStyles } from '@/styles/pageStyles';
import { fetchSiteContent } from '@/utils/api';

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
