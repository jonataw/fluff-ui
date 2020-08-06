<template>
  <section id="select">
    <Title text="Select" tag="FLSelect" />
    <p>A button.</p>

    <h2>Preview</h2>
    <h3>Sizes</h3>
    <div class="flex">
      <FLSelect
        label="Small"
        inline
        size="small"
        :options="[
          { text: 'Option 1', value: 1 },
          { text: 'Option 2', value: 2 },
          { text: 'Option 3', value: 3 }
        ]"
      />
      <FLSelect
        label="Default"
        inline
        :options="[
          { text: 'Option 1', value: 1 },
          { text: 'Option 2', value: 2 },
          { text: 'Option 3', value: 3 }
        ]"
      />
      <FLSelect
        label="Large"
        inline
        size="large"
        :options="[
          { text: 'Option 1', value: 1 },
          { text: 'Option 2', value: 2 },
          { text: 'Option 3', value: 3 }
        ]"
      />
    </div>

    <div class="flex">
      <FLSelect
        v-model="below"
        label="Select a fruit"
        inline
        :description-below="
          `${
            below
              ? 'You chose an ' + below + '.'
              : 'You have not chosen a fruit.'
          }`
        "
        :options="[
          { text: '- Fruit -', value: null },
          { text: 'Apple', value: 'apple' },
          { text: 'Avocado', value: 'avocado' },
          { text: 'Orange', value: 'orange' }
        ]"
      />
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
  below = null;
  props = [];
}
</script>

<style lang="scss" scoped></style>
