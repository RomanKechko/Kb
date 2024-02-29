const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "code.s3.yandex.net",
      },
      {
        protocol: "https",
        hostname: "www.youtube.com",
      },
      {
        protocol: "https",
        hostname: "pdftron.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
