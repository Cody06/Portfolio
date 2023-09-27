/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Unoptimizing images otherwise they don't render in Firebase
    images: { unoptimized: true },
};

module.exports = nextConfig;
