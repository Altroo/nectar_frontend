import { ListingPage } from '@/components/listingPage';
import { StyleBlock } from '@/components/common';
import { generateLocalizedMetadata } from '@/i18n/metadata';
import { listingStyles } from '@/styles/pageStyles';
import { fetchSiteContent } from '@/utils/api';

export const generateMetadata = () => generateLocalizedMetadata('/location-appartement');

const Page = async () => {
	const content = await fetchSiteContent();
	return (
		<>
			<StyleBlock css={listingStyles} />
			<ListingPage
				transaction="rent"
				propertyType="apartment"
				title="Appartements à louer à Tanger"
				kicker="Location · Appartement"
				description="Liste des appartements disponibles à la location pour juin, avec résidence, étage, numéro d’appartement, chambres et budget."
				sectionTitle="Disponibilités location"
				sectionDescription="Utilisez les filtres pour trouver rapidement un appartement par résidence, nombre de chambres ou budget maximum."
				properties={content.properties}
				contact={content.contact}
			/>
		</>
	);
};

export default Page;
