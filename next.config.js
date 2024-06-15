const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'astanainternationalforum.org',
      },
    ],
  },
  i18n,
}

module.exports = nextConfig
