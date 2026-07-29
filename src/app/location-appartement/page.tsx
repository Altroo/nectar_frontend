import type { Metadata } from 'next';
import { ListingPage } from '@/components/pages/listings/listingPage';
import { generateLocalizedMetadata } from '@/utils/serverTranslations';
import { fetchSiteContent } from '@/utils/websiteApi';
import '@/styles/listing.css';
import '@/styles/apartment-card-overlay.css';
import '@/styles/common.css';

export const generateMetadata = (): Promise<Metadata> => generateLocalizedMetadata('/location-appartement');

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
