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
      config.module.rules.forEach((e) => {
        if (e.oneOf) {
          e.oneOf.forEach((e) => {
            if (/\.less/.test(e.test?.toString())) {
              if ('modules' in e.use[0].options)
                e.use[0].options.modules.exportLocalsConvention = 'camelCase';
            }
          });
        }
      });
      return config;
    },
  }
);
