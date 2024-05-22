const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        resolve: {
          fullySpecified: false,
        },
      },
      // Other rules...
    ],
  },
  ignoreWarnings: [
    {
        // eslint-disable-next-line
      module: /@react-aria\/ssr/, // Suppress warnings from this module
    },
  ],
  // Other configurations...
};
