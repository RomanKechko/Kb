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
      {
        protocol: "https",
        hostname: "gifki.su",
      },
      {
        hostname: "127.0.0.1:8000",
      },
    ],
  },
};

export default nextConfig;
