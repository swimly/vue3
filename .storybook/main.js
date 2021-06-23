module.exports = {
  "stories": [
    // "../src/**/*.stories.mdx",
    // "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.mdx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '"@storybook/addon-postcss"',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        },
        styleLoaderOptions: {
          implementation: require('style-loader')
        },
        cssLoaderOptions: {
          implementation: require('css-loader')
        }
      }
    }
  ]
}