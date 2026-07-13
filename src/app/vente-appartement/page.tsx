import { ListingPage } from '@/components/listingPage';
import { StyleBlock } from '@/components/common';
import { generateLocalizedMetadata } from '@/i18n/metadata';
import { apartmentCardOverlayStyles } from '@/styles/apartmentCardOverlayStyles';
import { listingStyles } from '@/styles/pageStyles';
import { fetchSiteContent } from '@/utils/api';

export const generateMetadata = () => generateLocalizedMetadata('/vente-appartement');

const Page = async () => {
	const content = await fetchSiteContent();
	return (
		<>
			<StyleBlock css={listingStyles} />
			<StyleBlock css={apartmentCardOverlayStyles} />
			<ListingPage
				transaction="sale"
				propertyType="apartment"
				title="Appartements à vendre à Tanger"
				kicker="Vente · Appartement"
				description="Une page dédiée aux appartements disponibles à la vente, avec filtres par résidence, chambres et superficie."
				sectionTitle="Biens disponibles"
				sectionDescription="Utilisez les filtres pour trouver rapidement le bien qui correspond au quartier, à la surface et au projet du client."
				properties={content.properties}
				contact={content.contact}
			/>
		</>
	);
};

export default Page;
