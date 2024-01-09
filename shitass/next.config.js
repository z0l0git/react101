/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media3.giphy.com",
      "media1.giphy.com",
      "media0.giphy.com",
      "media4.giphy.com",
      "media2.giphy.com",
    ],
  },
};

module.exports = nextConfig;
