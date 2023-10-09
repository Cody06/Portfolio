/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Unoptimizing images otherwise they don't render in Firebase
    images: { unoptimized: true },
    // Toggle strict mode to test specific cases
    reactStrictMode: true,
};

module.exports = nextConfig;
