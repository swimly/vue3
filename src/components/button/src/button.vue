<template>
  <div class="m-button">
    <span class="m-button-">
      <slot name="icon"></slot>
    </span>
    <span class="m-button-label">
      <slot>{{label}}</slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'm-button',
  props: {
    label: {
      type: String,
      default: '按钮'
    }
  },
  setup () {
    return {}
  }
}
</script>

<style lang="css" scoped>
@import './button.css';
</style>