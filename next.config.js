/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
          reactStrictMode: true,
        }
      }
    
      // Production config
      return {
        swcMinify: true,
      }
}
