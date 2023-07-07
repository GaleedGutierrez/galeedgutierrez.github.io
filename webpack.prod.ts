import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { merge } from 'webpack-merge';

import common from './webpack.common';

// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const IS_DEV = process.env.IS_DEV === 'true';

const config: Configuration = {
	mode: 'production',
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
	},
	output: {
		clean: true,
	},
	performance: {
		hints: 'warning',
	},
	plugins: IS_DEV ? [new BundleAnalyzerPlugin()] : [],
	// plugins: [new BundleAnalyzerPlugin()],
};

console.log(IS_DEV);

export default merge(common, config);
