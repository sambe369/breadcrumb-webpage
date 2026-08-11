/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "media.giphy.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/aboutUs',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
