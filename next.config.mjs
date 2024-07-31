/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'

const nextConfig = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
          reactStrictMode: true,
        }
      }
    
      // Production config
      return {
        swcMinify: true,
        images: {
          loader: 'custom',
          loaderFile: './cfImageLoader.js'
        },
      }
}
export default nextConfig