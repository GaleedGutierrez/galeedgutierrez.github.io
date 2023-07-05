/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/default */
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import common from './webpack.common';

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
};

export default merge(common, config);
