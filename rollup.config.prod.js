import config from './rollup.config'
import pkg from './package.json'
import fs from 'fs'

function getComponents (root) {
  let arr = [pkg.name]
  fs.readdirSync(root).map(file => {
    arr.push(file)
  })
  return arr
}

export default () => {
  const components = getComponents('./src/components')
  let configs = []
  components.forEach(name => {
    let con = {}
    for (const key in config) {
      con[key] = config[key]
    }
    const isMain = name === pkg.name
    con.input = isMain ? `./index.js` : `./src/components/${name}/index.js`
    con.output = [{
      file: isMain ? `dist/${name}.min.js` : `src/components/${name}/dist/${name}.min.js`,
      format: 'umd',
      name
    }]
    configs.push(con)
  })
  return configs
}