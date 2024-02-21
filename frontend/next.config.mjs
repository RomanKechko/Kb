/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'code.s3.yandex.net',
                port: '',
            }
        ],
    },
};

export default nextConfig;
