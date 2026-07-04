import { PurplePearlPage } from '@/components/purplePearlPage';
import { StyleBlock } from '@/components/common';
import { generateLocalizedMetadata } from '@/i18n/metadata';
import { purpleStyles } from '@/styles/pageStyles';
import { purplePlanStyles } from '@/styles/purplePlanStyles';
import { fetchSiteContent } from '@/utils/api';

export const generateMetadata = () => generateLocalizedMetadata('/purple-pearl');

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
