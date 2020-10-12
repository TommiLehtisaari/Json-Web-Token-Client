module.exports = {
  webpack(config, { dev }) {
    config.module.rules.push({
      test: /\.g(raph)?qls?$/,
      exclude: /node_modules/,
      use: ['graphql-tag/loader'],
    })
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true,
            replaceAttrValues: {
              '#000': 'currentColor',
            },
          },
        },
      ],
    })
    return config
  },
}
