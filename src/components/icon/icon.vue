<template>
  <div class="icon--root">
    <i class="icon" :class="`icon-${i}`" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'FLIcon',
})
export default class extends Vue {
  @Prop({ type: String, required: true }) i!: string;
}
</script>

<style lang="scss" scoped>
.icon-root {
  display: inline-block;
}
</style>
