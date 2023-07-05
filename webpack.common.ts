/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/default */
import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';
import { Configuration } from 'webpack';

const PugPlugin = require('pug-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const common: Configuration = {
	entry: {
		index: './pug/index/index.pug',
		'projects/index': './pug/projects/index.pug',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
		// assetModuleFilename: 'assets/[hash][ext][query]',
	},
	resolve: {
		extensions: ['.ts', '.js'],
		alias: {
			'@src': path.resolve(__dirname, 'src/'),
			'@utils': path.resolve(__dirname, 'src/utils/'),
			'@templates': path.resolve(__dirname, 'src/templates/'),
			'@interface': path.resolve(__dirname, 'src/interface/'),
			'@styles': path.resolve(__dirname, 'styles/'),
			'@images': path.resolve(__dirname, 'assets/images/'),
			'@fonts': path.resolve(__dirname, 'assets/fonts/'),
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
				generator: {
					filename: 'assets/fonts/[name][ext][query]',
				},
			},
			// loader para imágenes (Curso de webpack Platzi)
			{
				test: /\.(png|jpg|jpeg|gif|webp|ico|svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/images/[name].[hash][ext]',
				},
			},
		],
	},
	plugins: [
		// new MiniCssExtractPlugin({
		// 	filename: '[name].[contenthash].css',
		// }),
		// new HTMLWebpackPlugin(),
		// new PugPlugin({
		// 	css: {
		// 		filename: '[name].[contenthash].css',
		// 	},
		// }),
		new CopyPlugin({
			patterns: [
				// {
				// 	from: path.resolve(__dirname, './', 'assets/'),
				// 	to: 'assets/',
				// },
				{
					from: path.resolve(__dirname, './robots.txt'),
					to: 'robots.txt',
				},
				// {
				// 	// Según curso de webpack de platzi ->
				// 	from: path.resolve(__dirname, './', 'assets/images'),
				// 	to: 'assets/images',
				// },
			],
		}),
		new PugPlugin({
			js: {
				filename: 'src/[name].[contenthash].js',
			},
			css: {
				filename: 'styles/[name].[contenthash].css',
			},
		}),
	],
};

export default common;
