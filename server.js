/* eslint no-var:0 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function listen(err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
