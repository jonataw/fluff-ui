<template>
  <div
    class="select dsa sda d s"
    :class="{
      'input--error': !!parsedError,
      'input--inline': inline,
      [`input--size-${size}`]: true
    }"
  >
    <!-- Select label -->
    <label v-if="label" :for="id" class="input__label" v-text="label" />

    <!-- Description above select field -->
    <p
      v-if="upperDescription"
      class="input__description"
      v-text="upperDescription"
    />

    <!-- Needs this div wrapper here to keep icon inside the <select> field -->
    <div class="select__inner">
      <select
        :id="id"
        :value="value"
        :disabled="disabled"
        :autofocus="autofocus"
        :readonly="readonly"
        class="select__element"
        @change="onInput($event.target.value)"
        @blur="$emit('blur')"
        @focus="$emit('focus')"
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
    <span v-if="parsedError" class="input__error">{{ parsedError }}</span>

    <!-- Description below select field -->
    <p
      v-if="lowerDescription"
      class="input__description_below"
      v-html="lowerDescription"
    ></p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import Input from '../../mixins/input.vue';
import Icon from '../icon/icon.vue';

interface OptionItem {
  text: string;
  value: unknown;
}

@Component({
  name: 'FLSelect',
  components: { Icon }
})
export default class extends Mixins(Input) {
  @Prop({ type: Array, required: true }) readonly options!: OptionItem[];

  protected onInput(value: string | boolean | number | null) {
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
    this.$emit('input', value);
  }
}
</script>
