/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["code.s3.yandex.net", "www.youtube.com"],
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
