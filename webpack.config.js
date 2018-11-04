module.exports = {
 
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/index.js`,
 
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dest`,
    // 出力ファイル名
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        enforce: "pre",
        // 拡張子 .js の場合
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            // Babel を利用する
            loader: 'babel-loader',
            // Babel のオプションを指定する
            query: {
              plugins: ["transform-react-jsx","babel-plugin-transform-decorators-legacy"] // babelのtransform-react-jsxプラグインを使ってjsxを変換
            }
          }
        ]
      }
    ]
}

};
