import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'
const repoName = 'thinklifes_website' // Tên repository của bạn

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enable static export
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

export default nextConfig
