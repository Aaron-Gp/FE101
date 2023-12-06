/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-js

const { configure } = require('quasar/wrappers');
const path = require('path');

module.exports = configure(function (ctx) {
  console.log(ctx);

  return {
    eslint: {
      warnings: true,
      errors: true,
    },
    boot: ['i18n', 'axios'],
    css: ['app.scss'],
    extras: ['roboto-font', 'material-icons'],
    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node16',
      },
      vueRouterMode: 'hash',
      vitePlugins: [
        [
          '@intlify/vite-plugin-vue-i18n',
          {
            include: path.resolve(__dirname, './src/i18n/**'),
          },
        ],
      ],
      chainWebpack: (chain) => {
        chain.module
          .rule('i18n-resource')
          .test(/\.(json5?|ya?ml)$/)
          .include.add(path.resolve(__dirname, './src/i18n'))
          .end()
          .type('javascript/auto')
          .use('i18n-resource')
          .loader('@intlify/vue-i18n-loader');
        chain.module
          .rule('i18n')
          .resourceQuery(/blockType=i18n/)
          .type('javascript/auto')
          .use('i18n')
          .loader('@intlify/vue-i18n-loader');
      },
    },
    devServer: {
      // https: true
      open: true,
      port: ctx.mode.spa ? 8000 : ctx.mode.pwa ? 8080 : 9090,
    },
    framework: {
      config: {
        screen: {
          bodyClasses: true,
        },
        dark: 'auto',
      },
      plugins: [],
    },
    animations: 'all',
    ssr: {
      pwa: true,
      prodPort: 3000,
      middlewares: [
        'render', // keep this as last one
      ],
    },
    pwa: {
      workboxMode: 'generateSW',
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false,
    },
    cordova: {},
    capacitor: {
      hideSplashscreen: true,
    },
    electron: {
      inspectPort: 5858,
      bundler: 'packager',
      packager: {},
      builder: {
        appId: 'fe101',
      },
    },
    bex: {
      contentScripts: ['my-content-script'],
    },
  };
});
