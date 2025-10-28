/** @type {import('next').NextConfig} */

const isProd = process.env.NEXT_PUBLIC_NODE_ENV == "production";
const basePath = isProd ? `/${process.env.NEXT_PUBLIC_GITHUB_REPO}` : "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
