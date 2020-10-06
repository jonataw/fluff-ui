<template>
  <div
    class="input"
    :class="{
      'input--error': hasError,
      'input--inline': inline,
      'input--has-prefix': !!prefix,
      'input--has-suffix': !!suffix,
      [`input--size-${size}`]: true
    }"
  >
    <!-- Input label -->
    <label v-if="label" :for="id" class="input__label" v-text="label" />

    <!-- Description above input field -->
    <p
      v-if="descriptionAbove || description"
      class="input__description"
      v-text="descriptionAbove || description"
    />

    <div class="input__outer">
      <span v-if="prefix" class="input__prefix" v-html="prefix" />

      <div class="input__inner">
        <input
          :ref="id"
          :placeholder="placeholder === undefined ? label : placeholder"
          v-bind="$fluff.autoBind(binds, $props)"
          v-on="$fluff.autoListen(listeners, $listeners)"
          class="input__element"
          @input.prevent="onInputM($event.target.value)"
          @blur="onBlur"
          @focus="onFocus"
        />
        <span v-if="error" class="input__error_icon">
          <svg>
            <path
              d="M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0z M9,13.1H7V11H9V13.1z M9,9H7V2.9H9V9z"
            />
          </svg>
        </span>
      </div>

      <span v-if="suffix" class="input__suffix" v-html="suffix" />
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
import { Component, Mixins, Prop } from 'vue-property-decorator';
import InputField from '../../mixins/input-field.vue';
export type InputType = 'text' | 'email' | 'number' | 'password';
@Component({
  name: 'FLInput',
  components: {}
})
export default class extends Mixins(InputField) {
  protected binds = [
    'id',
    'name',
    'value',
    'type',
    'min',
    'max',
    'disabled',
    'readonly',
    'autocomplete',
    'autofocus'
  ];
  protected listeners = ['blur', 'focus', 'input'];

  @Prop({ type: String, default: 'text' }) type?: InputType;
  @Prop({ type: String }) placeholder?: string;
  @Prop({ type: String }) prefix?: string;
  @Prop({ type: String }) suffix?: string;
  @Prop({ type: Boolean }) autocomplete?: boolean;
  @Prop({ type: Number }) delayed?: number;

  protected onInputM(value: any): void {
    this.onInput(value);
    if (this.delayed) {
      this.startDelay(value);
    }
  }

  /*
  private validateEmail(email: string | null): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  private validateNumber(number: string): boolean {
    return /^\d+$/.test(number);
  }
  */

  private timeout = window.setTimeout(() => {}, 0);
  private startDelay(value: any): void {
    window.clearTimeout(this.timeout); // Reset the timeout.
    this.timeout = window.setTimeout(() => {
      this.$emit('input-delayed', value, this.id);
    }, this.delayed);
  }
}
</script>
