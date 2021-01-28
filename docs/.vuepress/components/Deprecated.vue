<!-- Deprecated.vue -->
<template>
  <span class="deprecated">
    <slot></slot>
    <span class="tag">Deprecated</span>
  </span>
</template>

<style lang="scss" scoped>
.deprecated > .tag {
  color: #c6ad7e !important;
}
</style>
