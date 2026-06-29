import { GuidePage } from '@/components/guidePage';
import { StyleBlock } from '@/components/common';
import { guideStyles } from '@/styles/pageStyles';
import { fetchSiteContent } from '@/utils/api';

const Page = async () => {
	const content = await fetchSiteContent();
	return (
		<>
			<StyleBlock css={guideStyles} />
			<GuidePage places={content.guidePlaces} contact={content.contact} />
		</>
	);
};

export default Page;
