<template>
  <section id="chip">
    <Title text="Chip" tag="FLChip" />
    <p>
      Chips. To show only the icon in a chip, use a self-closing element.
    </p>

    <h2>Preview</h2>
    <div class="flex">
      <FLChip color="green">Green Chip</FLChip>
      <FLChip color="red">Red Chip</FLChip>
      <FLChip color="green" icon="gift">Chip with icon</FLChip>
      <FLChip color="blue" icon="package" />
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
      description: 'Sets the element <code>chip--color-${color}</code> class.'
    },
    {
      name: 'icon',
      type: ['string'],
      default: null,
      description: 'Chip icon.'
    }
  ];
}
</script>

<style lang="scss" scoped></style>
