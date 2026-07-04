import { ListingPage } from '@/components/listingPage';
import { StyleBlock } from '@/components/common';
import { generateLocalizedMetadata } from '@/i18n/metadata';
import { listingStyles } from '@/styles/pageStyles';
import { fetchSiteContent } from '@/utils/api';

export const generateMetadata = () => generateLocalizedMetadata('/vente-local');

const Page = async () => {
	const content = await fetchSiteContent();
	return (
		<>
			<StyleBlock css={listingStyles} />
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
		</>
	);
};

export default Page;
