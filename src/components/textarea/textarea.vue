<template>
  <div class="textarea--root">
    <div class="textarea" :class="{ 'textarea--has-error': !!error }">
      <!-- Textarea label -->
      <label v-if="label" :for="id" class="textarea--label" v-text="label" />

      <!-- Description above textarea field -->
      <p v-if="upperDescription" class="textarea--description" v-text="upperDescription" />

      <div class="textarea--html-element">
        <textarea
          :id="id"
          :value="value"
          :disabled="disabled"
          :placeholder="placeholder === undefined ? label : placeholder"
          :autocomplete="autocomplete"
          :autofocus="autofocus"
          :readonly="readonly"
          @input="onInput($event.target.value)"
          @blur="onBlur"
          @focus="$emit('focus')"
          @keydown="$emit('keydown')"
          @keyup="$emit('keyup')"
          @keypress="$emit('keypress')"
        />
      </div>

      <!-- Error -->
      <span v-if="error" class="textarea--error">{{ error }}</span>

      <!-- Description below input field -->
      <p v-if="lowerDescription" class="textarea--description-below" v-html="lowerDescription"></p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import Input from '../input/input.vue';

@Component({
  components: {}
})
export default class extends Input {}
</script>
