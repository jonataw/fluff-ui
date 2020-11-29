<template>
  <div
    class="input input--select"
    :class="{
      'input--error': hasError,
      'input--inline': inline,
      'input--disabled': disabled,
      [`input--size-${size}`]: true
    }"
  >
    <!-- Select label -->
    <label v-if="label" :for="id" class="input__label" v-text="label" />

    <!-- Description above input field -->
    <p
      v-if="descriptionAbove || description"
      class="input__description"
      v-text="descriptionAbove || description"
    />

    <!-- Needs this div wrapper here to keep icon inside the <select> field -->
    <div class="input__inner">
      <select
        class="input__element input__element--select"
        v-bind="$fluff.autoBind(binds, $props)"
        v-on="$fluff.autoListen(['change', 'input'], $listeners)"
        @change.prevent="onInputM"
        @input.prevent="onInputM"
      >
        <option
          v-for="(option, i) in options"
          :key="i"
          :value="option.value"
          :disabled="option.disabled"
          class="select__option"
          :class="{
            'select__option--selected': option.value === value
          }"
          v-text="option.text"
        />
      </select>

      <span v-if="hasError" class="input__error_icon input__error_icon--select">
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
    <span v-if="hasError" class="input__error">{{ err }}</span>

    <!-- Description below input field -->
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
  disabled: boolean;
}
@Component({
  name: 'FLSelect'
})
export default class extends Mixins(InputField) {
  protected binds = ['name', 'id', 'value'];
  @Prop({ type: Array, required: true }) readonly options!: OptionItem[];

  protected onInputM(event: Event): void {
    if (this.disabled) {
      return;
    }

    let value = (event.target as HTMLInputElement).value,
      parsed: any = value;

    if (value === 'false') {
      parsed = false;
    }
    if (value === 'true') {
      parsed = true;
    }
    if (value === '') {
      parsed = null;
    }
    this.onInput(event, parsed);
  }
}
</script>
