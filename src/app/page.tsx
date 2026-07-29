import { HomePage } from '@/components/homePage';
import { StyleBlock } from '@/components/common';
import { homeStyles } from '@/styles/pageStyles';
import { fetchSiteContent } from '@/utils/api';

const Page = async () => {
	const content = await fetchSiteContent();
	return (
		<>
			<StyleBlock
				css={`${homeStyles}
.contact-photo-form .contact-photo-btn[type="submit"]{
	background:#493425 !important;
	border-color:#493425 !important;
	color:#F5F5F3 !important;
	font-weight:700 !important;
}
.contact-photo-form .contact-photo-btn[type="submit"]:hover{
	background:transparent !important;
	color:#493425 !important;
}
.form-status{grid-column:1/-1;margin:10px 0 0;color:#493425;font-weight:700}
.form-status.is-error{color:#9b1c1c}`}
			/>
			<HomePage content={content} />
		</>
	);
};

export default Page;
