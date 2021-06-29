const { ProgressPlugin, NormalModuleReplacementPlugin } = require('webpack');

/**
 * webpack configuration file, see link for more information:
 * https://webpack.js.org/configuration/
 *
 * @param { import("webpack").Configuration } options
 * @returns { import("webpack").Configuration }
 */
module.exports = function (options) {
  return {
    ...options,
    entry: './src/main.ts',
    mode: 'production',
    plugins: [
      ...options.plugins,
      new ProgressPlugin(),
      new NormalModuleReplacementPlugin(/environment\.ts/, 'environment.prod.ts'),
    ],
  };
};
