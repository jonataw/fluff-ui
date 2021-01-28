<!-- Required.vue -->
<template>
  <span class="required">
    <slot></slot>
    <span class="tag">Required</span>
  </span>
</template>

<style lang="scss" scoped>
.required > .tag {
  font-weight: bold;
  color: #e2777a !important;
}
</style>
