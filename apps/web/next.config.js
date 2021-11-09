/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withNx = require('@nrwl/next/plugins/with-nx');
const withLess = require('next-with-less');
const withYaml = require('next-plugin-yaml');
const withImages = require('next-images');
const removeImports = require('next-remove-imports');

module.exports = withPlugins(
  [
    [
      removeImports,
      {
        experimental: { esmExternals: true },
      },
    ],
    [withYaml],
    [
      withLess,
      {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#ff0000' },
            exportLocalsConvention: 'camelCase',
          },
        },
      },
    ],
    // [
    //   withImages,
    //   {
    //     inlineImageLimit: false,
    //   },
    // ],
    [
      withNx,
      {
        nx: {
          svgr: true,
        },
        cssModules: true,
        webpack5: true,
      },
    ],
  ],
  {
    images: {
      // disableStaticImages: true,
    },
    webpack(config) {
      console.log('coinfiuguyring webpack', config.module.rules[2]);
      // config.module.rules.unshift({
      //   test: /\.(png|jpg)$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 100,
      //   },
      // });
      return config;
    },
  }
);
