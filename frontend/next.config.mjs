const nextConfig = {
  reactStrictMode: true,
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
      {
        protocol: "https",
        hostname: "gifki.su",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1:8000",
      },
    ],
  },
};

export default nextConfig;
