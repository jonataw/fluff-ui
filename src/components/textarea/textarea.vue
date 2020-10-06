<template>
  <div
    class="textarea"
    :class="{ 'input--error': hasError, [`input--size-${size}`]: true }"
  >
    <!-- Textarea label -->
    <label v-if="label" :for="id" class="input__label" v-text="label" />

    <!-- Description above textarea field -->
    <p
      v-if="descriptionAbove || description"
      class="input__description"
      v-text="descriptionAbove || description"
    />

    <div class="textarea__inner">
      <textarea
        :placeholder="placeholder === undefined ? label : placeholder"
        class="textarea__element"
        v-bind="$fluff.autoBind(binds, $props)"
        v-on="$fluff.autoListen(['input'], $listeners)"
        @input="onInput($event.target.value)"
      />
    </div>

    <!-- Error -->
    <span v-if="parsedError" class="input__error">{{ parsedError }}</span>

    <!-- Description below textarea field -->
    <p
      v-if="descriptionBelow"
      class="input__description_below"
      v-html="descriptionBelow"
    ></p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import Input from '../../mixins/input.vue';
@Component({
  name: 'FLTextarea',
  components: {}
})
export default class extends Mixins(Input) {
  protected binds = [
    'name',
    'id',
    'value',
    'disabled',
    'readonly',
    'autofocus',
    'autocomplete'
  ];

  @Prop() description?: string;
  @Prop() descriptionAbove?: string;
  @Prop() descriptionBelow?: string;
  @Prop() autofocus?: boolean;
}
</script>
