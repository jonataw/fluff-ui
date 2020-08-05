<template>
  <section id="loading">
    <Title text="Loading" tag="FLLoading" />
    <p>
      A loading spinner.
    </p>

    <h2>Preview</h2>
    <h3>Sizes</h3>
    <div class="flex sizes">
      <span>Small</span>
      <FLLoading size="small" />
      <span>Default</span>
      <FLLoading />
      <span>Large</span>
      <FLLoading size="large" />
    </div>

    <PropTable :props="props" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Title from './helpers/title.vue';
import PropTable from './helpers/prop-table.vue';

@Component({ components: { Title, PropTable } })
export default class extends Vue {
  props = [
    {
      name: 'color',
      type: ['string'],
      default: 'default',
      description:
        'Sets the element <code>loading--color-${color}</code> class.'
    },
    {
      name: 'size',
      type: ['small', 'default', 'large'],
      default: 'default',
      description: 'Determines the size of the loading icon.'
    }
  ];
}
</script>

<style lang="scss" scoped>
.sizes {
  > span {
    &:not(:first-of-type) {
      display: block;
      margin-left: 32px;
    }
  }
}
</style>
