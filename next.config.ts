import type { NextConfig } from 'next'

// Use environment variable to determine base path
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig: NextConfig = {
  /* config options here */
  ...(basePath && {
    output: 'export',
    basePath: basePath,
    assetPrefix: `${basePath}/`,
  }),
  trailingSlash: true,
  images: {
    unoptimized: true,
    // Add loader to prepend basePath to image src
    ...(basePath && {
      loader: 'custom',
      loaderFile: './src/app/utils/imageLoader.ts',
    }),
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

export default nextConfig
