const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/assets/styles')]
  },
  reactStrictMode: false
}

module.exports = nextConfig
