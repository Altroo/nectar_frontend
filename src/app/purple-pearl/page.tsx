import { PurplePearlPage } from '@/components/purplePearlPage';
import { StyleBlock } from '@/components/common';
import { purpleStyles } from '@/styles/pageStyles';
import { purplePlanStyles } from '@/styles/purplePlanStyles';
import { fetchSiteContent } from '@/utils/api';

export const metadata = {
	title: 'Purple Pearl - Nectar immobilier',
};

const Page = async () => {
	const content = await fetchSiteContent();
	return (
		<>
			<StyleBlock css={purpleStyles} />
			<StyleBlock css={purplePlanStyles} />
			<PurplePearlPage contact={content.contact} plans={content.purplePearlPlans} />
		</>
	);
};

export default Page;
