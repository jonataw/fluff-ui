<template>
  <div
    class="input input--datepicker"
    :class="{
      'input--error': hasError,
      'input--inline': inline,
      [`input--size-${size}`]: true
    }"
  >
    <!-- Datepicker label -->
    <label v-if="label" :for="id" class="input__label" v-text="label" />

    <!-- Description above datepicker field -->
    <p
      v-if="descriptionAbove || description"
      class="input__description"
      v-text="descriptionAbove || description"
    />

    <!-- Needs this div wrapper here to keep icon inside the <datepicker> field -->
    <div class="input__inner">
      <client-only>
        <date-picker
          type="date"
          :placeholder="placeholder === undefined ? label : placeholder"
          :clearable="false"
          v-bind="$fluff.autoBind(binds, $props)"
          prefix-class="ext__datepicker"
          v-on="$fluff.autoListen(listeners, $listeners)"
          :input-attr="{
            autofocus,
            class: 'input__element input__element--datepicker'
          }"
          :partial-update="eager"
          :show-week-number="showWeekNumbers"
          @change="onChangeM"
          @input="onInputM"
        >
        </date-picker>
      </client-only>

      <span v-if="hasError" class="datepicker__error_icon">
        <svg>
          <path
            d="M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0z M9,13.1H7V11H9V13.1z M9,9H7V2.9H9V9z"
          />
        </svg>
      </span>

      <span class="datepicker__icon">
        <div>
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
    <span v-if="hasError" class="input__error">{{ err }}</span>

    <!-- Description below datepicker field -->
    <p
      v-if="descriptionBelow"
      class="datepicker__description_below"
      v-html="descriptionBelow"
    ></p>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import InputField from '../../mixins/input-field.vue';

@Component({
  name: 'FLDatepicker'
})
export default class extends Mixins(InputField) {
  protected binds = [
    'id',
    'name',
    'value',
    'autocomplete',
    'disabled',
    'readonly',
    'range',
    'format',
    'value-type',
    'confirm',
    'multiple',
    'disabled-date',
    // 'inline',
    'open',
    'default-panel',
    'range-separator'
  ];
  protected listeners = ['change', 'input'];

  protected onChangeM(value: any): void {
    this.onInput({ type: 'change' } as any, value);
  }

  protected onInputM(value: any): void {
    this.onInput({ type: 'input' } as any, value);
  }

  @Prop({ type: String }) placeholder?: string;
  @Prop({ type: Boolean, default: false }) range?: boolean;
  @Prop({ type: String, default: 'YYYY-MM-DD' }) format?: string;
  @Prop({ type: String, default: 'date' }) valueType?: string;
  @Prop({ type: Boolean, default: false }) confirm?: boolean;
  @Prop({ type: Boolean, default: false }) multiple?: boolean;
  @Prop({ type: Function }) disabledDate?: (date: Date) => boolean;
  // @Prop({ default: false }) inline?: boolean;
  @Prop({ type: Boolean, default: null }) open?: boolean | null;
  @Prop({ type: String }) defaultPanel?: 'year' | 'month';
  @Prop({ type: Boolean, default: false }) eager?: boolean;
  @Prop({ type: String, default: ' — ' }) rangeSeparator?: string;
  @Prop({ type: Boolean, default: false }) showWeekNumbers?: boolean;
}
</script>
