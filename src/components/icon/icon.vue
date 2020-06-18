<template>
  <i class="icon" :class="`icon-${i}`" @click="$emit('click')" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'FLIcon'
})
export default class extends Vue {
  @Prop({ type: String, required: true }) i!: string;
}
</script>
