import type { Metadata } from 'next';
import { ListingPage } from '@/components/pages/listings/listingPage';
import { generateLocalizedMetadata } from '@/utils/serverTranslations';
import { fetchSiteContent } from '@/utils/websiteApi';
import '@/styles/listing.css';
import '@/styles/common.css';

export const generateMetadata = (): Promise<Metadata> => generateLocalizedMetadata('/vente-local');

const Page = async () => {
	const content = await fetchSiteContent();
	return (
		<ListingPage
			transaction="sale"
			propertyType="commercial"
			title="Locaux à vendre à Tanger"
			kicker="Vente · Local commercial"
			description="Une page dédiée aux locaux commerciaux disponibles à la vente, avec filtres par type et superficie."
			sectionTitle="Biens disponibles"
			sectionDescription="Utilisez les filtres pour trouver rapidement le bien qui correspond au quartier, à la surface et au projet du client."
			properties={content.properties}
			contact={content.contact}
		/>
	);
};

export default Page;
