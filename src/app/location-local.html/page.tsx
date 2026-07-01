import { ListingPage } from '@/components/listingPage';
import { StyleBlock } from '@/components/common';
import { listingStyles } from '@/styles/pageStyles';
import { fetchSiteContent } from '@/utils/api';

export const metadata = {
	title: 'Locaux à louer à Tanger - Nectar Real Estate',
};

const Page = async () => {
	const content = await fetchSiteContent();
	return (
		<>
			<StyleBlock css={listingStyles} />
			<ListingPage
				transaction="rent"
				propertyType="commercial"
				title="Locaux à louer à Tanger"
				kicker="Location · Local"
				description="Page dédiée aux locaux à louer. Contactez Nectar pour recevoir une sélection adaptée au projet."
				sectionTitle="Biens disponibles"
				sectionDescription="Utilisez les filtres pour trouver rapidement le bien qui correspond au quartier, à la surface et au projet du client."
				properties={content.properties}
				contact={content.contact}
			/>
		</>
	);
};

export default Page;
