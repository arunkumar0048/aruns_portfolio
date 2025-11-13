/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This ensures Next.js generates static HTML
  basePath: '/aruns-portfolio', // use your repo name here
  images: { unoptimized: true },
};

export default nextConfig;
