import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const PugPlugin = require('pug-plugin');

const devMode = process.env.NODE_ENV !== 'production';
const config: webpack.Configuration = {
	entry : {
		index : './pug/index.pug',
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
		static : {
			directory : path.join(__dirname, 'dist'),
		},
		compress : true,
		port     : 3006,
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
		})
	]
};

export default config;
