/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['localhost', 's3.amazonaws.com'],
	},
	env: {
		GARMIN_USERNAME: process.env.GARMIN_USERNAME,
		GARMIN_PASSWORD: process.env.GARMIN_PASSWORD,
		KV_REST_API_URL: process.env.KV_REST_API_URL,
		KV_REST_API_TOKEN: process.env.KV_REST_API_TOKEN,
		REACT_APP_SECRET_KEY: process.env.REACT_APP_SECRET_KEY,
		REACT_APP_SITE_KEY: process.env.REACT_APP_SITE_KEY,
	},
};

export default nextConfig;
