import { PurplePearlPage } from '@/components/purplePearlPage';
import { StyleBlock } from '@/components/common';
import { purpleStyles } from '@/styles/pageStyles';
import { fetchSiteContent } from '@/utils/api';

export const metadata = {
	title: 'Purple Pearl - Nectar immobilier',
};

const Page = async () => {
	const content = await fetchSiteContent();
	return (
		<>
			<StyleBlock css={purpleStyles} />
			<PurplePearlPage plans={content.purplePearlPlans} />
		</>
	);
};

export default Page;
