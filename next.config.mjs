/** @type {import('next').NextConfig} */
const nextConfig = {
 output: 'export', // ensures static export
  basePath: '/aruns_portfolio', // your repo name (NO trailing slash)
  assetPrefix: '/aruns_portfolio/', // ensures images, CSS, JS are loaded correctly
  images: {
    unoptimized: true, // required since we're statically exporting
  },
};

export default nextConfig;
