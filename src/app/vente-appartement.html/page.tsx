import { ListingPage } from '@/components/listingPage';
import { StyleBlock } from '@/components/common';
import { listingStyles } from '@/styles/pageStyles';
import { fetchSiteContent } from '@/utils/api';

const Page = async () => {
	const content = await fetchSiteContent();
	return (
		<>
			<StyleBlock css={listingStyles} />
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
