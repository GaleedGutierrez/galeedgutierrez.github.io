import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import CopyPlugin from 'copy-webpack-plugin';
// import HTMLWebpackPlugin from 'html-webpack-plugin';


// eslint-disable-next-line @typescript-eslint/no-var-requires
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const PugPlugin = require('pug-plugin');

const devMode = process.env.NODE_ENV !== 'production';
const config: webpack.Configuration = {
	entry : {
		index : './pug/index.pug',
		guia  : './pug/guia.pug',
		// projects : './pug/projects.pug'
	},
	output : {
		path     : path.resolve(__dirname, 'dist'),
		filename : '[name].js',
	},
	devtool : 'source-map',
	resolve : {
		extensions : [ '.ts', '.js' ],
	},
	devServer : {
		watchFiles : ['pug/*.pug'],
		hot        : true,
		static     : {
			directory : path.join(__dirname, 'dist'),
		},
		compress      : true,
		port          : 8080,
		devMiddleware : {
			writeToDisk : true
		},
	},
	module : {
		rules : [
			{
				test    : /\.ts?$/,
				exclude : /node_modules/,
				use     : {
					loader  : 'babel-loader',
					options : {
						presets : [ '@babel/preset-env', '@babel/preset-typescript' ]
					}
				}
			},
			{
				test  : /\.pug$/,
				oneOf : [
					{
						issuer  : /\.(js|ts)$/,
						loader  : PugPlugin.loader,
						options : {
							method : 'compile',
						},
					},
					{
						loader : PugPlugin.loader,
					},
				],
			},
			{
				test : /\.s[ac]ss$/i,
				use  : [
					devMode
						? 'style-loader'
						: MiniCssExtractPlugin.loader,
					// Creates `style` nodes from JS strings
					// 'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			{
				test      : /\.(woff|woff2|eot|ttf|otf|svg)$/i,
				type      : 'asset/resource',
				generator : {
					filename : 'assets/fonts/[hash][ext][query]',
				},
			},
		]
	},
	plugins : [
		new MiniCssExtractPlugin(),
		new PugPlugin(),
		new CopyPlugin({
			patterns : [{
				from : path.resolve(__dirname, './', 'assets/'),
				to   : 'assets/'
			}]
		}),
		new CleanWebpackPlugin(),
		// new HTMLWebpackPlugin(),
	]
};

export default config;
