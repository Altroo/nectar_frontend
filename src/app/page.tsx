import { HomePage } from '@/components/homePage';
import { StyleBlock } from '@/components/common';
import { homeStyles } from '@/styles/pageStyles';
import { fetchSiteContent } from '@/utils/api';

const Page = async () => {
	const content = await fetchSiteContent();
	return (
		<>
			<StyleBlock css={`${homeStyles}\n.form-status{grid-column:1/-1;margin:10px 0 0;color:#493425;font-weight:700}.form-status.is-error{color:#9b1c1c}`} />
			<HomePage content={content} />
		</>
	);
};

export default Page;
