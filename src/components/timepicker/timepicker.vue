<template>
  <div
    class="timepicker"
    :class="{ 'input--error': !!error, 'input--inline': inline, [`input--size-${size}`]: true }"
  >
    <!-- Select label -->
    <label v-if="label" :for="id" class="input__label" v-text="label" />

    <!-- Description above select field -->
    <p v-if="upperDescription" class="input__description" v-text="upperDescription" />

    <!-- Needs this div wrapper here to keep icon inside the <select> field -->
    <div class="timepicker__inner">
      <client-only>
        <date-picker
          :id="id"
          :value="value"
          :clearable="false"
          :disabled="disabled"
          :autofocus="autofocus"
          :readonly="readonly"
          type="time"
          value-type="timestamp"
          class="timepicker__element"
          :minute-step="5"
          :hour-step="1"
          :show-second="false"
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

      <span class="timepicker__icon">
        <div style="height: 16px;">
          <svg>
            <rect x="3" y="4" width="10" height="10" rx="2" ry="2" />
            <line x1="16" y1="2" x2="10" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="12" y2="10" />
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
  @Prop({ default: 'HH:mm' }) format?: string;
}
</script>
