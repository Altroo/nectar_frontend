import { ListingPage } from '@/components/listingPage';
import { generateLocalizedMetadata } from '@/i18n/metadata';
import { fetchSiteContent } from '@/utils/api';
import '@/styles/listing.css';
import '@/styles/apartment-card-overlay.css';
import '@/styles/common.css';

export const generateMetadata = () => generateLocalizedMetadata('/location-appartement');

const Page = async () => {
	const content = await fetchSiteContent();
	return (
		<ListingPage
			transaction="rent"
			propertyType="apartment"
			title="Appartements à louer à Tanger"
			kicker="Location · Appartement"
			description="Liste des appartements disponibles à la location pour juillet, avec résidence, étage, numéro d’appartement, chambres et budget."
			sectionTitle="Disponibilités location"
			sectionDescription="Utilisez les filtres pour trouver rapidement un appartement par résidence, nombre de chambres ou budget maximum."
			properties={content.properties}
			contact={content.contact}
		/>
	);
};

export default Page;
