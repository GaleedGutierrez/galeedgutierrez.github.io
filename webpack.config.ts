/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/default */
import CopyPlugin from 'copy-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import webpack from 'webpack';

const PugPlugin = require('pug-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const config: webpack.Configuration = {
	mode: 'production',
	entry: {
		index: './pug/index.pug',
		// guide : './pug/guide.pug',
		// projects : './pug/projects.pug'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
		assetModuleFilename: 'assets/[hash][ext][query]',
		clean: true,
	},
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
	},
	resolve: {
		extensions: ['.ts', '.js'],
		alias: {
			'@utils': path.resolve(__dirname, 'src/utils/'),
			'@templates': path.resolve(__dirname, 'src/templates/'),
			'@styles': path.resolve(__dirname, 'styles/'),
			'@images': path.resolve(__dirname, 'src/assets/images/'),
		},
	},
	module: {
		rules: [
			{
				test: /\.ts$|mts/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.pug$/,
				oneOf: [
					{
						issuer: /\.(js|ts)$/,
						loader: PugPlugin.loader,
						options: {
							method: 'compile',
						},
					},
					{
						loader: PugPlugin.loader,
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			// loader para imágenes (Curso de webpack Platzi)
			{
				test: /\.(png|jpg|jpeg|gif|webp|ico|svg)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		// new MiniCssExtractPlugin({
		// 	filename: '[name].[contenthash].css',
		// }),
		// new HTMLWebpackPlugin(),
		new PugPlugin({
			css: {
				filename: '[name].[contenthash].css',
			},
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, './', 'assets/'),
					to: 'assets/',
					// Según curo de webpack de platzi ->
					// from: path.resolve(__dirname, './', 'assets/images'),
					// to: 'assets/images',
				},
			],
		}),
	],
};

export default config;
