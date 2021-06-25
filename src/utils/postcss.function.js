const pkg = require('../../package.json')
const isVar = pkg.var
module.exports = {
  v: (name, value) => {
    return isVar ? `var(--${name}-${value}, $${name}-${value})` : `$${name}-${value}`;
  }
}