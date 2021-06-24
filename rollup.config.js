import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import {terser} from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'
const postcssConfig = require('./postcss.config')
import pkg from './package.json'
import preImport from 'postcss-prepend-imports'
import cssnano from 'cssnano'

const env = process.env.ENV
const isDev = env === 'development'
if (!isDev) {
  postcssConfig.plugins.push(cssnano())
}

postcssConfig.plugins.forEach((plugin, i) => {
  if (plugin.postcssPlugin === 'postcss-prepend-imports') {
    postcssConfig.plugins[i] = preImport({
      path: `./src/themes/${pkg.theme}`,
      files: ['variable.css']
    })
  }
})

export default {
  input: './index.js',
  output: [{
    file: `dist/${pkg.name}.js`,
    format: 'umd',
    name: pkg.name
  }],
  plugins: [
    json(),
    resolve(),
    vue({
      compileTemplate: true,
      preprocessStyles: true
    }),
    postcss({
      extract: true,
      plugins: postcssConfig.plugins
    }),
    terser()
  ],
  external: [
    'vue'
  ]
}