/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    SECRET_JWT_SEED: process.env.SECRET_JWT_SEED,
    NEXT_APP_API_URL: process.env.NEXT_APP_API_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE: process.env.DATABASE,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_USER: process.env.DATABASE_USER,
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_PORT: 5432,
  },
  async headers() {
    return [
      {
        source: '/auth/renew.ts',
        headers: [
          {
            key: 'x-token',
            value: '',
          },
        ],
      },
    ];
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};
