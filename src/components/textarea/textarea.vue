<template>
  <div class="textarea" :class="{ 'input--error': !!error, [`input--size-${size}`]: true }">
    <!-- Textarea label -->
    <label v-if="label" :for="id" class="input__label" v-text="label" />

    <!-- Description above textarea field -->
    <p v-if="upperDescription" class="input__description" v-text="upperDescription" />

    <div class="textarea__inner">
      <textarea
        :id="id"
        :value="value"
        :disabled="disabled"
        :placeholder="placeholder === undefined ? label : placeholder"
        :autocomplete="autocomplete"
        :autofocus="autofocus"
        :readonly="readonly"
        class="textarea__element"
        @input="onInput($event.target.value)"
        @blur="onBlur"
        @focus="$emit('focus')"
        @keydown="$emit('keydown')"
        @keyup="$emit('keyup')"
        @keypress="$emit('keypress')"
      />
    </div>

    <!-- Error -->
    <span v-if="error" class="input__error">{{ error }}</span>

    <!-- Description below textarea field -->
    <p v-if="lowerDescription" class="input__description_below" v-html="lowerDescription"></p>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import Input from '../input/input.vue';

@Component({
  name: 'FLTextarea',
  components: {}
})
export default class extends Input {}
</script>
