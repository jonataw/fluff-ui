<template>
  <div
    class="input"
    :class="{
      'input--error': !!error,
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
      v-if="upperDescription"
      class="input__description"
      v-text="upperDescription"
    />

    <div class="input__outer">
      <span v-if="prefix" class="input__prefix" v-html="prefix" />

      <div class="input__inner">
        <input
          :id="id"
          :value="value"
          :type="type || 'text'"
          :disabled="disabled"
          :placeholder="placeholder === undefined ? label : placeholder"
          :autocomplete="autocomplete"
          :autofocus="autofocus"
          :readonly="readonly"
          class="input__element"
          @input.prevent="onInput($event.target.value)"
          @blur="onBlur"
          @focus="$emit('focus')"
          @keydown="$emit('keydown')"
          @keyup="$emit('keyup')"
          @keypress="$emit('keypress')"
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
    <span v-if="parsedError" class="input__error">{{ parsedError }}</span>

    <!-- Description below input field -->
    <p
      v-if="lowerDescription"
      class="input__description_below"
      v-html="lowerDescription"
    ></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Form } from '@/components/form/form.vue';

export type InputType = 'text' | 'email' | 'number' | 'password';

@Component({
  name: 'FLInput',
  components: {}
})
export default class extends Vue {
  /* Main */
  @Prop() id?: string;
  @Prop() form?: Form;
  @Prop({ required: true }) readonly value!: any;
  locError: string | null = null;

  /* Visuals */
  @Prop({ default: 'text' }) type?: InputType;
  @Prop({ type: String, default: 'default' }) readonly size?:
    | 'default'
    | 'small'
    | 'large';
  @Prop() label?: string;
  @Prop() description?: string;
  @Prop() descriptionAbove?: string;
  @Prop() descriptionBelow?: string;
  @Prop() placeholder?: string;
  @Prop() prefix?: string;
  @Prop() suffix?: string;
  @Prop({ default: false }) inline?: boolean;
  @Prop() error?: any;
  @Prop() errors?: { [k: string]: string };
  @Prop() min?: number;
  @Prop() max?: number;

  /* Functional */
  @Prop()
  autocomplete?: boolean;
  @Prop() disabled?: boolean;
  @Prop() autofocus?: boolean;
  @Prop() readonly?: boolean;
  @Prop(Number) stagger?: number;
  timeout = setTimeout(() => {}, 0);

  protected get upperDescription() {
    return this.description || this.descriptionAbove;
  }

  protected get lowerDescription() {
    return this.descriptionBelow;
  }

  protected onInput(value: any) {
    if (this.disabled) {
      /* Do not allow input if input should be disabled */
      return;
    }

    if (this.type === 'number') {
      if (!isNaN(parseInt(value))) {
        value = parseInt(value);
      }
    }

    if (this.stagger) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.$emit('staggered-input', value, this.id);
      }, this.stagger);
    }

    this.$emit('input', value, this.id);
  }

  protected onBlur(): void {
    if (this.type === 'email') {
      if (this.value.length && !this.validateEmail(this.value)) {
        this.locError = 'invalid_email_address';
      } else {
        this.locError = null;
      }
    } else if (this.type === 'number') {
      if (!this.validateNumber(this.value)) {
        this.locError = 'invalid_number';
      } else {
        if (this.max && this.value > this.max) {
          'max_value_exceeed';
        }
        if (this.max && this.value > this.max) {
          'min_value_subceeded';
        }
        this.locError = null;
      }
    }
    this.$emit('blur');
  }

  public get parsedError() {
    let error: string | null = null;
    if (this.error) {
      return this.error;
    }
    if (this.locError) {
      error = this.locError;
    } else if (this.form && this.form.childErrors) {
      const e = this.form.childErrors.find(
        (error: any) => error.path === this.id
      );
      if (e) {
        error = e.error;
      }
    }
    if (error) {
      if (this.errors && this.errors[error]) {
        return this.errors[error];
      } else {
        return error;
      }
    }
    return null;
  }

  private validateEmail(email: string | null): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  private validateNumber(number: string): boolean {
    return /^\d+$/.test(number);
  }
}
</script>
