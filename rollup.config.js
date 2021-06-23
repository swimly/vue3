import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import {terser} from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'
const postcssConfig = require('./postcss.config')
import pkg from './package.json'


export default {
  input: './index.js',
  output: [{
    file: `dist/${pkg.name}.min.js`,
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