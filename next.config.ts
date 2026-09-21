import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.astorebags.pk',
      },
      {
        protocol: 'https',
        hostname: 'www.homewetbar.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'contents.mediadecathlon.com',
      },
      {
        protocol: 'https',
        hostname: 'www.buckleybelts.com',
      },
    ],
  },
}

export default nextConfig
