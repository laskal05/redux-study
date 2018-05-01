module.exports = {
  mode: 'development', // or production
  entry: './index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.pack.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            [
              'env',
              {'modules': false}
            ],
            'react'
          ]
        }
      }],
      exclude: /node_modules/
    }]
  }
};
