/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    SECRET_JWT_SEED: process.env.SECRET_JWT_SEED,
    NEXT_APP_API_URL: process.env.NEXT_APP_API_URL,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
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
