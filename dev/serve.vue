<script lang="ts">
import Vue from 'vue';
import { FluffUiSample } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    FluffUiSample
  }
});
</script>

<template>
  <div id="app">
    <fluff-ui-sample />
  </div>
</template>
