/* eslint-disable @typescript-eslint/no-var-requires */
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { merge } from 'webpack-merge';

// import { GenerateSW } from 'workbox-webpack-plugin';
import common from './webpack.common';

// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const IS_DEV = process.env.IS_DEV === 'true';

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
	// module: {
	// 	rules: [
	// 		{
	// 			test: /\.s[ac]ss$/i,
	// 			use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
	// 		},
	// 	],
	// },
	performance: {
		hints: 'warning',
	},
	plugins: [
		// new MiniCssExtractPlugin({
		// 	filename: '[name].css',
		// }),
	],
};

if (IS_DEV) {
	config?.plugins?.push(new BundleAnalyzerPlugin());
}

export default merge(common, config);
