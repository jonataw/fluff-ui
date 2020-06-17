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

      <FLCheckbox
        :form="form"
        label="Hello world!"
        type="email"
        v-model="b"
        description-below="AAA"
      />

      <FLSelect
        :form="form"
        label="Hello world!"
        type="email"
        v-model="a"
        :options="[
          {
            text: 'a',
            value: 'a'
          },
          {
            text: 'b',
            value: 'b'
          },
          {
            text: 'c',
            value: 'c'
          }
        ]"
      />

      <FLTextarea
        :form="form"
        label="Hello world!"
        type="email"
        v-model="a"
        description-below="AAA"
        :errors="{ invalid_email_address: 'Invalid email address' }"
      />
    </FLForm>

    <div class="flex">
      <FLLoading size="small" />
      <FLLoading />
      <FLLoading size="large" />
    </div>

    <div class="flex">
      <FLButton size="small" @click.native="t">Hello</FLButton>
      <FLButton size="small" icon="gift" @click.native="t">Hello</FLButton>
      <FLButton size="small" :loading="this.loading" @click.native="t">Hello</FLButton>
      <FLButton
        size="small"
        icon="arrow-left"
        icon-align="right"
        :loading="this.loading"
        @click.native="t"
      ></FLButton>
    </div>

    <div class="flex">
      <FLButton disabled @click.native="t">Hello</FLButton>
      <FLButton icon="gift" @click.native="t">Hello</FLButton>
      <FLButton :loading="this.loading" @click.native="t">Hello</FLButton>
      <FLButton icon="arrow-left" icon-align="right" :loading="this.loading" @click.native="t"
        >Hello</FLButton
      >
    </div>

    <div class="flex">
      <FLButton size="large" @click.native="t">Hello</FLButton>
      <FLButton size="large" icon="gift" @click.native="t">Hello</FLButton>
      <FLButton size="large" :loading="this.loading" @click.native="t">Hello</FLButton>
      <FLButton
        size="large"
        icon="arrow-left"
        icon-align="right"
        :loading="this.loading"
        @click.native="t"
        >Hello</FLButton
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import '@/entry/../scss/main.scss';
import '@/entry/../fluff-icons/fluff-icons.scss';
import './global.scss';

@Component({})
export default class extends Vue {
  loading = false;
  a: string = '';
  b: boolean = false;

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
