import { getApi } from '@/utils/apiHelpers';
import { allowAnyInstance } from '@/utils/helpers';
import { WEBSITE_CONTENT_API } from '@/utils/routes';

export async function GET(): Promise<Response> {
	try {
		const response = await getApi<unknown>(WEBSITE_CONTENT_API, allowAnyInstance());
		return Response.json(response.data, {
			status: response.status,
			headers: { 'Cache-Control': 'no-store' },
		});
	} catch {
		return Response.json({ detail: 'Website content is unavailable.' }, { status: 502 });
	}
}
