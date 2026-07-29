import { CommercialRentalPage } from '@/components/commercialRentalPage';
import { generateLocalizedMetadata } from '@/i18n/metadata';
import { fetchSiteContent } from '@/utils/api';
import '@/styles/commercial-rental.css';
import '@/styles/common.css';

export const generateMetadata = () => generateLocalizedMetadata('/location-local');

const Page = async () => {
	const content = await fetchSiteContent();
	return <CommercialRentalPage properties={content.properties} contact={content.contact} />;
};

export default Page;
