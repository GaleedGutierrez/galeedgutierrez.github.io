/* eslint-disable @typescript-eslint/no-var-requires */
import CopyPlugin from 'copy-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { Configuration } from 'webpack';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common: Configuration = {
	entry: {
		index: './src/index.ts',
		'projects/index': './src/indexProjects.ts',
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].bundle.[contenthash].js',
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
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
				test: /\.(png|jpg|jpeg|gif|webp|ico|svg|avif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/images/[name].[hash][ext]',
				},
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
		new HTMLWebpackPlugin({
			inject: true,
			template: './public/index/index.html',
			filename: 'index.html',
			chunks: ['index'],
		}),
		new HTMLWebpackPlugin({
			inject: true,
			template: './public/projects/index.html',
			filename: 'projects/index.html',
			chunks: ['projects/index'],
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, './', 'assets/'),
					to: 'assets/',
				},
				{
					from: path.resolve(__dirname, './robots.txt'),
					to: 'robots.txt',
				},
				{
					from: path.resolve(__dirname, 'CNAME'),
					to: './',
				},
			],
		}),
	],
};

export default common;
