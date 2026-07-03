import { GuidePage } from '@/components/guidePage';
import { StyleBlock } from '@/components/common';
import { guideNavbarStyles } from '@/styles/guideNavbarStyles';
import { guideStyles } from '@/styles/pageStyles';
import { fetchSiteContent } from '@/utils/api';

export const metadata = {
	title: 'Guide de Tanger - Nectar immobilier',
};

const Page = async () => {
	const content = await fetchSiteContent();
	return (
		<>
			<StyleBlock css={guideStyles} />
			<StyleBlock css={guideNavbarStyles} />
			<GuidePage places={content.guidePlaces} contact={content.contact} />
		</>
	);
};

export default Page;
