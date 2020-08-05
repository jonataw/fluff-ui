<template>
  <section id="icon">
    <Title text="Icon" tag="FLIcon" />
    <p>
      Shows an icon from the fluff-icons library. The icon scales with the
      font-size property.
    </p>

    <h2>Preview</h2>
    <div class="flex">
      <FLIcon i="gift" />
      <FLIcon i="package" />
      <FLIcon i="check" />
      <FLIcon i="arrow-down" />
      <FLIcon i="archive" />
      <FLIcon i="star" />
      <FLIcon i="question" />
      <FLIcon i="warning" />
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
      name: 'i!',
      type: ['string'],
      default: null,
      description:
        'Icon name. Refer to the fluff-icons repository for a list of available icons.'
    }
  ];
}
</script>

<style lang="scss" scoped></style>
