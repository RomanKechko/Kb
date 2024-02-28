/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "code.s3.yandex.net",
        port: "",
      },
    ],
  },
};

export default nextConfig;
