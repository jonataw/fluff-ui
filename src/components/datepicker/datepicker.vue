<template>
  <div
    class="datepicker"
    :class="{
      'input--error': !!parsedError,
      'input--inline': inline,
      [`input--size-${size}`]: true
    }"
  >
    <!-- Datepicker label -->
    <label v-if="label" :for="id" class="input__label" v-text="label" />

    <!-- Description above datepicker field -->
    <p
      v-if="upperDescription"
      class="input__description"
      v-text="upperDescription"
    />

    <!-- Needs this div wrapper here to keep icon inside the <datepicker> field -->
    <div class="datepicker__inner">
      <client-only>
        <date-picker
          :id="id"
          :value="value"
          :clearable="false"
          :disabled="disabled"
          :autofocus="autofocus"
          :placeholder="placeholder === undefined ? label : placeholder"
          :readonly="readonly"
          type="date"
          class="datepicker__element"
          :format="opts.format"
          :title-format="opts.headerFormat"
          :range="opts.range"
          :editable="opts.editable"
          :multiple="opts.multiple"
          :lang="opts.language"
          :disabled-date="opts.disabledDate"
          :show-week-number="opts.showWeekNumber"
          :range-separator="opts.rangeSeparator"
          :default-panel="opts.defaultPanel"
          :default-value="opts.defaultValue"
          :value-type="opts.valueType"
          @input="onInput"
          @blur="$emit('blur')"
          @focus="$emit('focus')"
        >
          <slot name="icon-calendar" />
        </date-picker>
      </client-only>

      <span v-if="error" class="datepicker__error_icon">
        <svg>
          <path
            d="M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0z M9,13.1H7V11H9V13.1z M9,9H7V2.9H9V9z"
          />
        </svg>
      </span>

      <span class="datepicker__icon">
        <div style="height: 16px;">
          <svg>
            <path
              d="M13.1,1.5h-1.5V0.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7v0.7H5.8V0.7C5.8,0.3,5.5,0,5.1,0C4.7,0,4.4,0.3,4.4,0.7
	v0.7H2.9c-1.2,0-2.2,1-2.2,2.2v10.2c0,1.2,1,2.2,2.2,2.2h10.2c1.2,0,2.2-1,2.2-2.2V3.6C15.3,2.4,14.3,1.5,13.1,1.5z M2.9,2.9h1.5
	v0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7V2.9h4.4v0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7V2.9h1.5
	c0.4,0,0.7,0.3,0.7,0.7v2.2H2.2V3.6C2.2,3.2,2.5,2.9,2.9,2.9z M13.1,14.5H2.9c-0.4,0-0.7-0.3-0.7-0.7V7.3h11.6v6.5
	C13.8,14.2,13.5,14.5,13.1,14.5z"
            />
          </svg>
        </div>
      </span>
    </div>

    <!-- Error -->
    <span v-if="parsedError" class="input__error">{{ parsedError }}</span>

    <!-- Description below datepicker field -->
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
  name: 'FLDatepicker',
  components: { Icon }
})
export default class extends Input {
  @Prop({
    type: Object
  })
  options?: {
    editable: boolean;
    multiple: boolean;
    range: boolean;
    language: string;
    showWeekNumber: false;
    rangeSeparator: string;
    defaultPanel: 'date' | 'month' | 'year';
    format: string;
    headerFormat: string;
    defaultValue: Date;
    valueType: 'date' | 'timestamp' | 'format' | string;
  };

  get opts() {
    return {
      ...{
        editable: true,
        multiple: false,
        range: false,
        language: '',
        showWeekNumber: false,
        rangeSeparator: ' > ',
        defaultPanel: 'date',
        format: 'D MMM, YYYY',
        headerFormat: 'D MMM, YYYY',
        defaultValue: new Date(),
        valueType: 'format'
      },
      ...this.options
    };
  }
}
</script>
