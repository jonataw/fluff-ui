<template>
  <div
    class="checkbox"
    :class="{
      'checkbox--error': hasError,
      'checkbox--disabled': disabled,
      'checkbox--checked': value,
      [`checkbox--size-${size}`]: true
    }"
  >
    <div class="checkbox__outer">
      <div class="checkbox__inner">
        <input
          :ref="id"
          :checked="value"
          type="checkbox"
          class="checkbox__element"
          v-bind="$fluff.autoBind(binds, $props)"
          v-on="$fluff.autoListen(['change'], $listeners)"
          @change="onInput"
        />

        <label class="checkbox__fill_box" :for="id">
          <svg viewBox="0 0 64 64">
            <path
              d="M60.6,12.4c-1.3-1.3-3.3-1.3-4.6,0L24.2,44.2c-0.8,0.8-2.3,0.8-3.2,0l-13-13c-1.3-1.3-3.3-1.3-4.6,0c-1.3,1.3-1.3,3.3,0,4.6
L18,50.4l0,0l0.4,0.4c1.2,1.2,2.7,1.7,4.2,1.7c1.5,0,3.1-0.6,4.2-1.7l0.4-0.4l0,0L60.6,17C61.8,15.8,61.8,13.7,60.6,12.4z"
            />
          </svg>
        </label>
      </div>
      <label v-if="label" :for="id" class="checkbox__label" v-text="label" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Input from '../../mixins/input.vue';

@Component({
  name: 'FLCheckbox',
  model: {
    prop: 'value',
    event: 'change'
  }
})
export default class extends Mixins(Input) {
  protected binds = [
    'id',
    'name',
    'value',
    'disabled',
    'aria-label',
    'aria-labelledby'
  ];
}
</script>
