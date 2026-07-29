import axios from 'axios';
import { allowAnyInstance, siteInstance } from '@/utils/helpers';

jest.mock('axios', () => ({
	__esModule: true,
	default: {
		create: jest.fn(),
	},
}));

const createMock = jest.mocked(axios.create);

describe('Axios instances', () => {
	afterEach(() => {
		jest.clearAllMocks();
		delete process.env.NEXT_PUBLIC_ROOT_API_URL;
		delete process.env.NEXT_PUBLIC_SITE_URL;
	});

	it('creates the public backend instance from the API env root', () => {
		process.env.NEXT_PUBLIC_ROOT_API_URL = 'https://api.example.test/api/';
		const instance = {} as ReturnType<typeof axios.create>;
		createMock.mockReturnValue(instance);

		expect(allowAnyInstance()).toBe(instance);
		expect(createMock).toHaveBeenCalledWith({
			baseURL: 'https://api.example.test/api',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});
	});

	it('creates the frontend proxy instance from the site env root', () => {
		process.env.NEXT_PUBLIC_SITE_URL = 'https://www.example.test/';
		const instance = {} as ReturnType<typeof axios.create>;
		createMock.mockReturnValue(instance);

		expect(siteInstance()).toBe(instance);
		expect(createMock).toHaveBeenCalledWith({
			baseURL: 'https://www.example.test',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});
	});
});
