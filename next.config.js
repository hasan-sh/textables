const withSass = require('@zeit/next-sass')
module.exports = withSass({
  distDir: 'build',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/textables' : '',
  cssModules: true
})
