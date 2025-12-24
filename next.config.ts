import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'
const repoName = 'thinklifes_website' // Tên repository của bạn

const nextConfig: NextConfig = {
  /* config options here */
  ...(isProd && {
    output: 'export',
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

export default nextConfig
