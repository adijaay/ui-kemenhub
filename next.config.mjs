/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_PATH: process.env.BASE_PATH,
    BASE_API_URL: process.env.BASE_API_URL,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    API_INA_BASE_URL: process.env.API_INA_BASE_URL,
    ENCRYPTION_KEY: process.env.ENCRYPTION_KEY,
    ENCRYPTION_TYPE: process.env.ENCRYPTION_TYPE,
  },
  basePath: process.env.BASE_PATH,
  assetPrefix: process.env.BASE_PATH,
};

export default nextConfig;
