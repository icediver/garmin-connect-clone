/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['localhost'],
	},
	env: {
		GARMIN_USERNAME: process.env.GARMIN_USERNAME,
		GARMIN_PASSWORD: process.env.GARMIN_PASSWORD,
		KV_REST_API_URL: process.env.KV_REST_API_URL,
		KV_REST_API_TOKEN: process.env.KV_REST_API_TOKEN,
	},
};

export default nextConfig;
