<template>
  <div class="hello-modal">
    <h2>Hello!</h2>
    <p>This is a modal.</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'modal'
})
export default class extends Vue {}
</script>

<style lang="scss">
.hello-modal {
  padding: 32px;
}
</style>
