import MButton from './src/components/button/src/button.vue'

const components = [
  MButton
]

const install = (Vue) => {
  components.forEach(com => {
    Vue.component(com.name, com)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}