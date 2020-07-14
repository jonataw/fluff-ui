<template>
  <div
    class="timepicker"
    :class="{
      'input--error': !!parsedError,
      'input--inline': inline,
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

    <!-- Needs this div wrapper here to keep icon inside the <input> field -->
    <div class="timepicker__inner">
      <client-only>
        <date-picker
          :id="id"
          :value="value"
          :clearable="false"
          :disabled="disabled"
          :autofocus="autofocus"
          :placeholder="placeholder === undefined ? label : placeholder"
          :readonly="readonly"
          type="time"
          class="timepicker__element"
          :open="opts.open"
          :editable="opts.editable"
          :multiple="opts.multiple"
          :lang="opts.language"
          :disabled-time="opts.disabledTime"
          :hour-step="opts.hourStep"
          :minute-step="opts.minuteStep"
          :second-step="opts.secondStep"
          :show-hour="opts.showHour"
          :show-minute="opts.showMinute"
          :show-second="opts.showSecond"
          :format="opts.format"
          :time-picker-options="opts.fixed"
          :show-time-header="opts.showHeader"
          :use12h="opts.use12h"
          :time-title-format="opts.headerFormat"
          :default-value="opts.defaultValue"
          :value-type="opts.valueType"
          @input="onInput"
          @blur="$emit('blur')"
          @focus="$emit('focus')"
        >
        </date-picker>
      </client-only>

      <span v-if="error" class="timepicker__error_icon">
        <svg>
          <path
            d="M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0z M9,13.1H7V11H9V13.1z M9,9H7V2.9H9V9z"
          />
        </svg>
      </span>

      <span class="timepicker__icon">
        <div style="height: 16px;">
          <svg>
            <path
              d="M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0z M8,14.5c-3.6,0-6.5-2.9-6.5-6.5c0-3.6,2.9-6.5,6.5-6.5
	c3.6,0,6.5,2.9,6.5,6.5C14.5,11.6,11.6,14.5,8,14.5z M8.8,7.7l3,3l-1.1,1.1L7.3,8.3l0,0H7.2V3.4h1.5V7.7z"
            />
          </svg>
        </div>
      </span>
    </div>

    <!-- Error -->
    <span v-if="parsedError" class="input__error">{{ parsedError }}</span>

    <!-- Description below timepicker field -->
    <p
      v-if="lowerDescription"
      class="input__description_below"
      v-html="lowerDescription"
    ></p>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import Input from '../input/input.vue';
import Icon from '../icon/icon.vue';

@Component({
  name: 'FLTimepicker',
  components: { Icon }
})
export default class extends Input {
  @Prop({
    type: Object
  })
  options?: {
    editable: boolean;
    multiple: boolean;
    hourStep: number;
    minuteStep: number;
    secondStep: number;
    showHour: boolean;
    showMinute: boolean;
    showSecond: boolean;
    format: string;
    showHeader: boolean;
    headerFormat: boolean;
    defaultValue: Date;
    use12h: boolean;
    valueType: 'date' | 'timestamp' | 'format' | string;
    fixed: { start: string; step: string; end: string; format: string };
  };

  get opts() {
    return {
      ...{
        editable: true,
        multiple: false,
        hourStep: 1,
        minuteStep: 5,
        secondStep: 30,
        showHour: true,
        showMinute: true,
        showSecond: false,
        format: 'HH:mm',
        showHeader: true,
        headerFormat: 'HH:mm',
        defaultValue: new Date(),
        use12h: false,
        valueType: 'format',
        fixed: undefined
      },
      ...this.options
    };
  }
}
</script>
