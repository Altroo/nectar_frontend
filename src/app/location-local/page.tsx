import type { Metadata } from 'next';
import { CommercialRentalPage } from '@/components/pages/listings/commercialRentalPage';
import { generateLocalizedMetadata } from '@/utils/serverTranslations';
import { fetchSiteContent } from '@/utils/websiteApi';
import '@/styles/commercial-rental.css';
import '@/styles/common.css';

export const generateMetadata = (): Promise<Metadata> => generateLocalizedMetadata('/location-local');

const Page = async () => {
	const content = await fetchSiteContent();
	return <CommercialRentalPage properties={content.properties} contact={content.contact} />;
};

export default Page;
