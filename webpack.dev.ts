/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/default */
import 'webpack-dev-server';

import path from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import common from './webpack.common';

const PugPlugin = require('pug-plugin');

const config: Configuration = {
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		static: path.join(__dirname, 'dist'),
		compress: true,
		port: 8080,
		// historyApiFallback: true,
		// devMiddleware      : {
		// 	writeToDisk : true
		// },
	},
	plugins: [
		new PugPlugin({
			pretty: true,
			css: {
				filename: '[name].[contenthash].css',
			},
		}),
	],
};

export default merge(common, config);
