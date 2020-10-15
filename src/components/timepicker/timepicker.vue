<template>
  <div
    class="input input--timepicker"
    :class="{
      'input--error': hasError,
      'input--inline': inline,
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

    <!-- Needs this div wrapper here to keep icon inside the <input> field -->
    <div class="input__inner">
      <client-only>
        <date-picker
          type="time"
          :clearable="false"
          :placeholder="placeholder === undefined ? label : placeholder"
          v-bind="$fluff.autoBind(binds, $props)"
          :input-attr="{
            class: 'input__element input__element--timepicker'
          }"
          prefix-class="ext__datepicker"
          v-on="$fluff.autoListen(listeners, $listeners)"
          :show-hour="showHours"
          :show-minute="showMinutes"
          :show-second="showSeconds"
          :time-picker-options="timeOptions"
          @change="onChangeM"
          @input="onInputM"
        >
        </date-picker>
      </client-only>

      <span v-if="hasError" class="timepicker__error_icon">
        <svg>
          <path
            d="M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0z M9,13.1H7V11H9V13.1z M9,9H7V2.9H9V9z"
          />
        </svg>
      </span>

      <span class="timepicker__icon">
        <div>
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
    <span v-if="hasError" class="input__error">{{ err }}</span>

    <!-- Description below timepicker field -->
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

interface TimeOptions {
  start: string;
  step: string;
  end: string;
  format: string;
}

@Component({
  name: 'FLTimepicker'
})
export default class extends Mixins(InputField) {
  protected binds = [
    'id',
    'name',
    'value',
    'autocomplete',
    'autofocus',
    'disabled',
    'readonly',
    'value-type',
    'format',
    'hour-step',
    'minute-step',
    'second-step',
    'hour-options',
    'minute-options',
    'second-options',
    'use12h'
  ];
  protected listeners = ['change', 'input'];

  protected onChangeM(value: any): void {
    this.onInput({ type: 'change' } as any, value);
  }

  protected onInputM(value: any): void {
    this.onInput({ type: 'input' } as any, value);
  }

  @Prop({ type: String }) placeholder?: string;
  @Prop({ type: Function }) disabledTime?: (date: Date) => boolean;

  @Prop({ type: String, default: 'HH:mm' }) format?: string;
  @Prop({ type: String, default: 'date' }) valueType?: string;

  @Prop({ type: Number, default: 1 }) hourStep?: number;
  @Prop({ type: Number, default: 1 }) minuteStep?: number;
  @Prop({ type: Number, default: 1 }) secondStep?: number;

  @Prop({ type: Array }) hourOptions?: number[] | null;
  @Prop({ type: Array }) minuteOptions?: number[] | null;
  @Prop({ type: Array }) secondOptions?: number[] | null;

  @Prop({ type: Boolean, default: undefined }) showHours?: boolean | undefined;
  @Prop({ type: Boolean, default: undefined }) showMinutes?:
    | boolean
    | undefined;
  @Prop({ type: Boolean, default: undefined }) showSeconds?:
    | boolean
    | undefined;

  @Prop({ type: Boolean }) use12h?: boolean | null;

  @Prop({ type: Object }) timeOptions?: TimeOptions;
}
</script>
