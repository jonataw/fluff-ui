<template>
  <div>
    <FLBulletin :chip="{ color: 'white', text: 'News', icon: 'warning' }"
      >New webinars available now!
      <a href="/">Register now <FLIcon i="arrow-right"/></a
    ></FLBulletin>
    <div id="app">
      <FLModal />
      <FLToast />

      <h2>Modal</h2>
      <a style="display:block" @click="$modal.open(modal.test)">Show modal</a>

      <h2>Toast</h2>

      <a
        style="display:block"
        @click="
          $toast.pop({
            text: 'I will disappear in 5000ms!',
            options: { delay: 5000, showDelayProgress: false }
          })
        "
        >Toast with text</a
      >

      <a
        style="display:block"
        @click="
          $toast.pop({
            text: 'I will disappear when the progress bar is full!',
            options: { delay: 5000, showDelayProgress: true },
            chip: { text: 'Bye!', color: 'red', icon: 'information' }
          })
        "
        >Toast with delay progress</a
      >

      <a
        @click="
          $toast.pop({
            text: 'I will not disappear until you dismiss me by clicking the ✕ icon!',
            options: { delay: false, showDelayProgress: true },
            icon: 'question'
          })
        "
        >Toast with icon</a
      >

      <a
        style="display:block"
        @click="
          $toast.pop({
            title: 'Follow us?',
            text: 'Tweet, tweet! I will not disappear until you click me!',
            options: { delay: false, closeable: true },
            chip: { text: 'Tweet', icon: 'twitter' }
          })
        "
        >Toast with title and chip</a
      >

      <FLForm name="form" v-slot:form="{ form }">
        <h2>Chip</h2>
        <div class="flex">
          <FLChip icon="warning" color="red">404</FLChip>
          <FLChip icon="arrow-right" color="green">200</FLChip>
          <FLChip icon="menu" color="yellow">400</FLChip>
          <FLChip>Chip</FLChip>
        </div>

        <h2>Form</h2>
        <FLInput
          :size="size"
          :form="form"
          label="First name"
          type="text"
          v-model="f"
        />

        <FLInput
          :size="size"
          :form="form"
          label="Last name"
          type="text"
          v-model="l"
        />

        <FLInput
          :size="size"
          :form="form"
          label="Email"
          type="email"
          v-model="e"
          :errors="{ invalid_email_address: 'Invalid email address' }"
        />

        <FLInput
          :size="size"
          :form="form"
          label="Only numbers!"
          type="number"
          v-model="n"
          :restrict-to-number="true"
        />

        <FLDatepicker
          :size="size"
          :form="form"
          label="Hello world!"
          placeholder="A"
          type="email"
          :options="{}"
          v-model="a"
        />
        <FLTimepicker
          :size="size"
          :form="form"
          label="Hello world!"
          type="email"
          :options="{
            showSecond: false,
            use12h: true
          }"
          v-model="c"
        />

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
        <FLButton size="small" :loading="this.loading" @click.native="t"
          >Hello</FLButton
        >
        <FLButton
          size="small"
          icon="arrow-left"
          icon-align="right"
          :loading="this.loading"
          @click.native="t"
        ></FLButton>
      </div>

      <div class="flex">
        <FLButton size="small" icon="gift" @click="size = 'small'"
          >Small</FLButton
        >
        <FLButton @click="size = 'default'">Default</FLButton>
        <FLButton size="large" @click="size = 'large'">Large</FLButton>
      </div>

      <div class="flex">
        <FLButton size="large" @click.native="t">Hello</FLButton>
        <FLButton size="large" icon="gift" @click.native="t">Hello</FLButton>
        <FLButton size="large" :loading="this.loading" @click.native="t"
          >Hello</FLButton
        >
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import '@/entry/../fluff-icons/fluff-icons.scss';
import './global.scss';

import TestModal from './modal-templates/test-modal.vue';

@Component({})
export default class extends Vue {
  loading = false;
  f: string = '';
  l: string = '';
  e: string = '';
  a: string = '';
  c: string = '';
  n = '';
  size: string = '';
  b: boolean = false;

  t() {
    this.loading = !this.loading;
  }

  public modal = {
    test: TestModal
  };
}
</script>

<style lang="scss">
#app {
  background-color: #fff;
  margin: 0 auto;
  max-width: 800px;
  padding: 32px;
}
</style>
