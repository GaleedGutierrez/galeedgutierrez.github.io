/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/default */
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import common from './webpack.common';

const PugPlugin = require('pug-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const config: Configuration = {
	mode: 'production',
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
	},
	output: {
		clean: true,
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
	],
};

export default merge(common, config);
