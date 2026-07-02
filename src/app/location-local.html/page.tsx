import { ListingPage } from '@/components/listingPage';
import { StyleBlock } from '@/components/common';
import { listingStyles } from '@/styles/pageStyles';
import { fetchSiteContent } from '@/utils/api';

export const metadata = {
	title: 'Location de locaux commerciaux - Nectar Real Estate',
};

const Page = async () => {
	const content = await fetchSiteContent();
	return (
		<>
			<StyleBlock css={listingStyles} />
			<ListingPage
				transaction="rent"
				propertyType="commercial"
				title="Location de locaux commerciaux"
				kicker="Location · Local"
				description="Découvrez les locaux commerciaux disponibles à la location avec surfaces RDC, mezzanine et superficies totales."
				sectionTitle="Biens disponibles"
				sectionDescription="Utilisez les filtres pour trouver rapidement le bien qui correspond au quartier, à la surface et au projet du client."
				properties={content.properties}
				contact={content.contact}
			/>
		</>
	);
};

export default Page;
