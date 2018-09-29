const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    path.resolve('src', 'index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dest/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'sass-loader',
        options: {
          outputStyle: 'expanded',
          sourceMap: true,
        },
        loader: 'babel-loader',
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
          }
        }
      },
    ]
  },
  resolve: {
    extensions: ['.js','json','jsx','.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  devServer: {
    contentBase: 'dest',
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ]
};