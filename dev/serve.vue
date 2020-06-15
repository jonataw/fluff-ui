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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { FLForm, FLInput } from '@/entry';
import '@/entry/../style/_combined.scss';
import './global.scss';

@Component({ components: { FLForm, FLInput } })
export default class extends Vue {
  a: string = '';
}
</script>
