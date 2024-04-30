/* eslint-disable no-undef */
const path = require('path')
require('dotenv').config()
const Dotenv = require('dotenv-webpack')
const alias = {
  '@/components': path.join(__dirname, 'client', 'components'),
  '@/containers': path.join(__dirname, 'client', 'containers'),
  '@/hooks': path.join(__dirname, 'client', 'hooks'),
  '@/props': path.join(__dirname, 'client', 'props'),
  '@/utils': path.join(__dirname, 'client', 'utils'),
  '@/store': path.join(__dirname, 'client', 'store'),
  '@/icons': path.join(__dirname, 'client', 'public', 'icons')
}

module.exports = {
  webpack: (config) => {
    config.plugins = config.plugins || []
    config.plugins = [
      ...config.plugins,
      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env.local'),
        systemvars: true,
        silent: true
      })
    ]

    config.resolve.alias = Object.assign(
      {},
      config.resolve.alias,
      alias
    )

    return config
  }
}
