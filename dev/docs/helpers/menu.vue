<template>
  <nav id="nav">
    <a
      v-for="(route, i) in routes"
      :key="i"
      :href="`#${route.section}`"
      @click="navigate(route.section)"
      >{{ route.text }}</a
    >
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
  routes = [
    { text: 'Bulletin', section: 'bulletin' },
    { text: 'Button', section: 'button' },
    { text: 'Checkbox', section: 'checkbox' },
    { text: 'Chip', section: 'chip' },
    { text: 'Datepicker', section: 'datepicker' },
    { text: 'Divider', section: 'divider' },
    { text: 'Form', section: 'form' },
    { text: 'Icon', section: 'icon' },
    { text: 'Input', section: 'input' },
    { text: 'Loading', section: 'loading' },
    { text: 'Modal', section: 'modal' },
    { text: 'Select', section: 'select' },
    { text: 'Textarea', section: 'textarea' },
    { text: 'Timepicker', section: 'timepicker' },
    { text: 'Toast', section: 'toast' }
  ];
  navigate(section: string): void {
    if (typeof document === 'undefined') {
      return;
    }
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo(0, element.offsetTop);
    } else {
      console.warn('Unknown section:', section);
    }
  }
}
</script>

<style lang="scss" scoped>
nav#nav {
  overflow-y: auto;
  max-height: calc(100vh);
  border-left: 1px solid rgb(204, 204, 204);
  border-right: 1px solid rgb(204, 204, 204);
}
a {
  text-decoration: none;
  display: block;
  padding: 16px;
  &:not(:last-of-type) {
    border-bottom: 1px solid rgb(204, 204, 204);
  }
  &:hover {
    background-color: rgb(236, 236, 236);
  }
  &:active {
    background-color: rgb(207, 207, 207);
  }
}
</style>
