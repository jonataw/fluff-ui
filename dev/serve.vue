<template>
  <div id="app">
    <FLForm name="form" v-slot:form="{ form }">
      <FLInput
        :form="form"
        label="Hello world!"
        type="email"
        v-model="a"
        :errors="{ invalid_email_address: 'Invalid email address' }"
      />
    </FLForm>

    <FLButton
      size="large"
      icon="arrow-left"
      :loading="{ mode: 'add', loading: this.loading }"
      @click.native="t"
      >Hello</FLButton
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import '@/entry/../style/main.scss';
import './global.scss';

@Component({})
export default class extends Vue {
  loading = false;
  a: string = '';

  t() {
    this.loading = !this.loading;
  }
}
</script>

<style lang="scss">
body {
  margin: 0 auto;
  max-width: 800px;
  padding: 32px;
}
</style>
