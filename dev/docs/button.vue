<template>
  <section id="button">
    <Title text="Button" tag="FLButton" />
    <p>A button.</p>

    <h2>Preview</h2>
    <h3>Sizes</h3>
    <div class="flex">
      <FLButton inline size="small">Small</FLButton>
      <FLButton inline>Default</FLButton>
      <FLButton inline size="large">Large</FLButton>
    </div>

    <h3>Icon</h3>
    <div class="flex">
      <FLButton inline icon="arrow-left">arrow-left</FLButton>
      <FLButton inline icon="check" icon-align="right">check</FLButton>
      <FLButton inline icon="cross"></FLButton>
    </div>

    <h3>Loading</h3>
    <div class="flex">
      <FLButton inline loading icon="cross"></FLButton>
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
        'Button color. Adds class .button--color-{color} to element. Define your own colors in CSS.'
    },
    {
      name: 'disabled',
      type: ['boolean'],
      default: false,
      description:
        'Adds the <code>disabled="disabled"</code> attribute to the button element.'
    },
    {
      name: 'icon',
      type: ['string'],
      default: null,
      description: 'Adds the <a href="#icon">Icon</a> component to the button.'
    },
    {
      name: 'icon-align',
      type: ['left', 'right'],
      default: 'left',
      description:
        'Determines on which side of the text the icon renders. Requires the icon prop to be set.'
    },
    {
      name: 'inline',
      type: ['boolean'],
      default: false,
      description:
        'When true, the button is rendered as <code>display: inline-flex</code> instead of <code>display: flex</code>, preventing it from spanning full container width.'
    },
    {
      name: 'loading',
      type: ['boolean'],
      default: false,
      description:
        'When true, the <a href="#loading">Loading</a> component will be rendered inside the button.'
    },
    {
      name: 'size',
      type: ['small', 'default', 'large'],
      default: 'default',
      description: 'Determines the size of the button.'
    },
    {
      name: 'type',
      type: ['submit', 'button', 'reset'],
      default: 'submit',
      description: 'Button type attribute.'
    }
  ];
}
</script>

<style lang="scss" scoped></style>
