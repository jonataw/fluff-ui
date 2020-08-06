<template>
  <section id="checkbox">
    <Title text="Checkbox" tag="FLCheckbox" />
    <p>A checkbox.</p>

    <h2>Preview</h2>
    <div class="flex">
      <FLCheckbox id="a" label="Check me!" />
      <FLCheckbox id="b" label="Disabled" disabled />
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
      name: 'id!',
      type: ['string'],
      default: null,
      description: 'Element id.'
    },
    {
      name: 'value!',
      type: ['boolean'],
      default: null,
      description:
        'Determines if the checkbox is checked or not. To apply two-way binding, use the <code>v-model</code> directive.'
    },
    {
      name: 'form',
      type: ['Form'],
      default: null,
      description: 'Form slot binding.'
    },
    {
      name: 'label',
      type: ['string'],
      default: null,
      description: 'Checkbox label.'
    },
    {
      name: 'error',
      type: ['string'],
      default: null,
      description: 'Error to be shown for checkbox.'
    },
    {
      name: 'errors',
      type: ['Record<string, string>'],
      default: null,
      description:
        'Object of error messages. Useful for defining translations for error messages.'
    },
    {
      name: 'disabled',
      type: ['boolean'],
      default: false,
      description:
        'Adds the <code>disabled="disabled"</code> attribute to the checkbox element.'
    },
    {
      name: 'description',
      type: ['string'],
      default: null,
      description: 'Alias for <code>description-below</code>.'
    },
    {
      name: 'description-below',
      type: ['string'],
      default: null,
      description: 'Text to show below the checkbox.'
    }
  ];
}
</script>

<style lang="scss" scoped></style>
