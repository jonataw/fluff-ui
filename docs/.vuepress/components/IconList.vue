<!-- IconList.vue -->
<template>
  <div class="iconlist">
    <div v-for="icon in icons" :key="icon">
      <FLIcon :i="icon" />
      {{ icon }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.iconlist {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  > div {
    margin: 24px 0;
    text-align: center;
  }
  .icon {
    font-size: 20px;
    display: block;
  }
}
</style>

<script>
export default {
  data: function() {
    return {
      icons: [
        'edit-2',
        'external',
        'facebook',
        'facebook-f',
        'filter',
        'gift',
        'home',
        'information',
        'light',
        'link',
        'linkedin',
        'list',
        'location',
        'lock',
        'logout',
        'menu ',
        'menu-horizontal',
        'menu-vertical',
        'minus',
        'navigation',
        'nutshell',
        'package',
        'plus ',
        'question',
        'refresh',
        'search',
        'settings',
        'shield',
        'star ',
        'tag ',
        'time ',
        'trash',
        'trend-down',
        'trend-up',
        'twitter',
        'user',
        'users',
        'warning',
        'archive',
        'arrow-down',
        'arrow-left',
        'arrow-right',
        'arrow-up',
        'award',
        'bell',
        'bell-off',
        'calendar',
        'check',
        'chevron-down',
        'chevron-left',
        'chevron-right',
        'chevron-up',
        'copy',
        'cross',
        'crown',
        'dark',
        'download',
        'edit'
      ]
    };
  }
};
</script>
