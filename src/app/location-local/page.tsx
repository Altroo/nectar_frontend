import { CommercialRentalPage } from '@/components/commercialRentalPage';
import { StyleBlock } from '@/components/common';
import { generateLocalizedMetadata } from '@/i18n/metadata';
import { commercialRentalStyles } from '@/styles/commercialRentalStyles';
import { fetchSiteContent } from '@/utils/api';

export const generateMetadata = () => generateLocalizedMetadata('/location-local');

const Page = async () => {
	const content = await fetchSiteContent();
	return (
		<>
			<StyleBlock css={commercialRentalStyles} />
			<CommercialRentalPage properties={content.properties} contact={content.contact} />
		</>
	);
};

export default Page;
