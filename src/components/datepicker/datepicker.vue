<template>
  <div
    class="datepicker"
    :class="{ 'input--error': !!error, 'input--inline': inline, [`input--size-${size}`]: true }"
  >
    <!-- Select label -->
    <label v-if="label" :for="id" class="input__label" v-text="label" />

    <!-- Description above select field -->
    <p v-if="upperDescription" class="input__description" v-text="upperDescription" />

    <!-- Needs this div wrapper here to keep icon inside the <select> field -->
    <div class="datepicker__inner">
      <client-only>
        <date-picker
          :id="id"
          :value="value"
          :clearable="false"
          :disabled="disabled"
          :autofocus="autofocus"
          :readonly="readonly"
          class="datepicker__element"
          :format="format"
          @input="onInput"
          @blur="$emit('blur')"
          @focus="$emit('focus')"
        >
          <slot name="icon-calendar" />
        </date-picker>
      </client-only>

      <span v-if="error" class="select__error_icon">
        <svg>
          <path
            d="M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0z M9,13.1H7V11H9V13.1z M9,9H7V2.9H9V9z"
          />
        </svg>
      </span>

      <span class="datepicker__icon">
        <div style="height: 16px;">
          <svg>
<path d="M14.1,3.5h-1.2V2.9C12.9,2.4,12.5,2,12,2c-0.5,0-0.9,0.4-0.9,0.9v0.5H7.2V2.9C7.2,2.4,6.8,2,6.3,2S5.4,2.4,5.4,2.9v0.5H4.2
	c-1.3,0-2.3,1-2.3,2.3v10c0,1.3,1,2.3,2.3,2.3h10c1.3,0,2.3-1,2.3-2.3v-10C16.4,4.5,15.4,3.5,14.1,3.5z M4.2,5.2h1.2v0.5
	c0,0.5,0.4,0.9,0.9,0.9s0.9-0.4,0.9-0.9V5.2h3.9v0.5c0,0.5,0.4,0.9,0.9,0.9c0.5,0,0.9-0.4,0.9-0.9V5.2h1.2c0.3,0,0.5,0.2,0.5,0.5v2
	h-11v-2C3.6,5.5,3.9,5.2,4.2,5.2z M14.1,16.3h-10c-0.3,0-0.5-0.2-0.5-0.5V9.5h11v6.2C14.6,16,14.4,16.3,14.1,16.3z"/>
          </svg>
        </div>
      </span>
    </div>

    <!-- Error -->
    <span v-if="error" class="input__error">{{ error }}</span>

    <!-- Description below select field -->
    <p v-if="lowerDescription" class="input__description_below" v-html="lowerDescription"></p>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import Input from '../input/input.vue';
import Icon from '../icon/icon.vue';

@Component({
  components: { Icon }
})
export default class extends Input {
  @Prop({ default: 'D MMM, YYYY' }) format?: string;
}
</script>
