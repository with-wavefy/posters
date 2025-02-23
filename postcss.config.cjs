/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('postcss-load-config').Config} */

module.exports = {
	plugins: [require('postcss-mixins'), require('autoprefixer')]
};
