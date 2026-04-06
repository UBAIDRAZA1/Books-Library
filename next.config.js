/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // SEO Optimization
  reactStrictMode: true,
  // Add site URL
  env: {
    SITE_URL: 'https://books-library-ashy.vercel.app',
  },
}

module.exports = nextConfig
