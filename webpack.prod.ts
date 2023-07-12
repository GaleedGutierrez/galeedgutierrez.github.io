/* eslint-disable @typescript-eslint/no-var-requires */
import CopyPlugin from 'copy-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import { Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { merge } from 'webpack-merge';

// import { GenerateSW } from 'workbox-webpack-plugin';
import common from './webpack.common';

const glob = require('glob-all');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');

('purgecss-webpack-plugin');

// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const IS_DEV = process.env.IS_DEV === 'true';
const PATHS = {
	public: path.join(__dirname, 'public'),
	src: path.join(__dirname, 'src'),
	styles: path.join(__dirname, 'styles'),
};
const config: Configuration = {
	mode: 'production',
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
		splitChunks: {
			chunks: 'all',
		},
	},
	output: {
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
	performance: {
		hints: 'error',
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
		new PurgeCSSPlugin({
			paths: glob.sync([`${PATHS.public}/**/*`, `${PATHS.src}/**/*`], {
				nodir: true,
			}),
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(
						__dirname,
						'assets/images/icons/nature/space/'
					),
					to: 'assets/images',
				},
				{
					from: path.resolve(__dirname, 'assets/images/me/'),
					to: 'assets/images',
				},
				{
					from: path.resolve(__dirname, 'assets/images/favicon/'),
					to: 'assets/images',
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

if (IS_DEV) {
	config?.plugins?.push(new BundleAnalyzerPlugin());
}

export default merge(common, config);
