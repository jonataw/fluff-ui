<template>
  <div
    class="input input--textarea"
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

    <div class="input__inner">
      <textarea
        :placeholder="placeholder === undefined ? label : placeholder"
        class="input__element input__element--textarea"
        v-bind="$fluff.autoBind(binds, $props)"
        v-on="$fluff.autoListen(['change', 'input'], $listeners)"
        @change.prevent="onInput"
        @input.prevent="onInput"
      />
    </div>

    <!-- Error -->
    <span v-if="hasError" class="input__error">{{ err }}</span>

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
import InputField from '../../mixins/input-field.vue';

@Component({
  name: 'FLTextarea',
  components: {}
})
export default class extends Mixins(InputField) {
  protected binds = [
    'name',
    'id',
    'value',
    'disabled',
    'readonly',
    'autofocus',
    'autocomplete',
    'cols',
    'rows',
    'wrap'
  ];

  @Prop({ type: Number }) cols?: number;
  @Prop({ type: Number }) rows?: number;
  @Prop({ type: String, default: 'soft' }) wrap?: 'soft' | 'hard';
}
</script>
