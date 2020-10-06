<template>
  <div
    class="select"
    :class="{
      'select--error': hasError,
      'select--inline': inline,
      'select--disabled': disabled,
      [`select--size-${size}`]: true
    }"
  >
    <!-- Select label -->
    <label v-if="label" :for="id" class="select__label" v-text="label" />

    <!-- Description above select field -->
    <p
      v-if="descriptionAbove || description"
      class="input__description"
      v-text="descriptionAbove || description"
    />

    <!-- Needs this div wrapper here to keep icon inside the <select> field -->
    <div class="select__inner">
      <select
        class="select__element"
        v-bind="$fluff.autoBind(binds, $props)"
        v-on="$fluff.autoListen(['change'], $listeners)"
        @change="onInputM($event.target.value)"
      >
        <option
          v-for="(option, i) in options"
          :key="i"
          :value="option.value"
          class="select__option"
          :class="{
            'select__option--selected': option.value === value
          }"
          v-text="option.text"
        />
      </select>

      <span v-if="error" class="select__error_icon">
        <svg>
          <path
            d="M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0z M9,13.1H7V11H9V13.1z M9,9H7V2.9H9V9z"
          />
        </svg>
      </span>

      <span class="select__icon">
        <div style="height: 16px;">
          <svg>
            <path
              d="M11.9,10c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4L9,15.7c-0.4,0.4-1,0.4-1.4,0l-4.3-4.3c-0.4-0.4-0.4-1,0-1.4
s1-0.4,1.4,0l3.6,3.6C8.3,13.6,11.9,10,11.9,10z M11.9,6L8.3,2.4L4.7,6c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l4.3-4.3
c0.4-0.4,1-0.4,1.4,0l4.3,4.3c0.4,0.4,0.4,1,0,1.4C12.9,6.4,12.3,6.4,11.9,6z"
            />
          </svg>
        </div>
      </span>
    </div>

    <!-- Error -->
    <span v-if="hasError" class="select__error">{{ err }}</span>

    <!-- Description below select field -->
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

interface OptionItem {
  text: string;
  value: unknown;
}
@Component({
  name: 'FLSelect'
})
export default class extends Mixins(InputField) {
  protected binds = ['name', 'id', 'value'];
  @Prop({ type: Array, required: true }) readonly options!: OptionItem[];

  protected onInputM(value: string | boolean | number | null): void {
    if (this.disabled) {
      return;
    }
    if (value === 'false') {
      value = false;
    }
    if (value === 'true') {
      value = true;
    }
    if (value === '') {
      value = null;
    }
    this.onInput(value);
  }
}
</script>
