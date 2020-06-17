<template>
  <div id="app">
    <FLForm name="form" v-slot:form="{ form }">
      <FLInput :size="size" :form="form" label="First name" type="text" v-model="f" />

      <FLInput :size="size" :form="form" label="Last name" type="text" v-model="l" />

      <FLInput
        :size="size"
        :form="form"
        label="Email"
        type="email"
        v-model="e"
        :errors="{ invalid_email_address: 'Invalid email address' }"
      />

      <FLDatepicker :size="size" :form="form" label="Hello world!" type="email" v-model="a" />
      <FLTimepicker :size="size" :form="form" label="Hello world!" type="email" v-model="c" />

      <FLCheckbox
        id="a"
        :form="form"
        label="Hello world!"
        type="email"
        v-model="b"
        description-below="AAA"
      />

      <FLSelect
        :size="size"
        :form="form"
        label="Hello world!"
        description="This selection indicates what you want!"
        description-below="This selection indicates what you want!"
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
        :size="size"
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
      <FLButton size="small" icon="gift" @click="size = 'small'">Small</FLButton>
      <FLButton @click="size = 'default'">Default</FLButton>
      <FLButton size="large" @click="size = 'large'">Large</FLButton>
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
  f: string = '';
  l: string = '';
  e: string = '';
  a: string = '';
  c: string = '';
  size: string = '';
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
