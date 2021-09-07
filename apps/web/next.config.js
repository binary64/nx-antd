/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withNx = require('@nrwl/next/plugins/with-nx');
const withLess = require('next-with-less');
const withYaml = require('next-plugin-yaml');
const removeImports = require('next-remove-imports');

module.exports = withPlugins([
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
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#ff0000' },
        localsConvention: 'camelCase',
      },
    },
  ],
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
]);
