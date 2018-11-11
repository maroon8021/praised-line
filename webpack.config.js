const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/index.js`,

  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
		path: `${__dirname}/dest`,
		//publicPath: '/js/',
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
							plugins: ["transform-react-jsx",
							["@babel/plugin-proposal-decorators", { "legacy": true }]] // babelのtransform-react-jsxプラグインを使ってjsxを変換
            }
          }
        ]
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader', //css-loader?modules
						'sass-loader'
					]
				})
			},
			{
				test: /\.(jpeg|jpg|png|gif)$/,
				use: [
					{
						loader: 'file-loader', //loader: 'url-loader?limit=10240',
						options: {
							outputPath: 'img/',
							publicPath : path => '../img/' + path
						}
					}

				]

			}
		]
	},
	plugins: [
    new ExtractTextPlugin('css/styles.css'),
	],
	devServer: {
		contentBase: path.join(__dirname, "dest"),  //contentBase: path.join(__dirname, "dest"),
		//publicPath : '/js/',
		hot: true,
		inline: true,
		port: 9000
	}
};
