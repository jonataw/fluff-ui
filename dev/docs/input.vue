<template>
  <section id="input">
    <Title text="Input" tag="FLInput" />
    <p>A button.</p>

    <h2>Preview</h2>
    <h3>Sizes</h3>
    <div class="flex">
      <FLInput label="Small" inline size="small" />
      <FLInput label="Default" inline />
      <FLInput label="Large" inline size="large" />
    </div>

    <h3>Prefix / Suffix</h3>
    <div class="flex">
      <FLInput label="Prefix" prefix="10+20=" />
      <FLInput label="Suffix" suffix="EUR" />
    </div>
    <div class="flex">
      <FLInput
        label="Prefix + suffix"
        placeholder="Enter URL"
        prefix="https://"
        suffix=".com"
      />
    </div>

    <h3>Description field</h3>
    <div class="flex">
      <FLInput
        label="Above"
        inline
        description-above="Please enter your email address."
      />
    </div>
    <div class="flex">
      <FLInput
        v-model="below"
        label="Below"
        inline
        :description-below="`Your text: ${below}`"
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
  below = '';
  props = [
    {
      name: 'description',
      type: ['string'],
      default: null,
      description: 'Alias for <code>description-above</code>.'
    },
    {
      name: 'description-above',
      type: ['string'],
      default: null,
      description: 'Text to show above the input field.'
    },
    {
      name: 'description-below',
      type: ['string'],
      default: null,
      description: 'Text to show below the input field.'
    }
  ];
}
</script>

<style lang="scss" scoped></style>
